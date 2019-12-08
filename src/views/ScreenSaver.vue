<template>
  <div id="ss">
    <img class="logo" src="/images/mclogo.png" alt="McDonalds" />
    <p class="intro-text">Order & Pay Here</p>
    <router-link class="call-to-action" to="/menu">Touch to start</router-link>
  </div>
</template>

<script>
export default {
  name: "ScreenSaver"
};
</script>

<style scoped>
#ss {
  display: flex;
  flex-direction: column;
  background: url("/images/mcintro.jpg") 50% 50% no-repeat #000;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.intro-text {
  color: #fff;
  font-size: 5em;
  margin: 20px;
  font-weight: bold;
  text-align: center;
}

.call-to-action {
  color: #fff;
  font-size: 1.2rem;
  display: block;
  padding: 20px;
  background: #ef3e42;
  margin: 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  transition: 0.5s all;
}

.call-to-action:hover {
  background: #ef673e;
}
</style>
