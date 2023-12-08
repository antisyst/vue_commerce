<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navigation/>
  <RouterView />
  <Footer/>
</template>

<style scoped>

</style>
