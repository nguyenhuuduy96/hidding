<template>
  <div class="lease-item">
    <div class="lease-item__img">
      <div class="lease-item__img-child">
        <router-link to="/">
          <img v-lazy="lease.image" :alt="lease.title" />
        </router-link>
      </div>
      <div class="lease-item__projectname">
        <span v-text="lease.project_name" />
      </div>
      <div class="lease-item__area">
        Diện tích
        <span>{{ lease.area }}</span>
      </div>
    </div>
    <div class="lease-item__flex">
      <div class="lease-item__flex-ct">
        <div class="lease-item__price" v-text="lease.price" />
        <h3 class="lease-item__ttl">
          <router-link to="/" v-text="lease.title" />
        </h3>
      </div>
      <div class="lease-item__flex-logo">
        <img src="../assets/images/logo.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lease: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.lease-item {
  position: relative;
  padding-left: 30px;
  &:hover {
    .lease-item {
      &__img {
        &-child {
          img {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  &__img {
    position: relative;
    margin-bottom: 10px;

    &-child {
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        padding-top: calc((3 / 4) * 100%);
        display: block;
      }

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 3s ease 0s;
      }
    }
  }

  &__area {
    width: 76px;
    height: 76px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;

    span {
      font-weight: 700;
      position: relative;
      padding-top: 3px;
      &::before {
        content: '';
        width: 30px;
        height: 1px;
        background: currentColor;
        top: 1px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
      }
    }
  }

  &__favorite {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: transparent;
    border: 0;
    cursor: pointer;
    z-index: 10;
    color: #c48c37;
    &:hover {
      color: red;
    }
  }

  &__price {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 5px;
  }

  &__projectname {
    position: absolute;
    left: -30px;
    top: 0;
    writing-mode: vertical-lr;
    text-align: center;
    background: white;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-shadow: 0 0.15rem 0.35rem rgba(0, 0, 0, 0.075);
    color: #00798d;
    text-transform: uppercase;

    span {
      transform: rotate(180deg);
      display: inline-block;
    }
  }
  &__flex{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-ct{
      width: calc(100% - 75px);
    }
    &-logo{
      width: 70px;
    }
  }
}
</style>
