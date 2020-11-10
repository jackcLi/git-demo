<template>
  <div id="app">
      <!-- <router-link to="/"></router-link>
      <router-link to="/"></router-link> -->
      <router-view/>
      <!-- <user/> -->
  </div>
</template>

<script>
import user from './views/User'
import dow from './views/download'
export default {

    components:{
      // user,
    }
}
</script>


<style>
@import './css/normalize.css';
</style>
