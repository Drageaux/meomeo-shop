<template>
    <div id="home">
        <h1 class="ui header">{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Chào mừng đến Ụm Bò Shop'
            }
        },
        mounted: function () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    #home {
        margin-top: 100px;
    }
</style>
