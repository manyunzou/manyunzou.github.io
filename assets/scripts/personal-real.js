function buildGrid(data) {
    // console.log(data)

    const margin = {top: 0,right: 10,bottom: 10, left: 10},
        width = 100 - margin.right - margin.left,
        height = 100 - margin.top - margin.bottom;

    // const maxValue = d3.max(data, d => d.value);
    const maxValue = 100;

    const xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([height, 0]);

    d3.select('.triangle-grid')
        .selectAll('div')
        .data(data)
      .enter().append('div')
        .attr('class', 'triangle-box');

    var trianglebox = d3.selectAll('.triangle-box')
        .append('svg')
        .attr('width', 100)
        .attr('height', 100);

    trianglebox.append('g')
        .attr('class', 'topicTriangles')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .append('path')
        .attr('d', d => 'M ' + xScale(80) + ' ' + yScale(30) + ' L ' + xScale(60) + ' ' + yScale(60) + ' L ' + xScale(40) + ' ' + yScale(30) + ' Z')
        .style("fill",function(d){
            if (d.topics2 == 'business'){
                return "#389393";
            } else if (d.topics2 == 'technology'){
                return "#fa7f72";
            } else if (d.topics2 == 'gender'){
                return "#ffc85c";
            } else if (d.topics2 == 'government and policies'){
                return "#9f5f80";
            } else if (d.topics2 == 'COVID'){
                return "#bb2205";
            } else {
                return "#cdac81";
            }
        })
        .style("stroke","#262223")
        .style("stroke-width","1px");
        

    // if design
    trianglebox.append('g')
        .attr('class', 'designTriangles')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .append('path')
        .attr('d', d => 'M ' + xScale(80) + ' ' + yScale(30) + ' L ' + xScale(60) + ' ' + yScale(0) + ' L ' + xScale(40) + ' ' + yScale(30) + ' Z')
        // .style('fill', '#DDC6B6')
        .style('fill', function(d){
            if (d.design == 'no'){
                return '#DDC6B6';
            } else if (d.design == 'yes'){
                return "url(#lightstripe)";
            }
        })
        .style("stroke","#262223")
        .style("stroke-width","1px");


    // if code - data analysis
    trianglebox.append('g')
        .attr('class', 'analysisTriangles')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .append('path')
        .attr('d', d => 'M ' + xScale(60) + ' ' + yScale(60) + ' L ' + xScale(20) + ' ' + yScale(60) + ' L ' + xScale(40) + ' ' + yScale(30) + ' Z')
        .style('fill', function(d){
            if (d.analysis == 'no'){
                return "#DDC6B6";
            } else if (d.analysis == 'yes'){
                return "url(#lightstripe)";
            }
        })
        .style("stroke","#262223")
        .style("stroke-width","1px");

    // if code - front-end
    trianglebox.append('g')
        .attr('class', 'frontTriangles')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .append('path')
        .attr('d', d => 'M ' + xScale(100) + ' ' + yScale(60) + ' L ' + xScale(60) + ' ' + yScale(60) + ' L ' + xScale(80) + ' ' + yScale(30) + ' Z')
        .style('fill', function(d){
            if (d.frontend == 'yes'){
                return "url(#lightstripe)";
            } else if (d.frontend == 'no'){
                return "#DDC6B6";
            }
        })
        .style("stroke","#262223")
        .style("stroke-width","1px");
        

    // add text for year
    trianglebox.append('g')
        .attr('class', 'yearText')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .append("text")
        .attr("x", 23)
        .attr("y", 30)
        .style("font-size",12)
        .style("font-weight",500)
        .text(function(d){            
            return d.year;
        });
     
  }



d3.csv("assets/data/personal_data.csv", function(err, csv) {
    data = csv;
  
    buildGrid(data);
  
  });


  
