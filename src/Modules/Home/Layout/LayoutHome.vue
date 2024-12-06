<template>
  <Banner></Banner>
  <Subdivision></Subdivision>
</template>

<script>
import Banner from '../Components/Banner.vue';
import Subdivision from '../Components/Subdivision.vue';
import '../Assets/css/home.css'
export default {
  components: {
    name:'Layout_Home',
    Subdivision, Banner },
}
</script>

<style>

</style>