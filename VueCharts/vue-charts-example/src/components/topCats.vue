<template>
<div class="card top-categories">
  <h4 class="graph-title">Top Categories</h4>
  <bar-chart class="bar-graph" ref="radarChart" :chart-data="datacollection" :options="options"></bar-chart>
</div>
</template>

<script>
import barChart from './barChart.js';
// we import our data using axios
// import axios from 'axios';
//import datalabels from "chartjs-plugin-datalabels";


export default {
  components: {
    barChart
  },
  data() {
    return {
      datacollection: {
        labels: ['x', 'y', 'z'],
        datasets: [{
          data: [10, 20, 25],
          backgroundColor: ["rgba(255, 94, 94, 1)", "rgba(14, 79, 225, 1)", "rgba(14, 79, 225, 1)", "rgba(14, 79, 225, 1)","rgba(14, 79, 225, 1)"]
        }]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: false,
        },
        responsive: true,

        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            color: "rgb(55, 57, 67)",
            font: {
              weight: '600'
            }
          }
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
              display: false,
              beginAtZero: true
            },

          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
              display: true,
              fontStyle: "600",
              fontColor: "rgb(55, 57, 67)"
            }
          }]
        }
      }
    }
  },
  mounted() {
    this.get_top_categories();
  },
  methods: {
    get_top_categories: function() {
      // original code
      // axios.get("/api/sale_categories")
      //   .then((response) => {
      //     this.reply = response.data.data;
      //
      //     for (var item of this.reply) {
      //       this.datacollection["datasets"][0]["data"].push(item.total);
      //       this.datacollection["labels"].push(item.name);
      //     }
      //     this.$refs.radarChart.update();
      //   }, (error) => {
      //     console.log("error");
      //   })
    }
  },
}

</script>

<style>
.graph-title {
  padding: 2rem 2rem 1rem 2rem;
  font-weight: bold;
}

.bar-graph {
  padding: 0 1rem 2rem 1rem;
  position: relative;
}

.top-categories {
  display: inline-block;
  width: calc(50% - 2.5px);
}

@media (max-width: 1024px) {
  .top-categories {
    display: block;
    width: 100%;
  }
}
</style>
