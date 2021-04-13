<template>
  <swiper>
    <swiper-item v-for="(value, index) in banners" :key="index">
      <a :href="value.link">
        <img :src="value.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper"

export default {
  name: "HomeSwiper",
  data() {
    return {
      isImageLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      // console.log("home swiper img load");
      if(!this.isImageLoad) {
        this.$emit('homeSwiperImageLoad');
        this.isImageLoad = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
