<template>
  <div id="app">
    <NavigationCom></NavigationCom>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationCom from '@/components/Navigation/NavigationCom.ts';

@Component({
  components: {
    NavigationCom,
  },
})
export default class App extends Vue {
  mounted(){
    //alert('nav');
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
}
</style>
