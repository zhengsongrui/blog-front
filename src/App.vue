<script setup lang="ts">
import Layout from './components/Layout.vue';

</script>

<template>
  <Layout />
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
}


* {
  margin: 0;
  padding: 0;
}

#app{
  background-image: url('@/assets/images/bg/bg1.webp');
  background-size:  auto 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
