<template>
    <div id="home">
        <carousel class="ui fluid container"></carousel>
    </div>
</template>

<script>
    import carousel from './Home/Carousel.vue'

    export default {
        name: 'home',
        data () {
            return {
                msg: 'Chào mừng đến Ụm Bò Shop'
            }
        },
        components: {
            carousel
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    #home {
        padding-bottom: 70px;
    }
</style>
