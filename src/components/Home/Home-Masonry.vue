<template>
    <div id="home-masonry">
        <masonry :blocks="blocks"></masonry>
    </div>
</template>

<script>
    import masonry from '../mini-components/Masonry.vue';

    export default {
        data () {
            return {
                blocks: [
                    {src: 'http://placehold.it/240x120&text=240x120'},
                    {src: 'http://placehold.it/420x220&text=420x220'},
                    {src: 'http://placehold.it/520x520&text=520x520'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'},
                    {src: 'http://placehold.it/240x120&text=240x120'},
                    {src: 'http://placehold.it/420x220&text=420x220'},
                    {src: 'http://placehold.it/520x520&text=520x520'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a1287a67c3268a5e0ce00/9bf36603f0f82f8acab5aa51b28891e7/18700361_631142830407959_8529166212666831486_o.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12a75caf76e066433f3b/6f43ff01885f81c04e3fd21834d611ef/19224939_641151472740428_1997971478293195668_n.jpg'},
                    {src: 'https://trello-attachments.s3.amazonaws.com/5949dfad6fb0a49b1c8db34a/594a12be50db958b6b663c7a/24856ac0ad12c7f38c1f7baf8b76fa9f/19221669_641627969359445_7550867045889901768_o.jpg'},
                    {src: 'http://placehold.it/240x120&text=240x120'},
                    {src: 'http://placehold.it/420x220&text=420x220'},
                    {src: 'http://placehold.it/520x520&text=520x520'}
                ]
            }
        },
        components: {
            masonry
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
