<template>
  <div>
  {{greet}} {{name}}
  </div>
  <div v-html="showBold"></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name : 'Khairy',
      greet : 'Hello',
      showBold : '<b>For Testing</b>'
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
