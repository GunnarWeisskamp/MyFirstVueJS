<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <HelloWorld></HelloWorld><br>
    <ShowStudent></ShowStudent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.ts';
import ShowStudent from '@/components/ShowStudent.ts';

@Component({
  components: {
    HelloWorld,
    ShowStudent,
  },
})
export default class Home extends Vue {}
</script>
