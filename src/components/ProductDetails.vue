<template>
  <main v-if="product" class="product_state">
    <div class="product_details_container">
      <div class="carousel_section">
        <Carousel>
          <Slide v-for="(image, index) in product.images" :key="index">
            <img :src="image" alt="Product Image" class="carousel__item" />
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
      <div class="details_specs_section">
        <h1>{{ product.name }}</h1>
        <p><span>Product Code:</span> #{{ product.code }}</p>
        <p><span>Color:</span> {{ product.color }}</p>
        <p>{{ product.specs[0] }}</p>
        <p>{{ product.specs[1] }}</p>
        <p>{{ product.specs[2] }}</p>
        <p>{{ product.specs[3] }}</p>
        <p>{{ product.specs[4] }}</p>
        <p>{{ product.specs[5] }}</p>
        <p>{{ product.specs[6] }}</p>
        <p>{{ product.specs[7] }}</p>
        <p>{{ product.specs[8] }}</p>
        <div class="last_row_container">
          <p class="price">${{ product.price }}</p>
        <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </main>
  <div v-else>
    <p>Product not found</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
import { useCart } from '@/store/cart'

export default defineComponent({
  name: 'ProductDetails',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      const cart = useCart()
      cart.addProduct(this.product) 
    },
  },
});
</script>

<style scoped lang="scss">

.product_details_container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 30px;
}
.carousel_section {
  width: 1600px;
  height: auto;

  button {
    background: red;
  }
}

.details_specs_section {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  border-radius: 12px;

  h1 {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 9px;
  }
  .price {
    font-weight: bold;
    font-size: 40px;
  }

  p {
    font-size: 20px;
    margin: 4px 0;

    span {
      font-weight: 500;
      margin-right: 4px;
    }
  }
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  border-radius: 8px;
}
.last_row_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    border-radius: 3px;
    padding: 8px 17px;
    background: var(--color-black);
    color: var(--color-white);
    font-weight: 500;
    font-size: 20px;
    border: none;
  }
}

</style>
