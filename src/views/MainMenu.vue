<template>
  <div id="menu-container">
    <Header />
    <div id="main-content">
      <Categories :meals="meals" />
      <Menu :meals="meals" />
    </div>
    <Cart />
    <router-link to="/">Back to screensaver</router-link>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Categories from "@/components/Categories";

import data from "@/data/menu";
const { meals, beverages, sides } = data;

export default {
  name: "app",
  components: {
    Header,
    Menu,
    Cart,
    Categories
  },
  data: function() {
    return {
      idle: true,
      meals,
      beverages,
      sides
    };
  }
};
</script>

<style>
#main-content {
  display: grid;
  grid-template-columns: 250px auto;
}
</style>
