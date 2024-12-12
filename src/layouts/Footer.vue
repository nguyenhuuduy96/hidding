<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="ctnr">
        <a-row :gutter="{ xs: 20, md: 20, lg: 20 }">
          <a-col :xs="24" :md="24" :lg="12">
            <div class="footer__logo">
              <router-link to="/">
                <img alt="Vue logo" class="logo" src="../assets/images/dienphat.png" width="120" />
              </router-link>
            </div>
            <div class="footer__address">
              <h2>Công ty cổ phần đầu tư phát triển hạ tầng Điền Phát </h2>
              <p>
                Địa chỉ Số 107 phố Thái Hà, Phường Trung Liệt, Quận Đống Đa,
                Thành phố Hà Nội, Việt Nam
              </p>
              <p>
                Giấy chứng nhận đăng ký doanh nghiệp, mã số doanh nghiệp:
                0109781400 cấp bởi Sở Kế hoạch và Đầu tư Thành phố Hà Nội.
              </p>
            </div>
          </a-col>
          <a-col :xs="24" :md="12" :lg="5">
            <ul class="footer__cate">
              <li><router-link to="/">Về Điền Phát</router-link></li>
              <li><router-link to="/">Điều kiện và điều khoản</router-link></li>
              <li><router-link to="/">Quy chế hoạt động</router-link></li>
              <li><router-link to="/">Chính sách bảo mật</router-link></li>
              <li><router-link to="/">Pháp lý</router-link></li>
              <li><router-link to="/">Hỗ trợ</router-link></li>
              <li><router-link to="/">Tuyển dụng</router-link></li>
            </ul>
          </a-col>
          <a-col :xs="24" :md="9" :lg="7">
            <div class="footer__info">
              <h2 class="footer__top-ttl">Thông tin liên hệ</h2>
              <ul class="footer__contact">
                <li>
                  <p>
                    <font-awesome-icon :icon="['fas', 'phone']" /><strong>098 5886789</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <font-awesome-icon :icon="['fas', 'envelope']" /><strong>huonglanpacolano@gmail.com</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <font-awesome-icon :icon="['fas', 'location-dot']" />https://dienphat.bivaco.net
                  </p>
                </li>
              </ul>
              <h3>Theo dõi ĐIỀN PHÁT</h3>
              <ul class="footer__social">
                <li>
                  <a href="" class="fb">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                  </a>
                </li>
                <li>
                  <a href="" class="yt">
                    <font-awesome-icon :icon="['fab', 'youtube']" />
                  </a>
                </li>
                <li>
                  <a href="" class="insta">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                  </a>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="ctnr">
        <div class="footer__bottom-inner">
          <p class="footer__copyright">{{ footer.copyright }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      footer: {
        copyright: '© 2024 - Bản quyền thuộc về Điền Phát',
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.footer {
  padding: 50px 0 0;
  background: #ec8a42;
  color: white;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  &__logo {
    margin-bottom: 15px;
    img{
      width: 140px;
    }
  }

  &__top {
    padding-bottom: 30px;

    .ant-row {
      gap: 20px 0;
    }

    &-logo {
      margin-bottom: 10px;
    }

    &-ttl {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  &__cate {
    li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  &__info {
    h3 {
      margin-bottom: 10px;
    }
  }

  &__address {
    p {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  &__social {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      color: white;
      font-size: 16px;

      &.fb {
        background: #3c68eb;
      }

      &.insta {
        background: linear-gradient(90deg,
            #f09433,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888);
      }

      &.yt {
        background: #e3352a;
      }
    }
  }

  &__contact {
    margin-bottom: 10px;

    li {
      position: relative;
      padding-left: 20px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      .svg-inline--fa {
        position: absolute;
        left: 0;
      }

      small {
        font-size: 14px;
        display: block;
        margin-top: 5px;
      }
    }
  }

  &__bottom {

    // text-align: center;
    &-inner {
      border-top: 1px solid #eeeeee6e;
      padding: 10px 0;

      .ant-row {
        gap: 10px 0;

        @media (max-width: 992px) {
          flex-direction: column-reverse;
        }
      }
    }
  }

  &__copyright {
    text-align: center;
  }
}
</style>
