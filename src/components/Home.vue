<template>
    <div id="home">
        <carousel class="ui fluid container"></carousel>
        <homeMasonry class="ui container"></homeMasonry>
    </div>
</template>

<script>
    import carousel from './Home/Carousel.vue';
    import homeMasonry from './Home/Home-Masonry.vue';

    export default {
        name: 'home',
        data () {
            return {
                msg: 'Chào mừng đến Meomeo Shop'
            }
        },
        components: {
            carousel,
            homeMasonry
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    #home {
        padding-bottom: 70px;
    }
</style>
