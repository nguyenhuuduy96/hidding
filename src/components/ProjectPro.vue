<template>
  <section class="sec-project-pro">
    <div class="ctnr">
      <h2 class="common-ttl01">Dự án hot</h2>
      <div class="project-pro">
        <div class="project-pro__img">
          <img src="../assets/images/anh-01.jpg" alt="">
        </div>
        <div class="project-pro__child">
          <div class="project-pro__info">
            <h3 class="project-pro__ttl" v-text="project_pro?.title" v-if="project_pro?.title" />
            <div class="project_pro__brief" v-html="project_pro?.brief" />

            <div class="project-pro__item">
              <div class="project-pro__item-img">
                <img v-lazy="project_pro?.item?.image" :alt="project_pro?.item?.title" />
              </div>
              <div class="project-pro__item-ct">
                <h4 class="project-pro__item-ttl" v-text="project_pro?.item?.title" />
                <div class="project-pro__item-info">
                  <p class="project-pro__item-text">Giá chỉ từ</p>
                  <div class="project-pro__item-price" v-text="project_pro?.item?.price" />
                  <div class="project-pro__item-pricesale" v-text="project_pro?.item?.price_sale" />
                </div>
              </div>
            </div>
            <div class="project-pro__view">
              Đã có <span>{{ project_pro?.view }}</span>
              <span class="icon"></span> người quan tâm
            </div>
            <div class="project-pro__wbtn">
              <button class="project-pro__btn">Nhận tư vấn</button>
              <router-link to="/" class="project-pro__btn project-pro__btn--yellow">Tìm hiểu ngay</router-link>
            </div>
            <div class="project-pro__help">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />{{
                project_pro?.desc
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'vuex/dist/vuex.cjs.js';

export default {
  computed: {
    ...mapState('fake', ['project_pro']),
  },
  methods: {
    ...mapActions('fake', ['getProjectPro']),
    async getDataProjectPro() {
      await this.getProjectPro();
    }
  },
  created() {
    this.getDataProjectPro();
  }
}
</script>
<style lang="scss">
.project-pro {
  padding: 24px 0 24px 24px;
  position: relative;
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  // background-image: url(../assets/images/anh-01.jpg);
  // background-position: left center;
  // background-size: cover;

  @media (max-width: 767px) {
    padding: 24px;
    margin: 0 -20px;
    border-radius: 0;
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 500px;
    height: 100%;
    background: linear-gradient(270deg, #faf7f2, #f5efe6 93.75%);
    // clip-path: polygon(0 0, 88% 0, 100% 100%, 0 100%);
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    z-index: -2;

    @media (max-width: 767px) {
      clip-path: polygon(0 0, 100% 17%, 100% 100%, 0 100%);
      height: calc(100% - 220px);
      top: auto;
      bottom: 0;
      width: 100%;
      background: linear-gradient(270deg, #faf7f2, #f5efe6 93.75%);
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 550px;
    height: 100%;
    background: linear-gradient(270deg,
        hsla(35, 36%, 91%, 0.9) 72.15%,
        hsla(36, 45%, 98%, 0.9) 83.51%,
        hsla(0, 0%, 100%, 0.9) 92.3%);
    z-index: -3;
    // clip-path: polygon(0 0, 88% 0, 100% 100%, 0 100%)
    clip-path: polygon(15% 0, 88% 0, 100% 100%, 0 100%);

    @media (max-width: 767px) {
      clip-path: polygon(0 0, 100% 16%, 100% 100%, 0 100%);
      width: 100%;
      height: calc(100% - 195px);
      top: auto;
      bottom: 0;
      background: linear-gradient(270deg,
          hsla(35, 36%, 91%, 0.9) 72.15%,
          hsla(36, 45%, 98%, 0.9) 83.51%,
          hsla(0, 0%, 100%, 0.9) 92.3%);
    }
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -4;
    @media (max-width: 767px) {
      height: 300px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left center;
      @media (max-width: 992px) {
        object-position: top center;
      }
    }
  }

  &__child {
    padding: 20px;
    border: 1px dashed #ffffff94;
    border-radius: 10px;

    @media (max-width: 767px) {
      padding: 250px 0 0;
      border: 0;
    }

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
      z-index: -1;
    }
  }

  &__info {
    @media (min-width: 768px) {
      max-width: 350px;
      margin-left: auto;
    }
  }

  &__ttl {
    font-size: 22px;
    font-weight: 700;
  }

  &__view {
    font-size: 13px;
    margin-bottom: 10px;

    span {
      font-size: 16px;
      color: #b81b00;
      font-weight: 700;
    }
  }

  &__wbtn {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__btn {
    border-radius: 4px;
    padding: 5px 12px;
    font-size: 15px;
    display: block;
    text-align: center;
    color: black;
    background: white;
    border-radius: 4px;
    border: 1px solid currentColor;

    &--yellow {
      background: #ec8a42;
      border-color: #ec8a42;
      color: #fff;
    }
  }

  &__desc {}

  &__help {
    .fa-thumbs-up {
      margin-right: 5px;
      color: #ec8a42;
    }
  }

  &__item {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    background: #fff;
    border-radius: 6px;
    -webkit-box-shadow: 0 4px 12px 0 rgba(28, 30, 34, 0.08);
    box-shadow: 0 4px 12px 0 rgba(28, 30, 34, 0.08);
    margin: 16px 0 12px;
    padding: 12px;

    &-img {
      width: 86px;
      border-radius: 6px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-ct {
      width: calc(100% - 98px);
      line-height: 1.2;
    }

    &-ttl {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    &-text {
      font-size: 13px;
      color: #242836bf;
      margin-bottom: 5px;
    }

    &-price {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;

      @media (max-width: 640px) {
        font-size: 16px;
      }

      &sale {
        font-size: 13px;
        color: #b81b00;
        text-decoration: line-through;
      }
    }
  }
}
</style>
