<template>
    <div class="grid masonry">
        <div class="sizer"></div>
        <div class="gutter-sizer"></div>
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
        props: ['blocks'],
        mounted () {
            let msnry = new Masonry('.masonry', {
                transitionDuration: '0.3s',
                columnWidth: '.sizer',
                gutter: '.gutter-sizer',
                itemSelector: '.item',
                percentPosition: true
            });

            $('.masonry').imagesLoaded().progress(function () {
                msnry.layout();
            });
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    .masonry {
        .sizer, .item {
            width: 32%;
        }
        .gutter-sizer {
            width: 2%;
        }
        img {
            width: 100%;
            display: block;
        }
    }

    @media only screen and (max-width: 768px) {
        .masonry {
            .sizer, .item {
                width: 49%;
            }

        }
    }
</style>
