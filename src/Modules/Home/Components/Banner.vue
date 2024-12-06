<template>
  <div class="banner">
    <a-carousel autoplay v-if="banners.length">
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="slider-banner"
      >
        <img :src="banner.imageUrl" alt="Banner" />
      </div>
    </a-carousel>
    <p v-else>Loading banners...</p>
  </div>
  <div class="section-banner-body">
    <div class="ctnr">
      <div class="box-tab-banner">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Giao dịch sơ cấp">
          <div class="box-search">
            <div class="dropdown-project">
              <div class="dropdown-trigger">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"/></svg>
                <span>Dự án</span>
                <div class="downup">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>
                </div>
              </div>
              <div class="search-boxed">
                <input type="text" placeholder="Tìm mua căn mới tại dự án">
                <button>
                  <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
              </div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Giao dịch thứ cấp" >
2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Thuê">
3
        </a-tab-pane>
      </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, Carousel } from "ant-design-vue";
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const activeKey = ref("1");
    const banners = ref([]);

    const fetchBanner = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Banner");
        banners.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchBanner();

    return { activeKey, banners };
  },
  components: {
    "a-carousel": Carousel,
    "a-tabs": Tabs,
    "a-tab-pane": Tabs.TabPane,
  },
};
</script>

<style>
</style>
