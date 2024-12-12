<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex/dist/vuex.cjs.js';

export default {
  computed: {
    ...mapState('fake', [
      'mv',
      'subdivisionList',
      'projectList',
      'leaseList',
      'banner_qr',
      'articles',
      'project_pro',
    ]),
  },
  methods: {
    ...mapActions('fake', ['getData']),
    async getFakeData() {
      await this.getData();
    },
  },
  created() {
    this.getFakeData();
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
