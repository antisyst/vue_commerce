<template>
<div class="carousel_item">
  <Carousel :autoplay="3000" :wrap-around="true" :transition="500">
    <Slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="carousel__image" />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'



export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      images: [
        { src: 'https://raw.githubusercontent.com/antisyst/nuxt_app/main/public/iphone_banner.png', alt: 'iPhone' },
        { src: 'https://raw.githubusercontent.com/antisyst/nuxt_app/main/public/iPad_banner.png', alt: 'iPad' },
        { src: 'https://raw.githubusercontent.com/antisyst/nuxt_app/main/public/mac_banner.png', alt: 'Mac' },
      ],
    }
  },
})
</script>
<style lang="scss">
  .carousel_item {
    margin-bottom: 60px;
  }
  .carousel {
    img {
      width: 100%;
    }
  }
</style>