<template>
    <div>
        <h2>组件通信</h2>
        <!-- props, 自定义事件 -->
        <Child1 msg="some msg from parent" @some-event="onSomeEvent"></Child1>
        <!-- 事件总线 -->
        <Child2></Child2>
    </div>
</template>

<script>
    import Child1 from '@/components/communication/Child1.vue'
    import Child2 from '@/components/communication/Child2.vue'
    
    export default {
        name: "index",
        components: {
            Child1, Child2
        },
        methods: {
            onSomeEvent() {
                console.log('Communition:', msg);
            }
        },
    }
</script>

<style scoped>

</style>