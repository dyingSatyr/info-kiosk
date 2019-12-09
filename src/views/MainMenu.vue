<template>
  <div id="menu-container">
    <Header />
    <div id="main-content">
      <Categories
        :categories="categories"
        :selectedCategory="selectedCategory"
        @change-category="setSelectedCategory"
      />
      <Menu :fullMenu="fullMenu" :selectedCategory="selectedCategory" />
    </div>
    <Cart />
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Categories from "@/components/Categories";

import fullMenu from "@/data/menu";
import categories from "@/data/categories";
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
      fullMenu,
      categories,
      selectedCategory: 1
    };
  },
  methods: {
    setSelectedCategory(payload) {
      this.selectedCategory = payload;
      console.log("setting");
    }
  }
};
</script>

<style>
#main-content {
  display: grid;
  grid-template-columns: 250px auto;
}
</style>
