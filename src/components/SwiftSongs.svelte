<script>
  import { LayerCake, Svg, Html } from 'layercake';
  import {getContext} from "svelte";
  // import { LayerCake, Svg } from "layercake";
  import { scaleOrdinal } from 'd3-scale';

  import Key from '/src/components/Key.html.svelte';
  import AxisX from '/src/components/AxisX.svelte';
  import Beeswarm from '/src/components/BeeswarmForce.svelte';
  import Tooltip from '/src/components/helpers/Tooltip.html.svelte';

  // This example loads csv data as json using @rollup/plugin-dsv
  // import data from '/src/data/us-senate.js';
  import data from '/src/data/swift-songs.js';

  const xKey = 'compound';
  const zKey = 'album';
  const titleKey = 'title';

  const r = 7;

  // thanks to pinterest @Abi 
  const seriesColors = [
    "#B5E5F8", //1989
    "#EFC180", // Fearless
    "#F7B0CC", // Lover
    "#5D3FD3", // Midnights
    "#D30000", // Red
    "#CCCCFF", // Speak Now
    "#A5C9A5", // Taylor Swift
    "#000000", // TTPD
    "#E36414", // Evermore
    "#CDC9C1", // Folklore
    "#727272" // Reputation
  ];


  const dataTransformed = data.map(d => {
    return {
      [titleKey]: d[titleKey],
      [zKey]: d[zKey],
      [xKey]: +d[xKey]
    }
  })
</script>


<div class='chart-container'>
  <LayerCake
    padding={{bottom: 15}}
    x={xKey}
    z={zKey}
    zScale={scaleOrdinal()}
    zRange={seriesColors}
    data={dataTransformed}
    let:width
  >

    <Svg>
      <AxisX/>
      <Beeswarm
        r={width < 400 ? r / 1.25 : r}
        strokeWidth={1}
        xStrength={0.95}
        yStrength={0.075}
        getTitle={d => d[titleKey]}
      />
    </Svg>

    <Html pointerEvents={false}>
      <Key shape='circle' />
    </Html>

  </LayerCake>
</div>

<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 250px;
    margin: 20px;
  }

</style>