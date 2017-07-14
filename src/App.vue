<template>
    <div id="app">
        <div id="header">
            <router-link to="/">
                <img src="./assets/img/brand.png">
            </router-link>
        </div>
        <div id="main-nav" class="ui secondary pointing menu">
            <router-link to="/" class="item" active-class="active" exact>Trang Chủ</router-link>
            <router-link to="/docs" class="item" active-class="active">Docs</router-link>
            <router-link to="/uploader" class="item" active-class="active">Uploader</router-link>
        </div>
        <router-view></router-view>
        <div id="footer">
            <h1>Footer Content</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    //noinspection CssUnknownTarget
    @import "~styles/settings";

    #app {
        #header {
            background: $color_blue_main;
            height: 135px;
            width: 100%;
            img {
                height: 100%;
                position: relative;
            }
        }
        #main-nav {
            margin-top: 0;
            margin-bottom: 5px;
            justify-content: center;
        }
        #footer {
            background: $color_black;
            color: rgba(255, 255, 255, 0.9);
            height: 50px;
            width: 100%;
            bottom: 0;
            position: absolute;
        }
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        position: relative;
    }
</style>
