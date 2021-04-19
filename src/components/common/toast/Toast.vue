<template>
  <div class="toast">
    <div :class="{show: isShow}" class="text">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show(message, duration = 500) {
      console.log(this.isShow);
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
}

.toast .text {
  border-radius: 20px;
  padding: 8px 10px;
  color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s;
}

.toast .show {
  color: white;
  background-color: rgba(0, 0, 0, .75);
  transition: all 0.5s;
}
</style>
