<template>
  <div class="subdivision-item" >
    <div class="subdivision-item__img">
      <div class="subdivision-item__img-child">
        <router-link :to="{ name: 'project.detaail', params: { slug: 'detail' } }"><img v-lazy="subdivision.image" :alt="subdivision.title" /></router-link>
      </div>
      <div class="subdivision-item__img-ct">
        <p>Phân khu</p>
        <h3 class="subdivision-item__ttl" v-text="subdivision.title" />
      </div>
    </div>
    <div class="subdivision-item__ct">
      <p>Phân khu</p>
      <h3 class="subdivision-item__ttl">
        <router-link :to="{ name: 'project.detaail', params: { slug: 'detail' } }">{{ subdivision.title }} </router-link>
      </h3>
      <div class="subdivision-item__brief" v-html="subdivision.brief" />
      <ul class="subdivision-item__list">
        <li class="subdivision-item__list-item">
          <p>Dự án</p>
          <span class="subdivision-item__list-ttl" v-text="subdivision.project_name" />
        </li>
        <li class="subdivision-item__list-item">
          <p>Phong cách xây dựng</p>
          <span class="subdivision-item__list-ttl" v-text="subdivision.type1" />
        </li>
        <li class="subdivision-item__list-item">
          <p>Giá bán</p>
          <span class="subdivision-item__list-ttl" v-text="subdivision.price" />
        </li>
        <li class="subdivision-item__list-item">
          <p>Loại hình</p>
          <span class="subdivision-item__list-ttl" v-text="subdivision.type2" />
        </li>
      </ul>
      <router-link :to="{ name: 'project.detaail', params: { slug: 'detail' } }" class="subdivision-item__btn">Xem chi tiết</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subdivision: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.subdivision-item {
  border: 1px solid #eee;
  border-radius: 6px;
  background: white;
  position: relative;
  overflow: hidden;

  &:hover {
    .subdivision-item {
      &__ct {
        top: 15px;
        opacity: 1;
      }

      &__img {
        &-ct {
          bottom: 100px;
          opacity: 0;
        }
      }
    }
  }

  &__img {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    line-height: 1;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #00000073, transparent);
      z-index: 1;
    }

    &-child {
      &::before {
        content: '';
        padding-top: calc((3 / 3) * 100%);
        display: block;
      }

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 1.5s ease 0s;
      }
    }

    &-ct {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 15px;
      z-index: 2;
      color: white;
      transition: all 0.3s ease-in-out;

      p {
        margin-bottom: 10px;
      }

      .subdivision-item__ttl {
        color: white;
      }
    }

    &-icon {
      margin-bottom: 10px;

      img {
        max-width: 55px;
      }
    }
  }

  &__ct {
    position: absolute;
    inset: 100% 15px 15px;
    background: #ffffff96;
    overflow: hidden;
    border-radius: 10px;
    padding: 10px 20px 0;
    display: flex;
    flex-direction: column;
    opacity: 0;
    z-index: 2;
    transition: all 0.3s ease-in-out;

    &-icon {
      img {
        max-width: 55px;
      }
    }
  }

  &__ttl {
    font-weight: 700;
    // color: #162a75;
    font-size: 16px;
    margin-bottom: 5px;

    a {
      color: inherit;
      font-weight: inherit;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__brief {
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }

  &__list {
    display: grid;
    grid-template-columns: 40% calc(60% - 20px);
    gap: 20px;
    margin-bottom: 10px;

    &-item {
      list-style: disc;
      margin-left: 15px;
    }

    &-ttl {
      font-weight: 700;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ec8a42;
    font-size: 14px;
    font-weight: 700;
    min-height: 34px;
    border-radius: 0;
    text-align: center;
    margin: auto -20px 0;
    background: #ec8a42;
    color: white;
    padding: 8px 10px;
    position: relative;

    &:hover {
      color: white;

      &::after {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
      }
    }

    &::after {
      content: '';
      width: 14px;
      height: 14px;
      position: absolute;
      right: 5px;
      bottom: 5px;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
