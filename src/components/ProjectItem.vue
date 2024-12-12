<template>
  <div class="project-item">
    <div class="project-item__img">
      <div class="project-item__img-child">
        <router-link :to="{ name: 'project.detaail', params: { slug: 'detail' } }">
          <img v-lazy="project.image" :alt="project.title" />
        </router-link>
      </div>
      <!-- <button class="project-item__favorite">
        <font-awesome-icon :icon="['fas', 'heart']" />
      </button> -->
      <!-- <div class="project-item__img-logo">
        <img src="../assets/images/dienphat.png" alt="" />
      </div> -->
    </div>
    <div class="project-item__ct">
      <div class="project-item__left">
        <h3 class="project-item__ct-ttl">
          <router-link :to="{ name: 'project.detaail', params: { slug: 'detail' } }" v-text="project.title" />
        </h3>
        <div class="project-item__ct-address">
          <font-awesome-icon :icon="['fas', 'location-dot']" />{{
            project.address
          }}
        </div>
        <div class="project-item__ct-totalarea" v-text="project.total_area" />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    project: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.project-item {
  padding: 15px;
  border-radius: 4px;
  border: 1px solid transparent;

  @media (max-width: 1024px) {
    padding: 0;
  }

  &:hover {
    @media (min-width: 1024px) {
      background: #fff;
      border-color: #e6e9ec;

      .project-item {
        &__img-child {
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
      border-radius: 6px;

      &::before {
        content: '';
        padding-top: calc((440 / 360) * 100%);
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

    &-logo {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 100px;
      z-index: 2;

      img {
        filter: drop-shadow(2.5px 2.5px 5px #ff9800);
      }
    }
  }

  &__favorite {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    border: 0;
    background: transparent;
    z-index: 10;
    cursor: pointer;
    color: #ff9800;

    &:hover {
      color: red;
    }

    .fa-heart {}
  }

  &__ct {
    &-ttl {
      font-weight: 700;
      color: #242836;
      font-size: 16px;
      margin-bottom: 5px;

      a {
        color: inherit;
        font-weight: inherit;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &-address {
      color: #454d6c;

      .fa-location-dot {
        margin-right: 5px;
      }
    }
  }
}
</style>
