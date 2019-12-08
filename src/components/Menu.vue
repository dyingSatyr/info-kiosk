<template>
  <div id="menu">
    <article v-for="meal in meals" :key="meal.id">
      <h1>{{ meal.name }}</h1>
      <img :src="getImagePath(meal.image)" :alt="meal.name" />
      <div class="item-info">
        <p class="price">${{ meal.price }}</p>
        <button>Add</button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    meals: Array
  },
  methods: {
    getImagePath(filename) {
      return "images/" + filename + ".jpg";
    }
  }
};
</script>

<style scoped>
#menu {
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
}

.item-info {
  display: flex;
  justify-content: space-between;
}

article {
  background: #fff;
  padding: 20px;
  width: 250px;
  line-height: 1.3rem;
  box-shadow: 0 5px 5px #d1d1d1;
  margin: 10px;
  border-radius: 5px;
}

h1 {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 1px solid #f3f3f3;
}

button {
  border: 0;
  border-radius: 5px;
  background: #dd4762;
  font-weight: bold;
  color: #fff;
  padding: 15px 30px;
  font-size: 15px;
  cursor: pointer;
}
</style>
