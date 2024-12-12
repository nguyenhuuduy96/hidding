<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link user-drop" @click.prevent>
      <span class="icon-user">
        <font-awesome-icon :icon="['fas', 'user']" />
      </span>
      <span class="icon-down">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </span>

    </a>
    <template #overlay>
      <a-menu class="user-header">
        <a-menu-item key="0">
          <a @click.prevent="this.$emit('show-modal')">Đăng nhập - Đăng ký</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script>
export default {
  methods: {

  }
}
</script>
<style lang="scss">
.user-drop {
  .icon-user {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #989cab;
    background: #e9edf0;
    padding: 4px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    margin-right: 5px;
  }

  .icon-down {
    font-size: 13px;
    color: #242836;
    display: inline-block;
    transition: all .3s ease-in;
  }

  &.ant-dropdown-open {
    .icon-down {
      transform: rotate(180deg);
    }
  }
}

.user-header {
  min-width: 180px;
  box-shadow: 0 4px 12px 0 rgba(28,30,34,.08);
  border: 1px solid #e6e9ec;
  padding: 8px 4px;
  .ant-dropdown-menu {
    .ant-dropdown-menu-item-active {
      background: transparent;

    }

  }
  .ant-dropdown-menu-title-content{
      >a{
        font-weight: 500;
      }
    }
}
</style>
