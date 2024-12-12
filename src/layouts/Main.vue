<template>
  <header-layout />
  <RouterView />
  <footer-layout />
</template>
<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
export default {
  components: {
    headerLayout: Header,
    footerLayout: Footer,
  },
};
</script>
