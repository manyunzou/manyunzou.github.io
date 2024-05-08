<script>

  let data = [
    {album:"Taylor Swift",compound:5.79,year:2006,yaxis:2, xaxis:10, color:"#A5C9A5"},
    {album:"Fearless",compound:15.12,year:2008,yaxis:2, xaxis:20, color:"#EFC180"},
    {album:"Speak Now",compound:12.28,year:2010,yaxis:2, xaxis:30, color:"#CCCCFF"},
    {album:"Red",compound:20.81,year:2012,yaxis:2, xaxis:40, color:"#D30000"},
    {album:"1989",compound:4.29,year:2014,yaxis:2, xaxis:50, color:"#B5E5F8"},
    {album:"Reputation",compound:5.64,year:2017,yaxis:2, xaxis:60, color:"#727272"},
    {album:"Lover",compound:10.17,year:2019,yaxis:2, xaxis:70, color:"#F7B0CC"},
    {album:"Evermore",compound:5.57,year:2020,yaxis:1, xaxis:10, color:"#E36414"},
    {album:"Folklore",compound:1.93,year:2020,yaxis:1, xaxis:20, color:"#CDC9C1"},
    {album:"Midnights",compound:6.16,year:2022,yaxis:1, xaxis:30, color:"#5D3FD3"},
    {album:"TTPD",compound:2.59,year:2024,yaxis:1, xaxis:40, color:"#000000"},
  ];
	
  import { scaleLinear, scaleSqrt } from "d3-scale";
  import { extent, min, max } from "d3-array";
  import * as d3 from 'd3';
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let width;
  let height;

  const margin = { top: 80, bottom: 80, left: 60, right: 60 };

  const tweenOptions = {
    delay: 0,
    duration: 1000,
    easing: cubicOut,
  };

  const tweenedX = tweened(
    data.map((d) => d.xaxis),
    tweenOptions
  );

  const tweenedY = tweened(
    data.map((d) => d.yaxis),
    tweenOptions
  );

  const tweenedLabels = tweened(
    data.map((d) => d.album),
    tweenOptions
  );

  const tweenedYear = tweened(
    data.map((d) => d.year),
    tweenOptions
  );

  const tweenedCompound = tweened(
    data.map((d) => d.compound),
    tweenOptions
  );

  const tweenedColor = tweened(
    data.map((d) => d.color),
    tweenOptions
  );

  $: tweenedData = data.map((d, index) => ({
    x: $tweenedX[index],
    y: $tweenedY[index],
    label: $tweenedLabels[index],
    year: $tweenedYear[index],
    compound: $tweenedCompound[index],
    color: $tweenedColor[index]
  }));

  function setTween(dimension, key) {
    dimension.set(data.map((d) => +d[key]));
  }

  const colorScale = d3.scaleSequential(d3.interpolateRdBu)
    .domain([0, 21]);

  $: xScale = scaleLinear()
    .domain(extent($tweenedX, (d) => d))
    .range([margin.left, width - margin.right]);

  $: yScale = scaleLinear()
    .domain(extent($tweenedY, (d) => d))
    .range([height - margin.top - 30, margin.bottom]);

  $: zScale = scaleLinear()
    .domain(extent($tweenedCompound, (d) => d))
    .range([1, 90]);
</script>

<div
  class="chart-container"
  bind:offsetWidth={width}
  bind:offsetHeight={height}
>
  <svg width={width + margin.right + margin.left} {height}>
    <text x={xScale(10)} y="40" fill="#666" font-size="15">Hover over to see the compound score</text>
    {#each tweenedData as d}
      <rect
        x={xScale(d.x)}
        y={yScale(d.y)}
        width={30}
        height={zScale(d.compound)}
        fill={d.color}
        opacity="1"
        on:mouseenter={()=>{
          console.log("enter!")
          d3.selectAll(".scoreText").style("display","block");
        }}
        on:mouseleave={()=>{
          d3.selectAll(".scoreText").style("display","none");
        }}
      />
      <text stroke="black" stroke-width="0.4px" y={yScale(d.y)-10} x={xScale(d.x)}>{d.label}</text>
      <text class="scoreText" y={yScale(d.y) + zScale(d.compound + 4)} x={xScale(d.x)} display="none">{d.compound}</text>
    {/each}
  </svg>
</div>

<style>
  .chart-container {
    height: 40vh;
    max-width: 100%;
		/* background: linear-gradient(to bottom right, steelblue -100%, white 100%); */
		/* border-radius: 5px; */
		/* box-shadow: 1px 1px 6px #cecece; */
  }
</style>