<template>
  <div id="app">
    <div id="fast_output">
      No Output Yet
    </div>
    Ajax Output
    <div id="ajax_output">
      No Output Yet
    </div>
    <select id="ajax_input" onchange="messageServer()">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
div {
  color: green;
}
</style>
