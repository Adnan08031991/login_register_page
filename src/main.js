import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>