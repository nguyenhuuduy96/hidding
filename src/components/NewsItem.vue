<template>
  <div class="news-item" >
    <div class="news-item__img">
      <router-link to="/">
        <img v-lazy="news.image" :alt="news.title">
      </router-link>
    </div>
    <div class="news-item__ct">
      <h3 class="news-item__ct-ttl">
        <router-link to="/" v-text="news.title" />
      </h3>
      <div class="news-item__ct-brief" v-html="news.brief" />
    </div>
  </div>
</template>
<script>

export default{
  props:{
    news:{
      type: Object
    }
  },

}

</script>
<style lang="scss">
.news-item {
  box-shadow: 0 0 3px rgba($color: #000000, $alpha: .3);
  border-radius: 4px;
  overflow: hidden;
  &:hover{
    .news-item {
      &__img{
        img{
          transform: scale(1.1);
        }
      }
    }
  }
  &__img {
    position: relative;
    margin-bottom: 10px;
    overflow: hidden;
    &::before {
      content: "";
      display: block;
      padding-top: calc((3/5) * 100%);
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1s ease 0s;
    }
  }

  &__ct {
    padding: 10px;

    &-ttl {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 5px;

      a {
        font-weight: inherit;
      }
    }

    &-brief {
      text-align: justify;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

}
</style>
