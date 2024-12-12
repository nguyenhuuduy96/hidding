<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 24 }"
    :wrapper-col="{ span: 24 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    class="form-login"
  >
  <h2 class="form-login__ttl">Đăng ký hoặc đăng nhập</h2>
    <a-form-item
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input
        v-model:value="formState.username"
        placeholder="Đăng nhập qua email"
      />
    </a-form-item>

    <a-form-item
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password
        v-model:value="formState.password"
        placeholder="Password"
      />
    </a-form-item>
    <!-- <a-form-item name="remember" :wrapper-col="{ span: 24 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item> -->
    <a-form-item :wrapper-col="{ span: 24 }">
      <button class="form-login__forgot">Quên mật khẩu</button>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 24 }">
      <a-button type="primary" html-type="submit">Đăng nhập</a-button>
    </a-form-item>
    <p class="form-login__other">
      Sử dụng tài khoản khác?
      <button type="button" class="form-login__other-btn">
        Đăng ký hoặc đăng nhập
      </button>
    </p>
  </a-form>
</template>
<script setup>
import { reactive } from 'vue';
const formState = reactive({
  username: '',
  password: '',
  // remember: true,
});
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>
<style lang="scss">
.form-login {
  background: white;
  box-shadow: 0 0 rgba($color: #000000, $alpha: .3);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05);
  @media (max-width: 992px) {
    max-width: 460px;
    margin: 0 auto;
  }
  @media (max-width: 640px) {
    background: transparent;
    box-shadow: none;
    padding: 0;
  }
  &__ttl{
    color: #454d6c;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__forgot {
    background: transparent;
    border: 0;
    color: #162a75;
    text-decoration: underline;
  }
  .ant-form-item {
    margin-bottom: 10px;
  }
  .ant-input-affix-wrapper{
    padding: 0 11px;
    >input.ant-input{
      height: 50px;
    }
  }
  .ant-input-affix-wrapper >input.ant-input{
    height: 50px;
  }
  .ant-input {
    height: 50px;
    // height: 48px;
  }
  .ant-btn-primary {
    width: 100%;
    background: #c48c37;
    border-color: #c48c37;
    color: #fff;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    // text-transform: uppercase;
    font-weight: 700;
  }
  &__other {
    display: flex;
    flex-wrap: wrap;
    gap: 0 5px;
    &-btn {
      background: transparent;
      padding: 0;
      border: 0;
      color: #162a75;
      text-decoration: underline;
    }
  }
}
</style>
