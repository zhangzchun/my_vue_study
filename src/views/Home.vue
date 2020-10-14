<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <img alt="Vue logo" src="@/assets/logo.png">
      <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <!--<communication></communication>-->
      <!--<slot-example></slot-example>-->
      <form-example></form-example>
      <!--<p @click="$store.commit('clean')">count:{{$store.state.count}}</p>-->
      <p @click="$store.commit('add')">count:{{$store.state.count}}</p>
      <p @click="$store.dispatch('clean')">async count:{{$store.state.count}}</p>
      <!--<p>double count:{{$store.getters.doubleCount}}</p>-->
  </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld.vue'
    // import communication from '@/components/communication';
    // import SlotExample from '@/components/slots';
    import FormExample from '@/components/form'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // communication,
    // SlotExample,
    FormExample
  },
  // created () {
  //   this.$store.state = {};
  // },
}
</script>
