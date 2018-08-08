<template>
  <div id="app" class="container">
    <!--page title -->
    <div class="page-header">
       <h1 class="page-title"> Data Info </h1>
    </div>
    <!-- side info bar -->
    <div class="row">
      <div class="col-sm-3">
        <div class="card text-center">
          <div class="card-body">
            <div class="card-title">
              <h3 class="card-title"> Name </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- big data containers -->
    <div class="col-sm-9">
    <!-- data boxes -->
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
              <div class="card-body">
              </div>
          </div>
        </div>
        <div class="col-sm-6">
            <div class="card ">
              <div class="card-body">
              </div>
            </div>
          </div>
        </div>
    <!-- long data containers -->
      <div></div>
    <!-- line graph -->
      <div class="row">
         <div class="col-sm-12">
         </div>
    <!-- bar graphs-->
          <div class="col-sm-12">
            <top-cats> </top-cats>
            <top-cats></top-cats>
          </div>
      </div>
    <!-- notes and info container -->
      <div></div>
    </div>

  </div>
</template>

<script>
import topCats from './components/topCats.vue'

export default {
  name: 'app',
  components: {
    topCats
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
