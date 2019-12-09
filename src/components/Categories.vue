<template>
  <div id="categories">
    <ul v-for="category in categories" :key="category.id">
      <li
        @click="selectCategory(category)"
        v-bind:class="[checkActiveCategory(category.id) ? 'selected' : '']"
      >
        <img :src="'images\/' + category.image + '.jpg'" :alt="category.name" />
        <br />
        {{category.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {
    categories: Array,
    selectedCategory: Number
  },
  data: function() {
    return {
      activeCategory: this.selectedCategory
    };
  },
  methods: {
    selectCategory: function(category) {
      //Check if already selected
      if (this.activeCategory !== category.id) {
        //Set new active category
        this.activeCategory = category.id;
        //Emit event that category changed
        this.$emit("change-category", category.id);
      }
    },
    checkActiveCategory: function(id) {
      if (this.activeCategory === id) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
#categories {
  background: #dd4762;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul {
  text-align: center;
}

li {
  padding: 20px;
  color: #fff;
  cursor: pointer;
  transition: all 1s;
  border-radius: 5px;
}

li.selected {
  background: #b9334b;
}

img {
  border-radius: 50%;
  margin-bottom: 5px;
}
</style>
