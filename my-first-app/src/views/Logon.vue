<template>
  <div class="home">
    <LogonCom></LogonCom><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogonCom from '@/components/Logon/LogonCom.ts';

@Component({
  components: {
    LogonCom,
  },
})
export default class Logon extends Vue {}
</script>
