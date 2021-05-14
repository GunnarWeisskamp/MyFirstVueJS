<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TestItemsCom></TestItemsCom><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TestItemsCom from '@/components/TestItems/TestItemsCom.ts';

@Component({
  components: {
    TestItemsCom,
  },
})
export default class TestItems extends Vue {}
</script>
