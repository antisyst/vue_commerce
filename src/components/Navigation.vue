<script setup lang="ts">
import logoMain from '@/assets/logoMain.vue';
import { RouterLink } from 'vue-router';
import bagIcon from '@/assets/bagIcon.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';


const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="navigation_base" :class="{ scrolled: isScrolled }">
    <nav class="navigation_main">
      <div class="logo">
        <RouterLink to="/"><logoMain /></RouterLink>
      </div>
      <div class="router_section">
        <RouterLink to="/iphone">iPhone</RouterLink>
        <RouterLink to="/ipad">iPad</RouterLink>
        <RouterLink to="/mac">Mac</RouterLink>
        <RouterLink to="/watch">Watches</RouterLink>
        <RouterLink to="/airpods">AirPods</RouterLink>
      </div>
      <div class="bag">
        <RouterLink to="/cart"><bagIcon/></RouterLink>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.scrolled {
  backdrop-filter: blur(16px);
  transition: all 0.3s ease-out;
  background: rgba(255,255,255, 0.7);
  padding: 6px 6%;
}
.navigation_base {
  position: fixed;
  padding: 6px 6%;
  top: 0px;
  transition: all 0.3s ease-out;
  width: 100%;
  z-index: 999;
}

.navigation_main {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;

  .router_section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0 36px;

    a {
        font-size: 18px;
        position: relative;
        font-weight: 500;
        transition: all 0.3s ease-out;
        color: var(--color-black);

        &::after {
            position: absolute;
            content: "";
            width: 0;
            height: 1.6px;
            background: var(--color-black);
            left: 0;
            bottom: 0;
            transition: all 0.3s ease-out;
        }

        &:hover {
            &::after {
                width: 100%;
            }
        }
        &:active {
            &::after {
                width: 0;
            }
        }
    }
  }

  .logo {
    svg {
        width: 140px;
    }
  }
  .bag {
    a {
    padding: 10px;
    transition: all 0.3s linear;
    svg {
        width: 38px;
        transition: all 0.2s ease-out;
    }
    }
   
  }
}
</style>
