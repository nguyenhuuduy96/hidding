<template>
  <main class="is-home">
    <div class="home-top">
      <section class="sec-mv">
        <a-carousel class="mv-slide" :autoplay="true" :autoplaySpeed="1500" effect="fade">
          <div class="mv-slide__item">
            <img src="../assets/images/slide01.jpg" alt="" />
          </div>
        </a-carousel>
      </section>
      <filter-home />
    </div>
    <section class="sec-subdivision">
      <div class="ctnr">
        <h2 class="common-ttl01">Phân khu mới mở bán</h2>
        <a-carousel class="subdivision-slide" :slidesToShow="slidesToShow" :autoplay="true">
          <SubdivisionItem :subdivision="item" v-for="(item, index) in subdivisionList" :key="index" :autoplaySpeed="1500"/>
        </a-carousel>
      </div>
    </section>
    <section class="sec-project">
      <div class="ctnr">
        <h2 class="common-ttl01">Dự án trọng điểm</h2>
        <a-carousel class="project-slide" :slidesToShow="slidesToShowProject" :autoplay="true">
          <project-item :project="item" v-for="(item, index) in projectList" :key="index" />
        </a-carousel>
      </div>
    </section>
    <section class="sec-lease">
      <div class="ctnr">
        <h2 class="common-ttl01">Bất động sản cho thuê</h2>
        <div class="lease-column">
          <lease-item :lease="item" v-for="(item, index) in leaseList" :key="index" />
        </div>
      </div>
    </section>
    <div class="banner-qr">
      <a href="">
        <div class="banner-qr__img">
          <img src="../assets/images/dinhgia-1.jpg" :alt="banner_qr.title" />
        </div>
      </a>
    </div>
    <section class="sec-news">
      <div class="ctnr">
        <h2 class="common-ttl01">Tin tức</h2>
        <div class="news-grid">
          <news-item :news="item" v-for="(item, index) in articles" :key="index" />
        </div>
      </div>
    </section>
    <project-pro />
  </main>
</template>
<script>
import { useHead } from '@vueuse/head';
import SubdivisionItem from '../components/SubdivisionItem.vue';
import ProjectItem from '../components/ProjectItem.vue';
import LeaseItem from '../components/LeaseItem.vue';
import NewsItem from '../components/NewsItem.vue';
import { mapActions, mapState } from 'vuex/dist/vuex.cjs.js';
import ProjectPro from '../components/ProjectPro.vue';
import FilterHome from '../components/FilterHome.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    SubdivisionItem,
    ProjectItem,
    LeaseItem,
    NewsItem,
    ProjectPro,
    FilterHome
  },
  computed: {
    ...mapState('fake', [
      'mv',
      'subdivisionList',
      'projectList',
      'leaseList',
      'banner_qr',
      'articles',
    ]),
    slidesToShow() {
      if (window.innerWidth < 767) return 1;
      if (window.innerWidth < 990) return 2;
      return 3;
    },
    slidesToShowProject() {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 834) return 2;
      return 3;
    },
  },
  methods: {
    ...mapActions('fake', [
      'getData',
      'getLeaseList',
      'getProjectList',
      'getActicles',
    ]),
    async getFakeData() {
      await this.getData();
    },
    async getFakeLeaseList() {
      await this.getLeaseList();
    },
    async getFakeProjectList() {
      await this.getProjectList();
    },
    async getFakeActicles() {
      await this.getActicles();
    },
  },
  created() {
    this.getFakeData();
    this.getFakeLeaseList();
    this.getFakeActicles();
    this.getFakeProjectList();
  },

  setup() {
    useHead({
      title: 'Điền phát Holding',
      meta: [
        {
          name: 'description',
          content: 'This is a demo project for SSR with Vue 3 and Vite.',
        },
        { name: 'keywords', content: 'vue3, vite, ssr, seo' },
      ],
    });
  },
};
</script>
<style lang="scss">
.is-home {
  overflow: hidden;
}

.home-top {
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    &::before {
      content: "";
      background: rgba($color: white, $alpha: .3);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
    }
  }
}

.sec-mv {
  position: relative;
  z-index: 2;

  &__item {}
}

.mv-slide {
  &__item {
    text-align: center;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg,
        rgba(92, 89, 89, 1) 0%,
        rgba(255, 255, 255, 0) 100%);

    img {
      min-height: 350px;
      object-fit: cover;
      width: 100%;
      max-height: 650px;
    }
  }
}


.sec-subdivision {
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 20px 0 32px;
  }
}

.subdivision-slide {
  &.ant-carousel {
    .slick- {
      &prev {
        left: -20px !important;
      }

      &next {
        right: -20px !important;
      }
    }
  }
}

.subdivision-slide {
  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide {
    padding: 0 10px;
  }
}

.sec-project {
  padding: 0 0 50px;
  background: linear-gradient(180deg, #fff, #fcfaf7 73.5%, #f5efe6);

  @media (max-width: 767px) {
    padding: 0 0 32px;
  }
}

.project-slide {
  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide {
    padding: 0 10px;
  }
}

.sec-lease {
  padding: 50px 0;
  background: #f8f5ee;

  @media (max-width: 992px) {
    padding: 25px 0;
  }
}

.lease-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

@keyframes shine {
  100% {
    left: 125%;
  }
}

.banner-qr {
  background: #002658;

  &__img {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      animation: shine 4s infinite;
      position: absolute;
      top: 0;
      left: -75%;
      z-index: 2;
      display: block;
      content: '';
      width: 50%;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .3) 100%);
      -webkit-transform: skewX(-25deg);
      transform: skewX(-25deg);
    }
  }

  img {
    width: 100%;
    object-fit: cover;
  }
}

.sec-news {
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 25px 0;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.sec-project-pro {
  background: linear-gradient(270deg, #faf7f2, #f5efe6);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 25px 0 0;
  }
}
</style>
