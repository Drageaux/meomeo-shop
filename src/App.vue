<template>
    <div id="app">
        <div id="header">
            <img src="./assets/img/brand.png">
        </div>
        <div id="main-nav" class="ui secondary pointing menu">
            <router-link to="/" class="item" active-class="active" exact>Trang Chủ</router-link>
            <router-link to="/docs" class="item" active-class="active">Docs</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    $color_main: #4593D5;

    #app {
        #header {
            background: $color_main;
            height: 135px;
            width: 100%;
            img {
                height: 100%;
                position: relative;
            }
        }
        #main-nav {
            margin-top: 0;
            justify-content: center;
        }
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
