<template>
    <div class="footer_section">
        <div class="logo">
            <LogoMain/><AppleIcon/>
        </div>
        <div class="links">
            <RouterLink to="/">Store</RouterLink>
            <RouterLink to="/">iPhone</RouterLink>
            <RouterLink to="/">iPad</RouterLink>
            <RouterLink to="/">Mac</RouterLink>
            <RouterLink to="/">AirPods</RouterLink>
        </div>
        <div>
            <p>1 Destiny USA Drive</p>
            <p> Syracuse, NY 13204</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import LogoMain from '@/assets/logoMain.vue';
    import { RouterLink } from 'vue-router';
    import AppleIcon from '../assets/icons/AppleIcon.vue';
</script>
<style lang="scss">
    .footer_section {
        display: flex;
        margin-top: 60px;
        border-top: 3px solid var(--color-prim);
        flex-direction: row;
        padding: 30px 4%;
        align-items: flex-start;
        justify-content: space-between;
        
        svg {
           &:nth-child(1) {
            width: 150px;
            height: 35px;
           }
           &:nth-child(2) {
            width: 35px;
            height: 35px;
            margin-top: -5px;
            margin-left: 5px;
           }
        }
        
        .logo {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .links {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0 30px;

            a {
                font-size: 18px;
                position: relative;
                color: var(--color-black);
                font-weight: 500;
                transition: all 0.3s ease-out;

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
    }
</style>