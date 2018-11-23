<template>
  <div id="app">
    <div class="topNav">
      <TopNav></TopNav>
    </div>
    <div class="topSelect">
      <TopSelect></TopSelect>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import TopNav from './components/topNav/TopNav'
  import TopSelect from './components/topSelect/TopSelect'
export default {
  name: 'App',
  components: {
    TopNav,
    TopSelect
  }
}
</script>

<style>
#app {
}
</style>
