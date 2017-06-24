<template>
    <swiper :options="swiperOption" ref="mySwiper"
            id="carousel">
        <!-- slides -->
        <swiper-slide v-for="(i, index) in list" :key="index">
            <img :src="i.src">
        </swiper-slide>
        <!-- optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper';

    export default {
        data () {
            return {
                list: [
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a1287a67c3268a5e0ce00/9bf36603f0f82f8acab5aa51b28891e7/18700361_631142830407959_8529166212666831486_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'}
                ],
                swiperOption: {
                    // NotNextTick is a component's own property,
                    // and if notNextTick is set to true,
                    // the component will not instantiate the swiper through NextTick,
                    // which means you can get the swiper object the first time
                    // (if you need to use the get swiper object to do what Things,
                    // then this property must be true)
                    notNextTick: true,
                    // swiper configs
                    autoplay: 5000,
                    loop: true,
                    lazyLoadingInPrevNext: true,
                    // controls
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    // if you need use plugins in the swiper, you can config in here like this
                    debugger: true,
                    // swiper callbacks
                    onTransitionStart (swiper) {
                        console.log(swiper)
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    #carousel {
        .swiper-wrapper {
            .swiper-slide {
                // near-perfect responsive image sizing solution
                img {
                    max-height: 100%;
                    display: block;
                    vertical-align: middle;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    position: absolute;
                }
                background-color: #eee;
                overflow: hidden; // prevent overlaps
            }
            position: relative;
        }
        margin: 0 !important;
        height: 60vw;
    }
    @media all and (min-width: 1200px) {
        #carousel {
            height: 70vh;
            .swiper-slide {
                img {
                    height:100%;
                }
            }
        }
    }
</style>
