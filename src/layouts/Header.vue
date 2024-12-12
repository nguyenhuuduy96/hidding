<template>
  <header class="header" :class="{
    'is-header-home': checkPage == 'home',
    'is-scrolled': isScrolled,
  }">
    <div class="header__nav">
      <div class="ctnr">
        <div class="header__nav-mobile">
          <div class="header__nav-logo">
            <router-link to="/">
              <img alt="Vue logo" class="logo" src="../assets/images/logo-dienphat.png" />
            </router-link>
          </div>
          <div class="header__nav-left">
            <header-user @show-modal="showModal" />
            <button class="header__nav-toggle" :class="{ 'is-close': isCollapse == true }" type="button"
              @click.prevent="isShowCollapse">
              <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
          </div>
        </div>
        <div class="header__collapse" :class="{ 'is-show': isCollapse == true }" @click.prevent="collapseLinkHidden">
          <div class="header__desktop">
            <ul class="header__list" v-if="categories.length">
              <li class="header__list-item" v-for="(item, index) in categories.slice(
                0,
                categories.length / 2,
              )" :key="index">
                <router-link to="/">{{ item.title }}</router-link>
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="dropdown-toggle" v-if="item.child" />
                <ul v-if="item.child" class="header__sub">
                  <li v-for="(child, indexChild) of item.child" :key="indexChild">
                    <router-link to="/">{{ child.title }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="header__desktop-logo">
              <router-link to="/">
                <img alt="Vue logo" class="logo" v-if="checkPage == 'home'" v-show="!isScrolled"
                  src="../assets/images/dienphat.png" />
                <img alt="Vue logo" class="logo" v-else v-show="!isScrolled" src="../assets/images/logo-dienphat.png" />
                <img alt="Vue logo" class="logo" v-show="isScrolled && checkPage == 'home'"
                  src="../assets/images/logo-dienphat.png" />
              </router-link>
            </div>
            <ul class="header__list" v-if="categories.length">
              <li class="header__list-item" v-for="(item, index) in categories.slice(
                categories.length / 2,
                categories.length,
              )" :key="index">
                <router-link to="/">{{ item.title }}</router-link>
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="dropdown-toggle" v-if="item.child" />
                <ul v-if="item.child" class="header__sub">
                  <li v-for="(child, indexChild) of item.child" :key="indexChild">
                    <router-link to="/">{{ child.title }}</router-link>
                  </li>
                </ul>
              </li>
              <li class="header__list-item">
                <button class="header__top-btn" @click.prevent="showModal">
                  <font-awesome-icon :icon="['fas', 'user']" class="icon-user" />
                </button>
              </li>
            </ul>
          </div>
          <div class="header__mobile">
            <div class="header__mobile-heading">
              <button class="header__mobile-close" @click.prevent="isShowCollapse"><font-awesome-icon
                  :icon="['fas', 'xmark']" /></button>
              <div class="header__mobile-logo">
                <router-link to="/">
                  <img alt="Vue logo" class="logo" src="../assets/images/logo-dienphat.png" />
                </router-link>
              </div>
            </div>
            <div class="header__mobile-body">
              <ul class="header__list">
                <li class="header__list-item" :class="{ 'is-show': item.child && open[index] }"
                  v-for="(item, index) in categories" :key="index">
                  <router-link to="/">{{ item.title }}</router-link>
                  <span class="dropdown-toggle" @click="toggleSubMenu(index)">
                    <font-awesome-icon :icon="['fas', 'chevron-down']" v-if="item.child" />
                  </span>

                  <ul v-if="item.child" class="header__sub">
                    <li v-for="(child, indexChild) of item.child" :key="indexChild">
                      <router-link to="/">{{ child.title }}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="header__listbtn">
                <li>
                  <router-link to="/">Tuyển dụng</router-link>
                </li>
                <li>
                  <a href="#" @click.prevent="showModal">Đăng nhâp - Đăng ký</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="drawer-backdrop" :class="{ 'is-close': isCollapse == true }" type="button"
          @click.prevent="isShowCollapse"></div>
      </div>
    </div>

  </header>
  <a-modal v-model:open="openModan" title="" @ok="handleOk" class="form-register-login">
    <a-row :gutter="{ xs: 20, lg: 20 }">
      <a-col :xs="24" :lg="12" class="login-info">
        <p>Giải pháp giao dịch Bất động sản trực tuyến</p>
        <h2 class="login-info__ttl">Điền phát</h2>
        <p>
          Đăng nhập ngay để khám phá toàn bộ thông tin và tận hưởng mọi tính
          năng tuyệt vời trên Điền phát!<br />Khách đã đăng nhập
        </p>
        <ul class="login-info__list">
          <li>
            Thông tin, tài liệu chi tiết, chuyên sâu về các dự án và quỹ căn
          </li>
          <li>Công cụ tính giá, chiết khấu và dòng tiền</li>
          <li>Cập nhật sớm những thông tin về dự án mới</li>
          <li>
            Cập nhật biến động kinh tế vĩ mô, đề xuất bất động sản phù hợp
          </li>
        </ul>
      </a-col>
      <a-col :xs="24" :lg="12">
        <form-login />
      </a-col>
    </a-row>
  </a-modal>

</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import FormLogin from '../components/FormLogin.vue';
import HeaderUser from '../components/HeaderUser.vue';
export default {
  data() {
    return {
      isCollapse: false,
      openModan: ref(false),
      categories: [
        {
          title: 'Về chúng tôi',
          child: [
            {
              title: 'Thư ngỏ',
            },
            {
              title: 'Tầm nhìn - sứ mệnh',
            },
            {
              title: 'Cơ cấu tổ chức',
            },
            {
              title: 'Tuyển dụng',
            },
          ],
        },
        {
          title: 'Lĩnh vực hoạt động',
          child: [
            {
              title: 'Đầu tư bất động sản',
            },
            {
              title: 'Cho thuê bất động sản',
            },
          ],
        },
        {
          title: 'Mua & thuê',
          child: [
            {
              title: 'Giao dịch thứ cấp ',
            },
            {
              title: 'Giao dịch sơ cấp ',
            },
            {
              title: 'Thuê',
            },
          ],
        },
        {
          title: 'Điền Phát Club ',
          child: [
            {
              title: 'Thẻ thành viên vàng ',
            },
            {
              title: 'Thẻ thành viên bạc',
            },
            {
              title: 'Thẻ thành viên đồng',
            },
          ],
        },
        {
          title: 'Dịch vụ',
          child: [
            {
              title: 'Cố vẫn tài chính',
            },
            {
              title: 'Định giá bất động sản',
            },
          ],
        },
        {
          title: 'Sự kiện',
        },
        {
          title: 'Tư vấn',
          child: [
            {
              title: 'Dự tính lãi vay',
            },
            {
              title: 'Kiến thức đâu tư',
            },
            {
              title: 'Vẵn bản mẫu',
            },
          ],
        },
      ],
    };
  },
  components: {
    FormLogin,
    HeaderUser
  },
  computed: {
    checkPage() {
      return this.$route.name;
    },
  },
  methods: {
    isShowCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    collapseLinkHidden(event) {
      if (window.innerWidth < 1200 && event.target.localName == 'a') {
        this.isCollapse = !this.isCollapse;
      }
    },
    showModal() {
      this.openModan = true;
    },
    handleOk(event) {
      console.log(event);
      this.openModan = false;
    },
  },

  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    const open = ref([]);

    const toggleSubMenu = (index) => {
      open.value[index] = !open.value[index];
    };

    return { isScrolled, toggleSubMenu, open };
  },
};
</script>
<style lang="scss">
.drawer-backdrop {
  position: fixed;
  background: #00000080;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  &:not(.is-close) {
    display: none;
  }
}

.header {
  position: relative;
  z-index: 1000;
  padding: 20px 0;

  @media (max-width: 1200px) {
    background: white;
    padding: 5px 0;
  }

  &.is-scrolled {
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    width: 100%;
    box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.3);
    padding: 10px 0;

    .header {
      &__top {
        padding: 10px 0 10px;

        &-left {
          color: black;
        }
      }

      &__list-item {

        >a,
        .header__top-btn {
          color: black;
        }

        >.dropdown-toggle {
          color: black;
        }
      }

      &__desktop {
        &-logo {
          a {
            // top: 0;
            width: 90px;
          }
        }

      }
    }
  }

  &__top {
    padding: 20px 0 10px;
    font-size: 18px;

    @media (max-width: 1200px) {
      display: none;
    }

    &-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-left {
      color: white;

      @media (max-width: 1200px) {
        color: black;
      }

      a {
        color: inherit;
        font-weight: 500;
      }
    }

    &-right {
      margin-left: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    &-btn {
      background: #ec8a42;
      border: 0;
      padding: 5px 20px;
      border-radius: 15px;
      color: white;
      font-weight: 700;
      cursor: pointer;

      @media (max-width: 1200px) {
        color: #989cab;
        background: #e9edf0;
        padding: 4px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
      }

      .icon-user {

        @media (min-width: 1200px) {
          margin-right: 5px;
        }
      }

      @media (max-width: 374px) {
        padding: 5px 10px;
        font-size: 11px;
      }
    }

    &-user {
      position: relative;
      padding-right: 20px;
      display: block;

      .image {
        border-radius: 50%;
        background: #e9edf0;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .dropdown-icon {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 15px;
      }
    }

    &-info {
      position: absolute;
      right: 0;
      top: 0;
      display: none;
    }
  }

  &__nav {
    &-mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;


      @media (min-width: 1200px) {
        display: none;
      }

    }

    &-logo {
      img {
        max-height: 80px;

        @media (max-width: 1200px) {
          max-height: 50px;
        }
      }
    }

    &-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-toggle {
      position: relative;
      width: 24px;
      height: 30px;
      background: transparent;
      border: 0;
      cursor: pointer;
      color: #f3811f;
    }
  }

  &__collapse {
    @media (max-width: 1200px) {
      transform: translateX(100%);
      visibility: hidden;
      overflow: hidden;
      position: fixed;
      top: 0;
      right: 0;
      padding: 20px 20px;
      width: 100%;
      height: 100%;
      background: white;
      transition: all 0.3s ease-in-out;
      max-width: 300px;
      z-index: 11;

      &.is-show {
        height: 100%;
        opacity: 1;
        visibility: unset;
        transform: translateY(0);
      }
    }
  }

  &__desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px 40px;

    @media (max-width: 1200px) {
      display: none;
    }

    .header {
      &__list {
        width: calc((100% - 190px) / 2);

        &:nth-child(1) {
          // justify-content: end;
        }

        &:nth-child(3) {
          justify-content: end;
        }
      }
    }

    .dropdown-toggle {
      display: none;
    }

    &-logo {
      a {
        position: relative;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        // top: -33px;

        // box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.3);
        img {}
      }
    }
  }

  &__mobile {
    height: 100%;

    padding-bottom: 20px;

    @media (min-width: 1200px) {
      display: none;
    }

    &-logo {
      text-align: center;
      padding: 12px 0;

      img {
        max-width: 98px;
      }
    }

    &-close {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: transparent;
      border: 0;
      z-index: 10;
    }

    &-heading {
      background: white;
      position: relative;
    }

    &-body {
      height: calc(100% - 100px);
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  &__list {
    @media (min-width: 1200px) {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px 40px;
    }

    &-item {
      position: relative;

      @media (max-width: 1200px) {
        &:not(:last-child) {
          // margin-bottom: 15px;
          border-bottom: 1px solid #e6e9ec;
        }

        &.is-show {
          .header {
            &__sub {
              display: block;
            }
          }
        }
      }

      &.is-show {
        .dropdown-toggle {
          transform: rotate(180deg);
        }
      }

      &:hover {
        @media (min-width: 1200px) {
          .header {
            &__sub {
              display: block;
            }
          }
        }
      }

      >a {
        font-size: 16px;

        @media (min-width: 1200px) {
          text-transform: uppercase;
        }

        @media (max-width: 1200px) {
          font-size: 16px;
          padding-right: 40px;
          padding: 13px 40px 13px 0;

        }
      }

      a {
        color: black;
        font-weight: 500;
        display: block;

        &:hover {
          color: #ec8a42;
        }
      }

      .header__top-btn {
        background: transparent;
        padding: 0;
        color: white;
      }

      .dropdown-toggle {
        position: absolute;
        right: -15px;
        top: 5px;
        color: inherit;
        font-size: 13px;
        text-align: center;
        transition: all .3s ease-in-out;

        @media (max-width: 1200px) {
          right: 0;
          top: 0;
          width: 38px;
          height: 48px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  &__sub {
    display: none;

    @media (min-width: 1200px) {
      min-width: max-content;
      background: white;
      padding: 15px;
      border-radius: 10px;
      z-index: 10;
      position: absolute;
      left: 0;
      top: 100%;
      box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.3);
    }

    @media (max-width: 1200px) {
      padding-left: 10px;
      padding-bottom: 10px;
    }

    li {
      &:not(:last-child) {
        margin-bottom: 15px;
      }

      a {
        color: black;

        @media (max-width: 1200px) {
          font-weight: 400;
        }
      }
    }
  }

  &__listbtn {
    margin-top: 20px;

    li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        display: block;
        text-align: center;
        padding: 10px 16px;
        font-weight: 500;
        border-radius: 9999px;
        background: #f5f6f9;
        font-size: 16px;

      }
    }
  }

  &.is-header-home {
    @media (min-width: 1200px) {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;

      .header {
        &__list {
          &-item {
            >a {
              color: white;
            }

            >.dropdown-toggle {
              color: white;
            }
          }
        }
      }

      &.is-scrolled {
        position: fixed;
        background: white;

        .header {
          &__list {
            &-item {
              >a {
                color: black;
              }

              >.dropdown-toggle {
                color: black;
              }
            }
          }
        }
      }
    }
  }
}

.form-register-login {
  width: 100% !important;
  max-width: 1000px;
  background: url(../assets/images/background-login.png) no-repeat center/cover;
  padding: 30px;

  @media (max-width: 992px) {
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .ant-modal-close {
    top: -14px;
    right: -11px;
  }

  .ant-modal-footer {
    display: none;
  }

  .ant-modal-content {
    background: transparent;
    box-shadow: none;

    @media (max-width: 992px) {
      padding: 20px 0;
    }
  }

  .ant-modal-title {}

  .ant-modal {}
}

.login-info {
  @media (max-width: 992px) {
    display: none;
  }

  &__ttl {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: #454d6c;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:first-child {
      margin-bottom: 0;
    }
  }

  &__list {
    color: #454d6c;

    li {
      margin-left: 20px;
      list-style: disc;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
