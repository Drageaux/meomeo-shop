<template>
    <div id="home">
        <slider :auto=false height="auto" animation="fade" :interval=6000 :indicators=false
                id="slider"
                class="ui fluid container">
            <slider-item v-for="(i, index) in list" :key="index">
                <img :src="i.src">
            </slider-item>
        </slider>
    </div>
</template>

<script>
    import {
        Slider,
        SliderItem
    } from 'vue-easy-slider'

    export default {
        name: 'home',
        data () {
            return {
                msg: 'Chào mừng đến Ụm Bò Shop',
                list: [
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a1287a67c3268a5e0ce00/9bf36603f0f82f8acab5aa51b28891e7/18700361_631142830407959_8529166212666831486_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'}
                ]
            }
        },
        mounted: function () {
        },
        components: {
            Slider,
            SliderItem
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    #home {
        #slider {
            .slider-item {
                .wrap {
                    width: 100%;
                    height: 100%;
                    min-height: 1px;
                    float: left;
                    display: block;
                    position: relative !important;
                    img {
                        /**
                        vertical-align: middle;
                        height: auto;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        object-fit: cover;
                        */
                        width: 100%;
                        max-height: 100%;
                        margin: 0;
                        padding: 0;
                        border: 0;
                        font-size: 100%;
                        font: inherit;
                        vertical-align: baseline;
                        display: block;
                    }
                }
                position: relative;
            }
            margin: 0 !important;
        }
        padding-bottom: 70px;
    }
</style>
