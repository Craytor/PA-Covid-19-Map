<template>
    <div :ref="county" class="w-full h-full">
        <div :id="'county-' + county"></div>
    </div>
</template>

<script>

    import * as d3 from 'd3'

    export default {
        name: 'MiniTrendGraph',
        props: [
            'data',
            'county'
        ],
        mounted() {
            this.createGraph()
        },
        methods: {
            createGraph() {

                let initWidth = this.$refs[this.county].clientWidth
                let initHeight = this.$refs[this.county].clientHeight

                let svg = d3.select("#county-" + this.county).append("svg")
                    // .attr("preserveAspectRatio", "xMinYMin meet")
                    .attr('width', initWidth)
                    .attr('height', initHeight)
                    // .attr("viewBox", "0 0 " + initWidth + " " + initHeight)
                    // .classed("svg-content", true);

                var margin = {left:0, right:0, top: 2, bottom: 2}
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

                x.domain(d3.extent(this.data, function(data) { 
                    return parseTime(data.date); 
                }));

                let max = d3.max(this.data, function(data) { 
                    return +data.cases
                })
                y.domain([0, max]);

                var g = svg.append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                let totalCases = d3.line()
                    .x(function(d) { return x(parseTime(d.date)); })
                    .y(function(d) { return y(d.cases); })
                    .curve(d3.curveMonotoneX);

                g.append("path")
                    .datum(this.data) 
                    .attr("class", "line")
                    .attr("fill", 'none')
                    .attr("stroke-width", '2px')
                    .attr("stroke", "#2d3748")
                    .attr("d", totalCases);

            }
        }
    }

</script>

<style scoped>

    svg {
        margin: 0 auto;
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

    text {
        font-size: 14px;
    }

    path {
        fill: none;
        stroke: #2d3748;
        stroke-width: 1.25px;
    }
</style>
