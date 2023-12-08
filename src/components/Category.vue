<template>
    <div class="category_container">
        <div class="item">
            <div class="content">
                <h2>Your iPhone, Your Way.</h2>
                <a href="/iphone">Discover iPhone</a>
            </div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_AV4?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009283359" alt="">
        </div>
        <div class="item">
            <div class="content">
              <h2>Discover iPad Magic</h2>
              <a href="/ipad">Discover iPad</a>
            </div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1667594391441" alt="">
        </div>
        <div class="item">
            <div class="content">
              <h2>Explore Limitless Possibilities</h2>
              <a href="/mac">Discover Mac</a>
            </div>
            <img src="https://irshad.az/cdn-cgi/image/width=540,height=550/storage/products/89803/asmrw43russss.png" alt="">
        </div>
        <div class="item">
            <div class="content">
              <h2>Smart Style, Smart Choices</h2>
              <a href="/watch">Discover Watches</a>
            </div>
            <img src="https://irshad.az/cdn-cgi/image/width=540,height=550/storage/products/88436/series-9-21.png" alt="">
        </div>
    </div>
</template>
<style lang="scss">
.category_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .item {
        width: 44%;
        display: flex;
        transition: all 0.2s ease-out;
        padding: 16px;
        height: 340px;
        justify-content: space-between;
        align-items: center;
        position: relative;
        background: var(--color-prim);
        border-radius: 20px;
        border: 2px solid transparent;

        &:hover {
            border: 2px solid var(--color-black);
        }

        .content {
            z-index: 4;
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
           
            h2 {
                font-size: 26px;
                margin-top: 20px;
                margin-bottom: 12px;
                background: var(--color-black);
                color: var(--color-white);
                padding: 1px 5px;
                font-weight: 500;
            }

            a {
                text-decoration: none;
                background: var(--color-black);
                padding: 10px 20px;
                font-size: 17px;
                font-weight: 500;
                transition: all 0.2s ease-out;
                color: var(--color-white);
                border: 1.6px solid var(--color-black);
                border-radius: 40px;

                &:hover {
                    filter: drop-shadow(0 0 0.3rem var(--color-black));
                }
            }
        }

        img {
            position: absolute;
            width: 400px;
            object-fit: contain;
            height: 220px;
            z-index: 1;
            bottom: 0;
            right: 20px;
        }
    }
}
</style>