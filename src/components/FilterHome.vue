<template>
  <div class="sec-search">
    <div class="ctnr">
      <h1 class="search-form__ttl">Giải pháp giao dịch bất động sản từ trực tuyến đến trực tiếp của Điền Phát</h1>
      <div class="sec-search__box">
        <div class="sec-search__tab">
          <div class="sec-search__tab-link" :class="{ 'is-active': isActiveTab == 1 }" @click="handleClickTab(1)">
            Giao dịch sơ cấp
          </div>
          <div class="sec-search__tab-link" :class="{ 'is-active': isActiveTab == 2 }" @click="handleClickTab(2)">
            Giao dịch thứ cấp
          </div>
          <div class="sec-search__tab-link" :class="{ 'is-active': isActiveTab == 3 }" @click="handleClickTab(3)">
            Thuê
          </div>
        </div>
        <div class="sec-search__ct">
          <form class="search-form">
            <div class="search-form__form mobile">
              <div class="search-form__box">
                <input type="text" class="form-control"
                  :placeholder="isActiveTab == 1 ? 'Tìm mua căn mới tại dự án' : isActiveTab == 2 ? 'Tìm mua theo khu vực hoặc dự án' : 'Tìm thuê theo khu vực hoặc dự án'">
                <button class="search-form__search">
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
              </div>
              <button class="search-form__action" @click.prevent="isShowOptionMobile =! isShowOptionMobile">
                <font-awesome-icon :icon="['fas', 'plus']" v-if="isShowOptionMobile == false"/>
                <font-awesome-icon :icon="['fas', 'minus']" v-if="isShowOptionMobile == true"/>
              </button>
            </div>
            <div class="search-form__desktop" :class="{ 'is-open': isShowOptionMobile == true }">
              <div class="search-form__grid " :class="{ 'col-4-4': isActiveTab == 3 }">
                <div class="search-form__grid-item">
                  <div class="search-form__grid-changer" :class="{ 'is-show': optionChoose == 1 }"
                    @click="showOptionChoose(optionChoose == 1 ? null : 1)">
                    Dự án
                    <span class="search-form__grid-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                  </div>
                  <div class="search-form__option" v-show="optionChoose == 1">
                    <div class="search-form__option-box">
                      <a-checkbox-group v-model:value="filter.project">
                        <a-checkbox :value="1">Dự án trọng điểm</a-checkbox>
                        <a-checkbox :value="2">Phân khu mới mở bán</a-checkbox>
                        <a-checkbox :value="3">Bất động sản cho thuê</a-checkbox>
                      </a-checkbox-group>
                    </div>
                  </div>
                </div>
                <div class="search-form__grid-item">
                  <div class="search-form__grid-changer" :class="{ 'is-show': optionChoose == 2 }"
                    @click="showOptionChoose(optionChoose == 2 ? null : 2)">
                    Loại hình
                    <span class="search-form__grid-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                  </div>
                  <div class="search-form__option" v-show="optionChoose == 2">
                    <div class="search-form__option-box">
                      <a-checkbox-group v-model:value="filter.type">
                        <a-checkbox :value="1">Shophouse</a-checkbox>
                        <a-checkbox :value="2">Nhà liền kề</a-checkbox>
                        <a-checkbox :value="3">Biệt thự Đơn lập</a-checkbox>
                        <a-checkbox :value="4">Biệt thự Song lập</a-checkbox>
                      </a-checkbox-group>
                    </div>
                  </div>
                </div>
                <div class="search-form__grid-item">
                  <div class="search-form__grid-changer" :class="{ 'is-show': optionChoose == 3 }"
                    @click.prevent="showOptionChoose(optionChoose == 3 ? null : 3)">
                    Khoảng giá
                    <span class="search-form__grid-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                  </div>
                  <div class="search-form__option" v-show="optionChoose == 3">
                    <div class="search-form__option-box">
                      <a-checkbox-group v-model:value="filter.price">
                        <a-checkbox :value="1">Dưới 3 tỷ</a-checkbox>
                        <a-checkbox :value="2">3-5 tỷ</a-checkbox>
                        <a-checkbox :value="3">5-7 tỷ</a-checkbox>
                        <a-checkbox :value="4">7-10 tỷ</a-checkbox>
                      </a-checkbox-group>
                    </div>
                  </div>
                </div>
                <div class="search-form__grid-item">
                  <div class="search-form__grid-changer" :class="{ 'is-show': optionChoose == 4 }"
                    @click.prevent="showOptionChoose(optionChoose == 4 ? null : 4)">
                    Diện tích
                    <span class="search-form__grid-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                  </div>
                  <div class="search-form__option" v-show="optionChoose == 4">
                    <div class="search-form__option-box">
                      <a-checkbox-group v-model:value="filter.area">
                        <a-checkbox :value="1">Dưới 50 m²</a-checkbox>
                        <a-checkbox :value="2">50-100 m²</a-checkbox>
                        <a-checkbox :value="3">100-150 m²</a-checkbox>
                        <a-checkbox :value="4">150-300 m²</a-checkbox>
                      </a-checkbox-group>
                    </div>
                  </div>
                </div>
                <div class="search-form__grid-item" v-if="isActiveTab != 3">
                  <div class="search-form__grid-changer" :class="{ 'is-show': optionChoose == 5 }"
                    @click.prevent="showOptionChoose(optionChoose == 5 ? null : 5)">
                    Phòng ngủ và Toilet
                    <span class="search-form__grid-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                  </div>
                  <div class="search-form__option" v-show="optionChoose == 5">
                    <div class="search-form__option-box">
                      <a-checkbox-group v-model:value="filter.room">
                        <a-checkbox :value="2">1</a-checkbox>
                        <a-checkbox :value="3">2</a-checkbox>
                        <a-checkbox :value="4">3</a-checkbox>
                      </a-checkbox-group>
                    </div>
                  </div>
                </div>
                <div class="search-form__grid-item wbtn">
                  <button class="search-form__btn">Tìm ngay</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: {
        project: null,
        area: null,
        type: null,
        price: null,
        room: null
      },
      optionChoose: null,
      isActiveTab: 1,
      isShowOptionMobile: false
    };
  },
  methods: {
    showOptionChoose(index) {
      this.optionChoose = index;
    },
    handleClickTab(index) {
      this.isActiveTab = index
    },

  }
}
</script>
<style lang="scss">
.sec-search {
  background: rgba(0, 0, 0, 0.50);
  padding: 20px 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  position: absolute;

  @media (max-width: 1200px) {
    background: transparent;
  }

  &__box {
    @media (max-width: 1200px) {
      box-shadow: 0 5px 20px 0 hsla(35, 26%, 76%, .3), 0 1px 3px 0 hsla(35, 14%, 68%, .25);
    }
  }

  &__tab {
    display: flex;
    gap: 2px;
    white-space: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1200px) {
      gap: 0;
      background: white;
      border-bottom: 1px solid #e6e9ec;
      border-radius: 6px 6px 0 0;
    }

    &-link {
      display: block;
      background: white;
      color: black;
      cursor: pointer;
      padding: 10px 20px;
      text-transform: uppercase;
      border-radius: 6px 6px 0 0;
      border-bottom: 1px solid transparent;
      font-weight: 500;

      @media (max-width: 1200px) {
        font-size: 14px;
        text-transform: inherit;
      }

      &.is-active {
        background: #ec8a42;
        color: white;

        @media (max-width: 1200px) {
          background: transparent;
          border-bottom-color: #ec8a42;
          color: #ec8a42;
        }
      }
    }
  }

  &__ct {
    background: white;
    padding: 20px;
    border-radius: 0 6px 6px 6px;
    position: relative;

    @media (max-width: 1200px) {
      border-radius: 0 0 6px 6px;
    }
  }
}

.search-form {
  transition: all 0.3s ease-in;
  border-radius: 10px;

  &__ttl {
    color: black;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  &__desktop {
    @media (max-width: 1200px) {
      display: none;
      position: absolute;
      left: 0;
      width: 100%;
      top: calc(100% - 8px);
      z-index: 100;
      background: white;
      padding: 20px;
      border-radius: 0 0 6px 6px;
      &.is-open{
        display: block;
      }
    }
  }

  .form-control {
    width: 100%;
    background: white;
    padding: 5px 10px;
    height: 48px;
    border: 1px solid #dfdfdf;
    border-radius: 6px;

    &::placeholder {
      color: #dfdfdf;
    }
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &.col-4-4 {
      .search-form {
        &__grid {
          &-item {
            width: calc((100% - 150px) / 4);

            @media (max-width: 1200px) {
              width: 100%;
            }

            &.wbtn {
              @media (min-width: 1200px) {
                width: 100px;
              }
            }
          }
        }
      }
    }

    &-item {
      width: calc((100% - 150px) / 5);
      position: relative;

      @media (max-width: 1200px) {
        width: 100%;
      }

      &.wbtn {
        @media (min-width: 1200px) {
          width: 100px;
        }

        @media (max-width: 1200px) {
          width: auto;
          display: none;
        }
      }
    }

    &-changer {
      color: black;
      cursor: pointer;
      background: white;
      padding: 5px 10px;
      border-bottom: 1px solid #dfdfdf;
      position: relative;

      &.is-show {
        background: #ec8a42;
        color: white;

        .search-form__grid-icon {
          transform: rotate(180deg) translateY(50%);
        }
      }
    }



    &-icon {
      font-size: 8px;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }

  &__option {
    @media (min-width: 1200px) {
      position: absolute;
      background: white;
      border-radius: 5px;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
      top: calc(100% + 10px);
      left: 0;
      min-width: 200px;
      width: 100%;
      overflow: hidden;
      z-index: 10;
    }

    &-ttl {
      background: #ec8a42;
      color: white;
      font-size: 18px;
      font-weight: 500;
      padding: 5px 10px;
    }

    &-stt {
      font-size: 16px;
    }

    &-box {
      padding: 10px;

      .ant-radio-wrapper,
      .ant-checkbox-wrapper {
        display: flex;
        align-items: center;
        width: 100%;

        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }

    .close-option {
      position: absolute;
      top: 7px;
      right: 5px;
      background: transparent;
      cursor: pointer;
      border: 0;
      color: gray;
      z-index: 10;
    }
  }

  &__btn {
    width: 100%;
    height: 100%;
    // font-size: 20px;
    background: #ec8a42;
    color: white;
    font-weight: 500;
    border: 0;
    cursor: pointer;
    border-radius: 5px;

    @media (max-width: 992px) {
      padding: 5px 15px;
    }
  }

  &__form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    &.mobile {
      @media (min-width: 1200px) {
        display: none;
      }
    }
  }

  &__box {
    position: relative;
    width: calc(100% - 55px);
  }

  &__action {
    background: #F38721;
    border: 1px solid #f38723;
    height: 40px;
    width: 40px;
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__search {
    background: #F38721;
    border: 1px solid #f38723;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    border-radius: 4px;
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
