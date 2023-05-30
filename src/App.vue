<template>
  <div v-html="htmlContent"></div>
</template>

<script>
import htmlFile from '!!raw-loader!./login.html';
import './style.css';

export default {
  data() {
    return {
      htmlContent: htmlFile,
    };
  },
};
</script>
