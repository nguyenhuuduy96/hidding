<template>
  <main id="page-project-detail">
    <section class="project-slide"></section>
    <div class="page-header">
      <div class="ctnr">
        <ul class="page-header__list">
          <li class="page-header__list-item"><a href="" class="page-header__list-link">Tổng quan</a></li>
          <li class="page-header__list-item"><a href="" class="page-header__list-link">Phân khu </a></li>
          <li class="page-header__list-item"><a href="" class="page-header__list-link">Vị trí</a></li>
          <li class="page-header__list-item"><a href="" class="page-header__list-link">Tiện ích cảnh quan</a></li>
          <li class="page-header__list-item"><a href="" class="page-header__list-link"> Tài liệu </a></li>
          <li class="page-header__list-item"><a href="" class="page-header__list-link">Tổng mặt bằng</a></li>
          <li class="page-header__list-item"><a href="" class="page-header__list-link">Giá và Quỹ căn</a></li>
        </ul>
      </div>
    </div>
    <div class="page-body">
      <div class="ctnr">
        <div class="page-body__flex">
          <div class="page-body__content">
            <section class="sec-detail">
              <h2 class="common-ttl01" v-text="'Dự án căn hộ The Glory by Silk Path'" />
              <div class="box">
                <h3 class="common-ttl02" v-text="'Thông tin chi tiết'" />
                <div class="detail-grid">
                  <dl class="detail-grid__item" v-for="(item, index) in project_detail.list" :key="index">
                    <dt class="detail-grid__ttl" v-text="item.title" />
                    <div class="detail-grid__ct" v-html="item.content" />
                  </dl>
                </div>
                <h3 class="common-ttl02" v-text="'Điểm nổi bật'" />
                <ul class="detail-list">
                  <li class="detail-list__item" v-for="(item, index) in project_detail.listhighlight" :key="index" v-text="item.title"/>
                </ul>
              </div>
            </section>
          </div>
          <div class="page-body__sidebar">
            <div class="page-body__sidebar-content">
              <sidebar-project />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import SidebarProject from './layouts/SidebarProject.vue';
export default {
  data() {
    return {
      image:
        'https://market.vinhomes.vn/photo/get/vhkCMDBQIukD7mK6lJBZVc6TK3nPtOjepP0StEF35V_Tvdo6_ReZ_jsrPAXUoNFatCfEzseqj7K4KTRVa3XRwcUg==/1350x900/image.jpg',
      photos: [
        {
          image:
            'https://market.vinhomes.vn/photo/get/vh49Vh87QtUNXqNcOW81x6RdVbpJfcZzR45KY2CXUQ0StcUHhlnEWgHCtOwqUgTcFF-0OYc5GppayFdQNdRHdfPA==/900x600/image.jpg',
        },
        {
          image:
            'https://market.vinhomes.vn/photo/get/vh5m5Z32S0TUeGOO6DyNUnKkSYManEmmD-Tjy-ALUR31u11OvyW33lGtEV-kfnCY167OvzB2XJgP_a2JfjS6VzDA==/900x600/image.jpg',
        },
        {
          image:
            'https://market.vinhomes.vn/photo/get/vhkCMDBQIukD7mK6lJBZVc6TK3nPtOjepP0StEF35V_Tvdo6_ReZ_jsrPAXUoNFatCfEzseqj7K4KTRVa3XRwcUg==/1350x900/image.jpg',
        },
        {
          image:
            'https://market.vinhomes.vn/photo/get/vhgI-f56s8eKqMk-3xvF5XzzoWtBkw16bUHJiTTOtv10DR9VTPSu8lFStlvyd7vsz5wT-n1IVn5PaToDO_KVP-gw==/1200x800/image.jpg',
        },
      ],
      project_detail: {
        list: [
          {
            title: "Tên dự án",
            content: "Dự án Noble Crystal Tây Hồ"
          },
          {
            title: "Chủ đầu tư",
            content: "Điền Phát"
          },
          {
            title: "Hình thức sở hữu",
            content: "Lâu dài hoặc 50 năm cho từng loại hình BĐS"
          },
          {
            title: "Tổng diện tích",
            content: "385 ha"
          },
          {
            title: "Mật độ xây dựng",
            content: "Đang cập nhật"
          },
          {
            title: "Quy mô phát triển",
            content: "4.147 căn Thấp tầng; 4 tòa Căn hộ; 9 tòa hỗn hợp Văn phòng - Thương mại"
          },
          {
            title: "Thời điểm khởi công",
            content: "Quý IV/2024"
          },
          {
            title: "Tiến độ",
            content: "Đang triển khai thi công"
          },
        ],
        listhighlight:[
          {
            title:"The Glory by Silk Path là dự án căn hộ tọa lạc tại số 08 đường Nguyên Hồng, phường Láng Hạ, quận Đống Đa, Hà Nội."
          },
          {
            title:"Từ dự án có thể di chuyển dễ dàng đến các khu vực nội thành và ngoại thành nhờ các trục giao thông kết nối linh hoạt với đường vành đai 2, 3 và hệ thống đường sắt đô thị trong tương lai."
          },
          {
            title:"Dự án cách trung tâm quận Ba Đình, hồ Tây chưa đến 10 phút di chuyển, cách Phố cổ 15 phút và cách sân bay Quốc tế Nội bài khoảng 30 phút."
          },
          {
            title:"The Glory by Silk Path được triển khai trên tổng diện tích 2.340m2, bao gồm 1 tháp căn hộ cao 12 tầng nổi, 3 tầng hầm và 5 căn nhà thấp tầng với tổng số 110 căn hộ. Diện tích các căn hộ dao động từ 57-82m2, được thiết kế dưới dạng 2-3 phòng ngủ."
          },
          {
            title:"Dự án được quản lý bởi thương hiệu khách sạn 5 sao Silk Path với kiến trúc ấn tượng và hệ thống dịch vụ tiện ích dành riêng cho cư dân khu căn hộ như Sky bar, phòng tập gym, vườn dạo bộ, trung tâm thương mại, đài phun nước, công viên, vườn nướng BBQ, phố đi bộ…"
          }
        ]
      }
    };
  },
  components: {
    SidebarProject
  },
  methods: {
    // goToSlide(index) {
    //   currentIndex.value = index;
    //   mainCarousel.value.goTo(index);
    //   navCarousel.value.goTo(index);
    // },
    // onMainChange(current) {
    //   currentIndex.value = current;
    //   navCarousel.value.goTo(current);
    // },
    // onNavChange(from, to) {
    //   currentIndex.value = to;
    //   mainCarousel.value.goTo(to);
    // },
  },
  setup() {

  },
};
</script>
<style lang="scss">
.page-header {
  margin-bottom: 40px;
  &__list {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #e6e9ec;
    padding: 10px 0;
    gap: 10px 24px;

    &-link {
      font-weight: 500;
      font-size: 14px;
    }
  }
}

.page-body {
  &__flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__content {
    width: calc(100% - 380px);
  }

  &__sidebar {
    width: 360px;
  }
}
.detail-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 24px;
  &__item{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 12px 0;
    gap: 8px;
    &:not(:nth-last-child(-n + 2)){
      border-bottom: 1px solid #e7e9ec;
    }
  }
  &__ttl{
    color: #454d6c;
    min-width: 130px;
  }
  &__ct{
    text-align: right;
    font-weight: 500;
    }
}
.detail-list{
  &__item{
    position: relative;
    padding-left: 35px;
    color: #454d6c;
    &:not(:last-child){
      margin-bottom: 16px;
    }
    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      background: url(../../assets/images/logo-d.png) no-repeat center/contain;
    }
  }
}
</style>
