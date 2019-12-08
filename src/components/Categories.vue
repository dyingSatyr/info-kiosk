<template>
  <div id="categories">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {
    meals: Array
  }
};
</script>

<style scoped>
#categories {
  background: #fff;
  padding: 20px;
}
</style>
