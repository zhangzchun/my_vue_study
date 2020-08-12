<template>
    <div>
        <!-- $listeners会被展开并监听 -->
        <h3 v-on="$listeners">child2</h3>
        <button @click="sendToChild1">给child1发送消息</button>
        <!-- props 未声明 -->
        <!--<p> {{ msg }}</p>-->
        <!-- $attr -->
        <p>{{$attrs.msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "Child2",
        data () {
            return {

            }
        },
        methods: {
            sendToChild1() {
                // 利用事件总线发送事件
                // this.$bus.$emit('event-from-child2', 'some msg from child2')
                this.$parent.$emit('event-from-child2', 'some msg from child2')
            }
        },
    }
</script>

<style scoped>

</style>