<template>
  <div id="app">
    <router-view />
    <MyComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MyComponent from './MyComponent.jsx';

export default defineComponent({
  name: 'App',
  components: {
    MyComponent
  }
});
</script>

<style lang="css">
@import './style.css';
</style>
