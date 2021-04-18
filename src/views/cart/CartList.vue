<template>
  <div v-if="data" class="cart-list">
    <cart-list-item v-for="(value, index) in data" :key="index" :product="value"/>
  </div>
</template>

<script>
import CartListItem from "@/views/cart/CartListItem";

export default {
  name: "CartList",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>

</style>
