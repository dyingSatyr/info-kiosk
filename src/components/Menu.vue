<template>
  <div id="menu">
    <!-- <div class="articles-container"> -->
    <transition-group name="fade" tag="div">
      <article v-for="menuItem in fullMenu[selectedCategory - 1]" :key="menuItem.name">
        <h1>{{ menuItem.name }}</h1>
        <img :src="'images/' + menuItem.image + '.jpg'" :alt="menuItem.name" />
        <div class="item-info">
          <p class="price">${{ menuItem.price }}</p>
          <button>Add</button>
        </div>
      </article>
    </transition-group>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      selectedMenu: 1
    };
  },
  props: {
    fullMenu: Array,
    selectedCategory: Number
  }
};
</script>

<style scoped>
#menu {
  min-height: 90vh;
}

#menu div {
  padding: 10px;
  display: flex;
  flex-direction: row;
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
  height: max-content;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out, transform 0.6s ease;
}

/** Delay newly active route till previous disappears to avoid "jumping" */
.fade-enter-active {
  transition-delay: 0.6s;
}

/** Animation start */
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/** Animation end */
.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: scale(1);
}
</style>
