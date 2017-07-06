<template>
    <div class="grid" id="masonry">
        <div class="sizer"></div>
        <div class="item" v-for="(item, index) in blocks">
            <!-- block item markup -->
            <img :src="item.src">
        </div>
    </div>

</template>

<script>
    var Masonry = require('masonry-layout');
    var imagesLoaded = require('imagesloaded');
    imagesLoaded.makeJQueryPlugin($);

    export default {
        mounted () {
            let msnry = new Masonry('#masonry', {
                transitionDuration: '0.3s',
                itemSelector: '.item',
                columnWidth: '.sizer',
                percentPosition: true
            });

            $('#masonry').imagesLoaded().progress(function () {
                msnry.layout();
            });
        },
        data () {
            return {
                blocks: [
                    {src: 'http://placehold.it/240x120&text=240x120'},
                    {src: 'http://placehold.it/220x420&text=220x420'},
                    {src: 'http://placehold.it/520x520&text=520x520'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a1287a67c3268a5e0ce00/9bf36603f0f82f8acab5aa51b28891e7/18700361_631142830407959_8529166212666831486_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'}
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    #masonry {
        .sizer, .item {
            width: 33%;
        }
        img {
            width: 100%;
            display: block;
        }
    }

    @media only screen and (max-width: 768px) {
        #masonry {
            .sizer, .item {
                width: 50%;
            }
        }
    }
</style>
