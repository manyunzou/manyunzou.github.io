// circles attributes
var tileWidth = 40;
var tileHeight = 10;
var tilePadding = 120;
var tileTopPadding = 50;
var tileMonthPadding = 100;
var rectPerRow = 5;
// var rowNumber = 13;

// bars attributes
var barWidth = 40;


function initializeData(){

    data = d3.nest()
        .key(function(d){ return d.hours;})
        .entries(data);
}


var markTransform = [100, 400, 1250, 1650, 1800, 1900];
var bookNames = ['Less than 1 hour', '1-5 hours', '5-10 hours', '10-20 hours', '20-30 hours', '30-40 hours'];


function makeCircle(d,i){

    console.log(d)

    count = i + 1;
    var chart = d3.select(this)
        .attr("transform", function(d){
            var a = bookNames.indexOf(d.key);
            return "translate(50," + markTransform[a] + ')'
        })
        .selectAll("dot")
        .append("circle")
        .data(d.values);

    chart.enter()
        .append("circle")
        .attr("class",function(d){
            return d.hours;
        })
        .attr("cx", function(d,i){
            return i%rectPerRow * tilePadding;
        })
        .attr("cy", function(d,i){
            var rowNumber = Math.floor(i / rectPerRow);
            return  (rowNumber) * tileTopPadding;
        })
        .attr("r", 10)
        .style('fill',function(d){
            if (d.undergraduate_short == 'science-related'){
                return "#ff8e71";
            } else if (d.undergraduate_short == 'not-science-related'){
                return "#583d72";
            }
        })
        .style("opacity","1");


    chart.exit().remove();
}

function makeCircleGraduate(d,i){

    count = i + 1;
    var chart = d3.select(this)
        .attr("transform", function(d){
            var a = bookNames.indexOf(d.key);
            return "translate(50," + markTransform[a] + ')'
        })
        .selectAll("dot")
        .append("circle")
        .data(d.values);

    chart.enter()
        .append("circle")
        .attr("class",function(d){
            return d.hours;
        })
        .attr("cx", function(d,i){
            return i%rectPerRow * tilePadding + 50;
        })
        .attr("cy", function(d,i){
            var rowNumber = Math.floor(i / rectPerRow);
            return  (rowNumber) * tileTopPadding;
        })
        .attr("r", 10)
        .style('fill',function(d){
            if (d.graduate_short == 'science-related'){
                return "#ff8e71";
            } else if (d.graduate_short == 'not-science-related'){
                return "#583d72";
            } else {
                return "#eeeded";
            }
        })
        .style("opacity","1");


    chart.exit().remove();

}


// var markTransform = [100, 170, 240, 340, 410, 480];
// var bookNames = ['把自己作为方法','王考','走出唯一真理观','呼吸','XX散文集','傲慢与偏见'];


function makeRole(d,i){

    // console.log(data)

    var count = i + 1;

    var chart = d3.select(this)
        .attr("transform", function(d){
            var a = bookNames.indexOf(d.key);
            return "translate(50," + markTransform[a] + ')'
        })
        .selectAll(".dots")
        .data(data[i].values);

    var dots = chart.enter()
        .append("path");

    var symbol = d3.symbol().size(150);

    var symbolTypes = [d3.symbolCircle, d3.symbolCross, d3.symbolDiamond, d3.symbolSquare, d3.symbolStar, d3.symbolTriangle, d3.symbolWye];

    var roleTypes = ['Analyst','Leadership','Scientist','Developer','Desish','Journalist','Engineer'];

    var testPadding = 100;

    dots.attr("d", symbol.type(function(d){
        console.log(d.role)
        if (d.role == 'Analyst'){
            return d3.symbolWye;
        } else if (d.role == 'Leadership'){
            return d3.symbolTriangle;
        } else if(d.role == 'Scientist'){
            return d3.symbolStar;
        } else if (d.role == 'Developer'){
            return d3.symbolSquare;
        } else if (d.role == 'Desish'){
            return d3.symbolSquare;
        } else if (d.role=='Journalist'){
            return d3.symbolCross;
        } else if (d.role=='Engineer'){
            return d3.symbolCircle;
        } else {
            return d3.symbolCircle;
        }
        }))
        .attr("transform", function(d,i){
            var rowNumber = Math.floor(i / rectPerRow);
            return "translate(" + i%rectPerRow * 200  + "," + (rowNumber) * tileTopPadding + ")";
        })
        .style("fill","None")
        .style("stroke","#000");

    dots.exit().remove();

}

function makeRect(d,i){
    count = i + 1;
    var chart = d3.select(this)
        .attr("transform", function(d){
            var a = bookNames.indexOf(d.key);
            return "translate(50," + markTransform[a] + ')'
        })
        .selectAll(".dots")
        // .append("rect")
        .data(d.values);

    chart.enter()
        .append("rect")
        .attr("class",function(d){
            return d.hours;
        })
        .attr("x", function(d,i){
            return i%rectPerRow * tilePadding - 20;
        })
        .attr("y", function(d,i){
            var rowNumber = Math.floor(i / rectPerRow);
            return  (rowNumber) * tileTopPadding - 10;
        })
        .attr("rx", function(d){
            if (d.role == 'Analyst'){
                return 0;
            } else if (d.role == 'Leadership'){
                return 80;
            } else if(d.role == 'Scientist'){
                return 0;
            } else if (d.role == 'Developer'){
                return 0;
            } else if (d.role == 'Desish'){
                return 80;
            } else if (d.role=='Journalist'){
                return 80;
            } else if (d.role=='Engineer'){
                return 0;
            } else {
                return 80;
            }
        })
        .attr("height", 20)
        .attr("width", 90)
        .style('fill',function(d){
            return "#ffc85c";
        })
        .style("opacity","1");

    chart.enter()
        .append("text")
        .attr("x", 50)
        .attr("y", 100)
        .text(function(d){
            return d.key;
        });


    chart.exit().remove();

}


function writeTitles(d,i){
    count = i + 1;

    var chart = d3.select(this)
        .attr("transform", function(d){
            var a = bookNames.indexOf(d.key);
            return "translate(50," + markTransform[a] + ')'
        })
        .selectAll(".dots")
        .data(d.values);

    chart.enter()
        .append("text")
        .attr("x", function(d,i){
            return i%rectPerRow * tilePadding - 20;
        })
        .attr("y", function(d,i){
            var rowNumber = Math.floor(i / rectPerRow);
            return  (rowNumber) * tileTopPadding - 10;
        })
        .text(function(d){
            return d.hours;
        });


    chart.exit().remove();
}




function makeCharts(){

    console.log(data)

    var u = d3.select("#graphic")
        .append("svg")
        .attr("height","2500")
        .attr("width","1000")
        .selectAll("g")
        .data(data);

    u.enter()
        .append("g")
        .merge(u)
        .each(makeRect)
        .each(makeCircle)
        .each(makeCircleGraduate);
        // .each(writeTitles);

    u.exit().remove();
}


d3.csv("assets/data/dschallenge.csv", function(err, csv){
    data = csv;

    initializeData();
    makeCharts();
})