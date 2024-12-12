<template>
  <div class="form-contact">
    <h2 class="form-contact__ttl">Tư vấn mua nhà chuyên sâu</h2>
    <ul class="form-contact__note">
      <li>
        <span class="icon"><font-awesome-icon :icon="['fas', 'check']" /></span>
        Phân tích <strong>quỹ căn, chính sách, tiện ích</strong> giúp Khách hàng lựa
        chọn <strong>căn tốt nhất.</strong>
      </li>
      <li>
        <span class="icon"><font-awesome-icon :icon="['fas', 'check']" /></span>
        <strong>Giải đáp mọi thắc mắc</strong> của khách hàng.
      </li>
      <li>
        <span class="icon"><font-awesome-icon :icon="['fas', 'check']" /></span>
        Tuyệt đối <strong>bảo mật</strong> thông tin cá nhân.
      </li>
    </ul>
    <a-form :model="formState" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" name="basic" autocomplete="off"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item name="username" label="Họ tên" :rules="[{ required: true, message: 'Chưa nhập họ tên' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item name="phone" label="Số điện thoại" :rules="[{ required: true, message: 'Chưa nhập số điện thoại' }]">
        <a-input v-model:value="formState.phone" />
      </a-form-item>
      <p class="form-contact__desc">
        Bằng việc tiếp tục, bạn đã đồng ý với Điền Phát về các
        <a href="" target="_blank">Điều khoản dịch vụ</a> và
        <a href="" target="_blank">Chính sách bảo mật.</a>
      </p>
      <a-form-item :wrapper-col="{ span: 24 }">
        <a-button type="primary" html-type="submit">Nhận tư vấn ngay</a-button>
      </a-form-item>
      <div class="form-contact__text"><span>Hoặc</span></div>
      <div class="form-contact__wbtn">
        <a href="tel:1900998823" class="form-contact__wbtn-btn" role="link" aria-label="Gọi điện">
          <span class="icon"><font-awesome-icon :icon="['fas', 'phone']" /></span>
          <span>
            Gọi trực tiếp<br>
            <span class="has-text-weight-normal">1900 998 823</span>
          </span>
        </a>
        <a href="" target="_blank" class="form-contact__wbtn-btn" aria-label="Chat qua Zalo">
          <span class="icon">
            <img src="../../../assets/svg/zalo_icon.svg" alt="Chat qua Zalo">
          </span>
          <span>Chat qua Zalo</span>
        </a>
      </div>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formState: {
        username: '',
        phone: '',
        remember: true,
      },
    };
  },
  methods: {
    onFinish(values) {
      console.log('Success:', values);
    },
    onFinishFailed(errorInfo) {
      console.log('Failed:', errorInfo);
    },
  },
};
</script>
<style lang="scss">
.form-contact {
  border: 1px solid #e6e9ec;
  box-shadow: 0 4px 12px 0 rgba(28, 30, 34, .08);
  border-radius: 6px;
  padding: 20px;

  &__ttl {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 12px;
  }

  &__note {
    margin-bottom: 20px;

    li {
      position: relative;
      padding-left: 28px;
      color: #989cab;
      font-size: 14px;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      strong {
        color: #454d6c;
      }

      .icon {
        position: absolute;
        left: 0;
        top: 0;
        background: #53ae61;
        color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &__desc {
    color: #989cab;
    font-size: 14px;
    margin: 20px 0 12px;

    a {
      text-decoration: underline;
      color: #162a75bf;
      font-weight: 500;
    }
  }
  &__text{
    color: #989cab;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 500;
    &::before, &::after{
      content: "";
      flex: 1;
      height: 1px;
      background: #e6e9ec;
    }
  }
  &__wbtn{
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    &-btn{
      flex: 1;
      min-height: 56px;
      font-size: 14px;
      border: 1px solid currentColor;
      border-radius: 6px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      &:hover{
        background: #faf7f4;
        border-color: #c48c37;
        color: #c48c37;
      }
      .icon{
        width: 20px;
        img{
          width: 20px;
        }
      }
      span{
        font-weight: 500;
        span{
          font-weight: 400;
        }
      }
    }
  }
  .ant-form {
    .ant- {
      &input {
        height: 58px;
        border: 1px solid #989cab;
        border-radius: 6px;
      }
      &btn {
        background: #c48c37;
        border: 1px solid #c48c37;
        color: white;
        font-size: 16px;
        font-weight: 500;
        min-height: 48px;
        border-radius: 6px;
        padding: 5px;
        width: 100%;
      }

      &form-item {
        margin-bottom: 12px;

        &-row {
          position: relative;
        }

        &-label {
          position: absolute;
          left: 12px;
          top: 13px;
          z-index: 2;
          padding-bottom: 0;

          label {
            color: #24283680;
          }
        }

      }
    }
  }
}
</style>
