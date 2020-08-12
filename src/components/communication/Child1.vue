<template>
    <div @click="$emit('some-event', 'msg from child1')">
        <h3>child1</h3>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "Child1",
        data() {
            return {

            }
        },
        props: {
            msg: {
                type: String,
                default: ''
            },
        },
        mounted () {
            // 用 bus 监听事件。
            /*this.$bus.$on('event-from-child2', msg => {
              console.log('Child1:', msg);
            });*/
            this.$parent.$on('event-from-child2', msg => {
              console.log('Child1:', msg);
            });
        },
        methods: {
            eat() {
                console.log('这就回家！');
            }
        },
    }
</script>

<style scoped>

</style>