<template>
    <div>
      <Carousel :value="products" :numVisible="6" :numScroll="1" circular :autoplayInterval="3000" :responsiveOptions="responsiveOptions">
        <template #item="{ data }" class="autoplay_container">
          <div class="product-item">
            <img :src="data.images[0]" :alt="data.name" />
            <div class="product-details">
              <h4>{{ data.name }}</h4>
              <p>Price: ${{ data.price }}</p>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import Carousel from "primevue/carousel";
  const products = ref([]);

  interface Product {
  name: string;
  category: string;
  price: number;
  images: string[];
}

const responsiveOptions = ref([
  {
    breakpoint: "600px",
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: "480px",
    numVisible: 1,
    numScroll: 1
  }
]);
  
onMounted(async () => {
  const response = await axios.get("https://raw.githubusercontent.com/antisyst/nuxt_app/main/public/product.json");
  products.value = response.data.filter((product: Product) => product.category === "iPhone" || product.category === "iPad");
});
  </script>
  <style lang="scss">
  .autoplay_container {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
    .product-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 8px;
        width: 250px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        height: 330px;
        justify-content: flex-start;

        img {
            width: 100%;
            height: 160px;
            object-fit: cover;
        }
    }
  </style>