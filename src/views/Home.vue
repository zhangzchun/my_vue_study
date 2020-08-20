<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <img alt="Vue logo" src="@/assets/logo.png">
      <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <!--<communication></communication>-->
      <!--<slot-example></slot-example>-->
      <form-example></form-example>
      <p @click="$store.commit('clean')">count:{{$store.state.count}}</p>
      <p @click="$store.dispatch('add')">async count:{{$store.state.count}}</p>
      <p>double count:{{$store.getters.doubleCount}}</p>
  </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld.vue'
    // import communication from '@/components/communication';
    // import SlotExample from '@/components/slots';
    import FormExample from '@/components/form'

    export default {
        name: 'App',
        components: {
            // HelloWorld,
            // communication,
            // SlotExample,
            FormExample
        }
    }
</script>

<!--<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>-->
