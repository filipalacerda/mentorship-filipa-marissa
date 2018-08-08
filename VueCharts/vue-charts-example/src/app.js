import topCats from '../components/topCats.vue';

export default class View extends MainView {
  mount() {
    super.mount();

    new Vue({
      el: "#app",
      components: {
        topCats
      }
    });

    unmount() {
    super.unmount();
  }

}
