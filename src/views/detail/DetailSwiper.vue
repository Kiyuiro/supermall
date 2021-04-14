<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(value, index) in imgs" :key="index">
      <img :src="value" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper"
export default {
  name: "DetailSwiper",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
   components: {
     Swiper, SwiperItem
   }
}
</script>

<style scoped>
 .detail-swiper {
   height: 300px;
   overflow: hidden;
 }
</style>
