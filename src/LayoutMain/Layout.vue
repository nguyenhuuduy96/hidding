
<template>
  <Headers></Headers>
  <router-view />
  <Footers></Footers>
</template>

<script>
import Headers from "../Components/Header.vue";
import Footers from "../Components/Footer.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
  name: "Layout",
  components: {
    Headers,
    Footers,
  },
};
</script>

<style>
</style>