<template>
    <main class="product_state">
      <h1 class="route_store_title">Your Cart</h1>
      <div v-if="cartItems.length > 0">
        <div class="added_product_container">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <img :src="item.images[0]" alt="Product Image" class="cart-item__image" />
          <div class="cart-item__details">
            <h3 class="name">{{ item.name }}</h3>
            <p class="status_stock">Stock Status: <span>INSTOCK</span></p>
            <p class="price">Price: <span>${{ item.price }}</span></p>
            <button @click="removeFromCart(index)">Remove</button>
          </div>
      </div>
        </div>
        <div class="cart-total">
          <p>Total: ${{ getTotalPrice() }}</p>
          <button @click="checkout">Checkout</button>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty</p>
      </div>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useCart } from '@/store/cart' 
  
  export default defineComponent({
    name: 'Cart',
    setup() {
      const cart = useCart()
  
      const cartItems = cart.items
  
      const removeFromCart = (index: number) => {
        cart.removeProduct(index)
      }
  
      const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0)
      }
  
      const checkout = () => {
      }
  
      return {
        cartItems,
        removeFromCart,
        getTotalPrice,
        checkout,
      }
    },
  });
  </script>
  
  <style scoped lang="scss">
  
  .added_product_container {
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
  }
  .cart-item {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: row;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  
  .cart-item__image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .cart-item__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 22px;
      font-weight: 500;
      margin: 2px 0;
    }

    button {
    border-radius: 3px;
    padding: 8px 17px;
    background: var(--color-black);
    color: var(--color-white);
    font-weight: 500;
    font-size: 20px;
    border: none;
    }

    .status_stock {
      span {
        font-weight: bold;
        color: green;
      }
    }

    .name {
      font-size: 27px;
      font-weight: bold;
    }

    .price {
      font-weight: 500;
      font-size: 22px;

      span {
        font-weight: bold;
      }
    }
  }
  
  .cart-total {
    margin-top: 20px;
    text-align: right;
  }
  </style>
  