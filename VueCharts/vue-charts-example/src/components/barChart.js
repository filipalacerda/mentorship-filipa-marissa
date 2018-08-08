import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: ["chartData", "options"],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options);
  },
  methods: {
    update() {
      this.$data._chart.update();
    }
  }
}
