<template>
  <div class="section-subdivision">
    <div class="ctnr">
      <div class="hedding-subdivision">
        <h2 class="section-title">Phân khu mới mở bán</h2>
      </div>

      <div class="box-subdivision">
       <div class="row">
            <div class="clm" v-for="(Subdivision, index) in Subdivision" :key="index" style="--w-lg:4;--w-m:4;--w-xs:12">
              <div class="room__item room__item--style1">
                <div class="room__item-inner">
                  <div class="room__item-thumb">
                    <a href="#" tabindex="0">
                      <img
                        :src="Subdivision.imageUrl"
                        alt="Bungalow 2 giường"
                      />
                    </a>
                  </div>
                  <div class="room__item-content">
                    <div class="room__item-header">
                      <div class="room__item-name">
                        <img :src=" Subdivision.icon_zoom " all="icon-Bungalow 2 giường"/>
                        <h3><a href="#" tabindex="0">{{ Subdivision.name }}</a></h3>
                        <p>{{ Subdivision.category }}</p>
                      </div>
                    </div>
                    <div class="room__item-body">
                      <p style="text-align: justify">{{ Subdivision.description }}</p>
                      <ul class="room__feature">
                        <li class="room__feature-item" v-for="(item, idx) in Subdivision.room__feature[0]['item-zoom']" :key="idx">
                          <div class="room__feature-icon">
                            <img
                              :src="item.icon"
                              alt="30 m2"
                            />
                          </div>
                          <div class="room__feature-text">
                            <p>{{ item.room__feature }}</p>
                          </div>
                        </li>
                      </ul>
                      <a href="#" class="custom-btn" tabindex="0"
                        ><span>Xem thêm</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import axios from "axios";

export default {
    data(){
        return{
            Subdivision:[]
        }
    },

    mounted(){
        this.fetchSubdivision()
    },

    methods: {
    async fetchSubdivision() {
      try {
        const response = await axios.get("http://localhost:3000/Subdivision");
        console.log(response);

        this.Subdivision = response.data; 
        
      } catch (error) {
        console.error(error);
      }
    },
  },

  name: "Subdivision",
  component: {
    Swiper,
    SwiperSlide,
  },
  
};
</script>

<style></style>
