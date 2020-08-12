<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!--<communication></communication>-->
         <slot-example></slot-example>
    </div>

</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import communication from '@/components/communication';
    import SlotExample from '@/components/slots';

    export default {
        name: 'App',
        components: {
            HelloWorld,
            communication,
            SlotExample
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
