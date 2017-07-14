<template>
    <div id="uploader">
        <div class="ui container">
            <dropzone id="dropzone"
                      url="https://httpbin.org/post"
                      acceptedFileTypes="image/*"
                      v-on:vdropzone-success="showSuccess">
                <!-- Optional parameters if any! -->
                <input type="hidden" name="token" value="xxx">
            </dropzone>
        </div>
    </div>
</template>

<script>
    import Dropzone from 'vue2-dropzone';

    export default {
        name: 'uploader',
        data () {
            return {}
        },
        components: {
            Dropzone
        },
        methods: {
            'showSuccess': function (file) {
                console.log('File successfully uploaded')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
