<template>
  <div class="home">
    <ParentCom></ParentCom><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ParentCom from '@/components/Parent/ParentCom.ts';

@Component({
  components: {
    ParentCom,
  },
})
export default class Logon extends Vue {}
</script>
