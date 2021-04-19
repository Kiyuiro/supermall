<template>
  <div class="back-top" @click="backClick" :class="{show: isShow}">
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script>
let timer = null;
export default {
  name: "BackTop",
  props: {
    isShow: {
      probeType: Boolean,
      default: false
    }
  },
  methods: {
    backClick() {
     this.$emit("backClick");
    }
  }
}

</script>

<style scoped>
  .back-top {
    width: 0;
    height: 0;
    line-height: 45px;
    background-color: #fff;
    border-radius: 50%;
    position: fixed;
    right: 12px;
    bottom: 60px;
    color: var(--color-high-text);
    text-align: center;
    font-size: 0;
    box-shadow:0 0 0 0 var(--color-high-text);
    transform: scale(0.1);
    transition: all 0.5s;
  }

  .show {
    width: 45px;
    height: 45px;
    font-size: 24px;
    box-shadow:0 0 20px 8px var(--color-high-text);
    transform: scale(1);
    transition: all 0.5s;
  }

</style>
