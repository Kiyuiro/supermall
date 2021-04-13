<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :class="{active: isActive}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = true
      // /home -> item1(/profile) = true
      return this.$route.path.indexOf(this.path) !== -1
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  padding-top: 6px;
  font-size: 15px;
}

.tab-bar-item:hover {
  color: var(--color-tint)
}

.active {
  color: var(--color-tint)
}
</style>
