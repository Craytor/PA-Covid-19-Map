<template>
	<div class="text-left bg-gray-200 min-h-screen">
		<div class="w-full bg-gray-800 md:pt-20 md:pb-48 text-white"> <!-- h-96 -->
			<div class="lg:max-w-5xl mx-auto md:px-4 p-4">
				<router-link class="hover:text-gray-500 transition cursor-pointer" :to="{ name: 'Home'}">
					<i class="fal fa-chevron-circle-left text-3xl "></i>
				</router-link>

				<div class="mt-4">
					<h1 class="text-4xl">{{ countyData.county }} County</h1>
					<h4 class="uppercase font-light tracking-widest">Pennyslvania</h4>
				</div>

				<div class="w-full flex flex-wrap md:flex-row content-center justify-between mt-16">

					<div class="w-full md:w-auto">
						<h3 class="text-2xl uppercase text-bold">{{ parseDate(countyData.dateOfFirstCase) }}</h3>
						<span class="tracking-widest uppercase text-sm">First Case</span>
					</div>

					<div class="w-full pt-6 md:pt-0 md:w-auto">
						<h3 class="text-2xl uppercase text-bold">{{ parseDate(countyData.dateOfDisasterDeclaration) }}</h3>
						<span class="tracking-widest uppercase text-sm">Disaster Declaration</span>
					</div>

					<div class="w-full pt-6 md:pt-0  md:w-auto">
						<h3 class="text-2xl uppercase text-bold flex items-center">
							{{ countyData.cases }}
							<i class="fa fa-arrow-up pl-1 text-green-600 text-lg" v-if="countyData.status == 1"></i>
							<i class="fa fa-arrow-right pl-2 text-gray-600" v-if="countyData.status == 0"></i>
						</h3>
						<span class="tracking-widest uppercase text-sm">Cases</span>
					</div>

					<div class="w-full pt-6 md:pt-0  md:w-auto">
						<h3 class="text-2xl uppercase text-bold">{{ countyData.deaths == undefined ? '0' : countyData.deaths }}</h3>
						<span class="tracking-widest uppercase text-sm">Deaths</span>
					</div>

				</div>
				<div class="">

				</div>
				<!-- <div class="h-20 w-full"></div> -->
			</div>
		</div>
		<div class="w-full">
			<div class="lg:max-w-5xl mx-auto md:-mt-32 md:px-4">
				<div class="w-full bg-white md:rounded-lg h-72 md:shadow-lg">
					<div id="casesChart" class="w-full h-full" ref="chart"></div>
				</div>
				<div class="pb-4 text-center mt-10">
					<h4 class="text-xs">Developed by Tyler Youschak &middot; <a class="text-blue-600" href="mailto:tyler@cirrus.tech">Contact Me</a> &middot; <a class="text-blue-600" href="https://forms.gle/GcTKNAQxQaaiLpoh6">Found an issue?</a></h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

    import * as d3 from 'd3'
	import * as topojson from 'topojson'
	
	import virusData from '../assets/data/virus-data.js'
	import moment from 'moment'

    export default {
        name: 'App',
        data() {
            return {
                statesData: {},
				virusData: virusData,

				countyData: {}
            }
        },
		mounted() {
			this.countyData = virusData.filter(county => {
				return county.id == this.$route.params.id
			})[0]

			this.createGraph()

            window.addEventListener("resize", this.redraw)
        },
        methods: {
			moment() {
				return moment();
			},
			parseDate(date) {
				return date == null ? 'N/A' : moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY')
			},
            createGraph() {
                let initWidth = this.$refs.chart.clientWidth
                let initHeight = this.$refs.chart.clientHeight

                let svg = d3.select("#casesChart").append("svg")
                    .attr('width', initWidth)
					.attr('height', initHeight)
					
				var tooltip = d3.select("#casesChart").append("div") 
                    .attr("class", "tooltip-w-auto")       
                    .style("opacity", 0);

                var margin = {left:40, right:40, top: 10, bottom: 40}
                var width = initWidth - margin.left - margin.right;
                var height = initHeight - margin.bottom - margin.top;

                var x = d3.scaleTime()
                    .range([0, width]);
                var x_axis = d3.axisBottom(x);
                
                var y = d3.scaleLinear()
                    .range([height, 0]);
                var y_axis = d3.axisBottom(y);

                var xFormat = "%b %e";
                var parseTime = d3.timeParse("%Y-%m-%d");

                x.domain(d3.extent(this.countyData.dailyOverview, function(data) { 
                    return parseTime(data.date); 
                }));

                let max = d3.max(this.countyData.dailyOverview, function(data) { 
                    return +data.cases
                })
                y.domain([0, max]);

                var g = svg.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
					
				// Add the X Axis
                g.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x).tickFormat(d3.timeFormat(xFormat)));
                
                // Add the Y Axis
                g.append("g")
                    .call(d3.axisLeft(y));

                let totalCases = d3.line()
                    .x(function(d) { return x(parseTime(d.date)); })
                    .y(function(d) { return y(d.cases); })
                    .curve(d3.curveMonotoneX);

                g.append("path")
                    .datum(this.countyData.dailyOverview) 
                    .attr("class", "line")
                    .attr("fill", 'none')
                    .attr("stroke-width", '2px')
                    .attr("stroke", "#2d3748")
					.attr("d", totalCases);
					
				g.selectAll("dot")
                    .data(this.countyData.dailyOverview)
                    .enter().append("circle")
                    .attr("r", 3.5)
                    .attr("cx", function(d) { return x(parseTime(d.date)); })
                    .attr("cy", function(d) { return y(d.cases); })
                    .style("fill",'#2d3748')
                    .on('mouseover', function(d) {
                        d3.select(this).style("fill", "#ADABAB"); 
                        tooltip.transition()    
                            .duration(200)    
                            .style("opacity", .9);    
                        tooltip.html(d.cases + " cases")  
                            .style("left", (d3.event.pageX) + "px")   
                            .style("top", (d3.event.pageY - 28) + "px");  
                    })
                    .on("mouseout", function(d) {   
                        tooltip.transition()    
                            .duration(500)    
                            .style("opacity", 0); 
                        d3.select(this).style("fill", "#2d3748");
                    });
			},
			redraw() {
                let initWidth = this.$refs.chart.clientWidth
				let initHeight = this.$refs.chart.clientHeight
				
				d3.select("#casesChart svg").remove();

                let svg = d3.select("#casesChart").append("svg")
                    .attr('width', initWidth)
					.attr('height', initHeight)
				
				var tooltip = d3.select("#casesChart").append("div") 
                    .attr("class", "tooltip-w-auto")       
                    .style("opacity", 0);

                var margin = {left:40, right:40, top: 10, bottom: 40}
                var width = initWidth - margin.left - margin.right;
                var height = initHeight - margin.bottom - margin.top;

                var x = d3.scaleTime()
                    .range([0, width]);
                var x_axis = d3.axisBottom(x);
                
                var y = d3.scaleLinear()
                    .range([height, 0]);
                var y_axis = d3.axisBottom(y);

                var xFormat = "%b %e";
                var parseTime = d3.timeParse("%Y-%m-%d");

                x.domain(d3.extent(this.countyData.dailyOverview, function(data) { 
                    return parseTime(data.date); 
                }));

                let max = d3.max(this.countyData.dailyOverview, function(data) { 
                    return +data.cases
                })
                y.domain([0, max]);

                var g = svg.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
					
				// Add the X Axis
                g.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x).tickFormat(d3.timeFormat(xFormat)));
                
                // Add the Y Axis
                g.append("g")
                    .call(d3.axisLeft(y));

                let totalCases = d3.line()
                    .x(function(d) { return x(parseTime(d.date)); })
                    .y(function(d) { return y(d.cases); })
                    .curve(d3.curveMonotoneX);

                g.append("path")
                    .datum(this.countyData.dailyOverview) 
                    .attr("class", "line")
                    .attr("fill", 'none')
                    .attr("stroke-width", '2px')
                    .attr("stroke", "#2d3748")
					.attr("d", totalCases);
					
				g.selectAll("dot")
                    .data(this.countyData.dailyOverview)
                    .enter().append("circle")
                    .attr("r", 3.5)
                    .attr("cx", function(d) { return x(parseTime(d.date)); })
                    .attr("cy", function(d) { return y(d.cases); })
                    .style("fill",'#2d3748')
                    .on('mouseover', function(d) {
                        d3.select(this).style("fill", "#ADABAB"); 
                        tooltip.transition()    
                            .duration(200)    
                            .style("opacity", .9);    
                        tooltip.html(d.cases + " cases")  
                            .style("left", (d3.event.pageX) + "px")   
                            .style("top", (d3.event.pageY - 28) + "px");  
                    })
                    .on("mouseout", function(d) {   
                        tooltip.transition()    
                            .duration(500)    
                            .style("opacity", 0); 
                        d3.select(this).style("fill", "#2d3748");
                    });
                
            }
		}
    }
</script>

<style>
	.h-96 {
		height: 24rem;
	}
	.h-72 {
		height: 18rem
	}
</style>


// .h-0	height: 0;
// .h-1	height: 0.25rem;
// .h-2	height: 0.5rem;
// .h-3	height: 0.75rem;
// .h-4	height: 1rem;
// .h-5	height: 1.25rem;
// .h-6	height: 1.5rem;
// .h-8	height: 2rem;
// .h-10	height: 2.5rem;
// .h-12	height: 3rem;
// .h-16	height: 4rem;
// .h-20	height: 5rem;
// .h-24	height: 6rem;
// .h-32	height: 8rem;
// .h-40	height: 10rem;
// .h-48	height: 12rem;
// .h-56	height: 14rem;
// .h-64	height: 16rem;
// .h-72	height: 18
// .h-80	height: 20
// .h-88	height: 22
// .h-96	height: 24
