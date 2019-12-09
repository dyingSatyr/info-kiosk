<template>
  <div id="cart">
    <router-link to="/">Back to screensaver</router-link>
  </div>
</template>

<script>
import Clock from "./Clock";

export default {
  name: "Cart"
};
</script>

<style scoped>
#cart {
  background: #333;
  color: #fff;
  height: 5vh;
}
</style>
