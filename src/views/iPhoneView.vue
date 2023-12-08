<template>
    <main class="action_state">
      <h1 class="route_store_title">iPhone Products</h1>
      <div class="product_container">
      <a v-for="product in iPhoneProducts" :key="product.url" class="product_item" :href="`/product/${product.url}`">
        <div class="image_container">
            <img :src="product.images[0]" alt="Product Image" @error="handleImageError(product)"/>
            <p v-if="isLoading(product.url)">Loading...</p>
        </div>
       <div class="details">
           <div class="first_child">
                <h2>{{ product.name }}</h2>
                <p class="code">#{{ product.code }}</p>
           </div>
           <div class="second_child">
             <p class="price">${{ product.price }}</p>
             <a href="">Details</a>
           </div>
       </div>
    </a>
     </div>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import products from '../data/product.json';
  
  export default defineComponent({
  data() {
    return {
      iPhoneProducts: products.filter((product: any) => product.category === 'iPhone'),
      loadingProducts: [] as string[]
    };
  },
  methods: {
    handleImageError(product: any) {
      if (product.url) {
        this.loadingProducts.push(product.url);
      }
    },
    isLoading(url: string | undefined) {
      return url ? this.loadingProducts.includes(url) : false;
    }
  }
});
  </script>
  <style lang="scss">
    .product_container { 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;

        .product_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            width: 290px;
            height: 414px;
            overflow: hidden;
            transition: all 0.2s ease-out;
            color: var(--color-black);
            border-radius: 12px;
            position: relative;

            &:hover {
                    filter: brightness(1.1);
            }

            .image_container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .details {
                padding: 15px 17px;
                width: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .first_child {
                    height: 105px;
                }

                .second_child {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;

                    a {
                        text-decoration: none;
                        border-radius: 3px;
                        padding: 6px 13px;
                        background: var(--color-black);
                        color: var(--color-white);
                        font-weight: 500;
                        font-size: 18px;
                    }
                }

                h2 {
                    font-weight: 600;
                    font-size: 24px;
                }
                .code {
                    font-size: 21px;
                    margin-top: 3px;
                    font-weight: 500;
                }
                .price {
                    font-weight: bold;
                    padding: 3px 10px;
                    background: var(--color-prim);
                    width: fit-content;
                    text-align: left;
                    font-size: 28px;
                }
            }

            img {
                width: 420px;
                height: auto;
                transition: all 0.2s ease-out;
                object-fit: cover;
            }
        }
    }
  </style>
  