<template>
    <div id="app">
        <div class="container lg:max-w-5xl mx-auto px-4 md:px-0">
            <div class="">
                <h1 class="text-4xl font-bold">Pennsylvania COVID-19 Tracker</h1>
                <h4 class="text-xs">Source: <a class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800" target="_blank" href="https://www.health.pa.gov/topics/disease/Pages/Coronavirus.aspx">Pennsylvania Deptartment of Health</a> &middot; Last updated 3/15/2020 12:00 p.m.</h4>

                <div class="mt-4">
                <!-- <a class="text-blue-700 font-bold" href="#">COVID-19 PA Timeline</a> -->
                </div>
            
            
                <div class="mt-10 p-4 bg-red-600 rounded-lg text-white text-left">
                    <strong><i class="fas fa-exclamation-triangle pr-1"></i> Attention</strong>
                    <p class="mt-1">For the most up to date information regarding COVID-19 in Pennsylvania, please consult <a class="border-b border-dotted" href="https://www.health.pa.gov/topics/disease/Pages/Coronavirus.aspx">Pennsylvania Deptartment of Health</a>. This site should not be used for life saving information - instead, rather, a source for numbers and statistics.</p>
                </div>
            </div>

            <div id="map" class="svg-container"></div>

            <div class="my-10">
                <div class="w-full">
                    <div class="w-full flex flex-row justify-between bg-gray-800 text-white rounded-t-lg text-xl px-4 py-2 font-medium">
                        Case Load
                    </div>

                    <div class="w-full text-lg py-2 bg-gray-100 p-4">
                        <div id="casesChart" class="svg-container w-full" style="padding-bottom: 35%"></div>

                        <div class="flex justify-center text-sm">
                            <div class="flex flex-row content-center items-center mx-4">
                                <div class="w-4 h-4 bg-gray-800"></div>
                                <div class="pl-2">Total Cases</div>
                            </div>
                            <div class="flex flex-row content-center items-center mx-4">
                                <div class="w-4 h-4 bg-yellow-600"></div>
                                <div class="pl-2">New Cases</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-10">
                <!-- <h1>Current Impact by County</h1> -->

                <div class="w-full">
                    <div class="w-full flex flex-row justify-between bg-gray-800 text-white rounded-t-lg text-xl px-4 py-2 font-medium">
                        <div class="">
                            County
                        </div>
                        <div class="">
                            Cases
                        </div>
                    </div>

                    <div class="w-full flex flex-row justify-between text-lg py-2" v-for="(county, index) in virusData" :class="[index % 2 ? 'bg-gray-100' : 'bg-gray-200']">
                        <div class="px-4">
                            {{county.county}}
                        </div>
                        <div class="px-4">
                            {{county.cases}}
                        </div>
                    </div>
                </div>
            </div>


            <div class="">
                <h4 class="text-xs">Developed by Tyler Youschak</h4>
            </div>

        </div>
        
    </div>
</template>

<script>

    import * as d3 from 'd3'
    import * as topojson from 'topojson'
    import virusData from './assets/data/virus-data.js'
    import dailyData from './assets/data/daily-data.js'
    import counties from './assets/data/pa-counties.json'

    export default {
        name: 'App',
        data() {
            return {
                statesData: {},
                virusData: virusData,
                dailyData: dailyData
            }
        },
        mounted() {
            // this.fetchVirusData().then(function() {
            //     this.createMap()
            // })
            this.createMap()
            this.createCasesChart()
        },
        methods: {
            async fetchVirusData() {
                // this.data = await d3.json(virusData)
            },
            createMap() {
                let width = 800
                let height = 640;

                let projection = d3.geoMercator()
                    .scale(1)
                    .translate([0, 0]);

                let path = d3.geoPath()
                    .projection(projection);

                let svg = d3.select("#map").append("svg")
                    .attr("preserveAspectRatio", "xMinYMin meet")
                    .attr("viewBox", "0 0 " + width + " " + height)
                    .classed("svg-content", true);

                var tooltip = d3.select("body").append("div") 
                    .attr("class", "tooltip")       
                    .style("opacity", 0);

                var color_domain = [1, 3, 10, 50, 100, 500, 10000]
                var legend_labels = ["0", "1-2", "3-9", "10-49", "50-99", "100-499", "500+"]
                var ext_color_domain = [0, 3, 10, 50, 100, 500, 10000]
                

                var color = d3.scaleThreshold()                
                    .domain(color_domain)
                    .range(["#E4E4E4", "#FCD4D4", "#FFA9A9", "#FF7F7F", "#FF4242", "#C00000", "#950000", "#000"]);


                var legend = svg.selectAll("g.legend")
                    .data(ext_color_domain)
                    .enter().append("g")
                    .attr("class", "legend");
                
                var ls_w = width / color_domain.length, ls_h = 15;
                
                legend.append("rect")
                    .attr("x", function(d, i){
                        return (i*ls_w);}
                    )
                    .attr("y", 580)
                    .attr("width", ls_w)
                    .attr("height", ls_h)
                    .style("fill", function(d, i) { return color(d); })
                    .style("opacity", 0.8);
                
                legend.append("text")
                    .attr("x", function(d, i){ return (i*ls_w);})
                    .attr("y", 615)
                    .text(function(d, i){ return legend_labels[i]; });

                var legend_title = "Number of COVID-19 Cases";

                svg.append("text")
                    .attr("y", 570)
                    .attr("class", "legend_title")
                    .text(function(){return legend_title})

                var geojson = topojson.feature(counties, counties.objects.cb_2015_pennsylvania_county_20m);

                var b = path.bounds(geojson),
                    s = 1 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
                    t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

                projection
                    .scale(s)
                    .translate(t);

                    console.log(this.virusData)

                var pairRateWithId = {};
                var pairNameWithId = {};
                virusData.forEach(function(d) {
                    pairRateWithId[d.id] = d.cases;
                    pairNameWithId[d.id] = d.name;
                });

                console.log(pairRateWithId)

                svg.append("g")
                    .attr("class", "county")
                    .selectAll("path")
                    .data(topojson.feature(counties, counties.objects.cb_2015_pennsylvania_county_20m).features)
                    .enter().append("path")
                    .attr("d", path)
                    .style("fill" , function (d) {
                        return color(pairRateWithId[d.properties.GEOID]);
                    })
                    .on("mouseover", function(d) {   
                        d3.select(this).style("fill", "#ADABAB"); 
                        tooltip.transition()    
                            .duration(200)    
                            .style("opacity", .9);    
                        tooltip.html("<strong>" + d.properties.NAME + "</strong></br>Cases: " + (pairRateWithId[d.properties.GEOID] !== undefined ? pairRateWithId[d.properties.GEOID] : 0))  
                            .style("left", (d3.event.pageX) + "px")   
                            .style("top", (d3.event.pageY - 28) + "px");  
                    })          
                    .on("mouseout", function(d) {   
                        tooltip.transition()    
                            .duration(500)    
                            .style("opacity", 0); 
                        if(color(pairRateWithId[d.properties.GEOID]) !== undefined) {
                            d3.select(this).style("fill", color(pairRateWithId[d.properties.GEOID])); 
                        } else {
                            d3.select(this).style("fill", "#E4E4E4"); 
                        }
                    });

            },
            createCasesChart() {

                let svg = d3.select("#casesChart").append("svg")
                    .attr("preserveAspectRatio", "xMinYMin meet")
                    .attr("viewBox", "0 0 900 300")
                    .classed("svg-content", true);

                var margin = {left:30, right:30, top: 10, bottom: 20}
                var width = 900 - margin.left - margin.right;
                var height = 300 - margin.bottom - margin.top;

                var tooltip = d3.select("body").append("div") 
                    .attr("class", "tooltip-w-auto")       
                    .style("opacity", 0);

                var x = d3.scaleTime()
                    .range([0, width]);
                var x_axis = d3.axisBottom(x);
                
                var y = d3.scaleLinear()
                    .range([height, 0]);
                var y_axis = d3.axisBottom(y);

                var xFormat = "%b %e";
                var parseTime = d3.timeParse("%Y-%m-%d");

                x.domain(d3.extent(dailyData, function(data) { 
                    return parseTime(data.date); 
                }));

                let max = d3.max(dailyData, function(data) { 
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

                let newCases = d3.line()
                    .x(function(d) { return x(parseTime(d.date)); })
                    .y(function(d) { return y(d.newCases); })
                    .curve(d3.curveMonotoneX);

                g.append("path")
                    .datum(dailyData) 
                    .attr("class", "line")
                    .attr("stroke", "#2d3748")
                    .attr("d", totalCases);
                
                g.append("path")
                    .datum(dailyData) 
                    .attr("class", "line")
                    .attr("stroke", "#d69e2e")
                    .attr("d", newCases);

                g.selectAll("dot")
                    .data(dailyData)
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
                
                g.selectAll("dot")
                    .data(dailyData)
                    .enter().append("circle")
                    .attr("r", 3.5)
                    .attr("cx", function(d) { return x(parseTime(d.date)); })
                    .attr("cy", function(d) { return y(d.newCases); })
                    .style("fill",'#d69e2e')
                    .on('mouseover', function(d) {
                        d3.select(this).style("fill", "#ADABAB"); 
                        tooltip.transition()    
                            .duration(200)    
                            .style("opacity", .9);    
                        tooltip.html(d.newCases + " new cases")  
                            .style("left", (d3.event.pageX) + "px")   
                            .style("top", (d3.event.pageY - 28) + "px");  
                    })
                    .on("mouseout", function(d) {   
                        tooltip.transition()    
                            .duration(500)    
                            .style("opacity", 0); 
                        d3.select(this).style("fill", "#d69e2e");
                    });

            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        width: 100%;
        height: 100%;
    }

    svg {
        margin: 0 auto;
    }

    #map {
        margin:0 auto;
    }

    #map path {
        fill: #E4E4E4;
        stroke: #fff;
        stroke-width: .5px;
      }
    #map path:hover {
        fill: #ADABAB;
    }
      
    div.tooltip { 
        position: absolute;     
        text-align: left;     
        min-width: 150px;          
        min-height: 14px;         
        padding: 6px;       
        font: 14px sans-serif;    
        background: #2c3e50; 
        border: 0px;        
        pointer-events: none;    
        border-radius: 4px;
        color: #fff 
    }

    .tooltip-w-auto {
        position: absolute;     
        text-align: left;        
        padding: 6px;       
        font: 14px sans-serif;    
        background: #2c3e50; 
        border: 0px;        
        pointer-events: none;    
        border-radius: 4px;
        color: #fff 
    }

      .legend {
	 	font-size: 14px;
	 	font-family: 'Proxima Nova', sans-serif;
	}

	.legend_title {
	 	font-size: 14px;
	 	font-family: 'Proxima Nova', sans-serif;
	 	font-weight: bold;
         color: #2c3e50;
	}

    .svg-container {
        display: inline-block;
        position: relative;
        width: 100%;
        padding-bottom: 80%;
        vertical-align: top;
        overflow: hidden;
    }
    .svg-content {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }
    #casesChart text {
        font-size: 14px;
    }
    #casesChart .line {
        fill: none;
        /* stroke: #2d3748; */
        stroke-width: 1.25px;
    }
</style>
