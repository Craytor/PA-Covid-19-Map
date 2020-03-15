<template>
    <div id="app">
        <div class="container mx-auto">
            <div class="">
                <h1 class="text-4xl font-bold">Pennsylvania COVID-19 Tracker</h1>
                <h4>SOURCE: <a href="https://www.health.pa.gov/topics/disease/Pages/Coronavirus.aspx">Pennsylvania Deptartment of Health</a> &middot; Developed by Tyler Youschak</h4>
                <h4 style="font-size: 14px">Last updated 2:00 p.m.</h4>
            </div>
            <div id="map" class="svg-container"></div>
        </div>
    </div>
</template>

<script>

    import * as d3 from 'd3'
    import * as topojson from 'topojson'
    import virusData from './assets/data/virus-data.js'
    import counties from './assets/data/pa-counties.json'

    export default {
        name: 'App',
        data() {
            return {
                statesData: {},
                virusData: virusData
            }
        },
        mounted() {
            // this.fetchVirusData().then(function() {
            //     this.createMap()
            // })
            this.createMap()
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
                
                var ls_w = width / color_domain.length, ls_h = 20;
                
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
                    .attr("y", 620)
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

    path {
        fill: #E4E4E4;
        stroke: #fff;
        stroke-width: .5px;
      }
      path:hover {
        fill: #ADABAB;
      }
      body {
        text-align: center;
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

    a {
        text-decoration: none;
        color: #2a578d
    }
    h1 {
        margin-bottom: 0px;
    }

    .svg-container {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    vertical-align: top;
    overflow: hidden;
}
.svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
