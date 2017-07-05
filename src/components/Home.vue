<template>
    <div id="home">
        <carousel class="ui fluid container"></carousel>
        <msnry class="ui container"></msnry>
    </div>
</template>

<script>
    import carousel from './Home/Carousel.vue';
    import msnry from './mini-components/Masonry.vue';

    export default {
        name: 'home',
        data () {
            return {
                msg: 'Chào mừng đến Meomeo Shop'
            }
        },
        components: {
            carousel,
            msnry
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    #home {
        padding-bottom: 70px;
    }
</style>
