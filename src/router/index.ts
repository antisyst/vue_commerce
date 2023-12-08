import { createRouter, createWebHistory  } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductDetails from '../components/ProductDetails.vue';
import productData from '../data/product.json';
import iPadView from '@/views/iPadView.vue';
import MacView from '@/views/MacView.vue';
import AirPodsView from '@/views/AirPodsView.vue';
import iPhoneView from '@/views/iPhoneView.vue';
import WatchView from '@/views/WatchView.vue';
import CartView from '@/views/CartView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/iphone',
    name: 'iPhone',
    component: iPhoneView,
  },
  {
    path: '/ipad',
    name: 'iPad',
    component: iPadView,
  },
  {
    path: '/mac',
    name: 'Mac',
    component: MacView,
  },
  {
    path: '/airpods',
    name: 'AirPods',
    component: AirPodsView,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
  },
  {
    path: '/watch',
    name: 'Watch',
    component: WatchView,
  },
  {
    path: '/product/:slug',
    name: 'ProductDetails',
    component: ProductDetails,
    props: (route) => ({
      product: route.params.slug ? getProductBySlug(route.params.slug) : null,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

function getProductBySlug(slug: string | string[] | undefined) {
  const actualSlug = Array.isArray(slug) ? slug[0] : slug;
  return productData.find((product) => product.url === actualSlug) || null;
}
