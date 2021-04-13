<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "",
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollTo(x, y, time = 0) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("刷新");
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    getScrollX() {
      return this.scroll ? this.scroll.x : 0;
    },
  },
  mounted() {
    // 创建 BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true,
      preventDefault: false,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动位置
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position);
      })
    }
    // 监听是否需要上拉加载
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        // console.log("up loading");
        this.$emit('pullingUp');
      })
    }
  }
}
</script>

<style scoped>

</style>
