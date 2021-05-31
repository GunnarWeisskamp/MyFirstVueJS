<template>
  <div class="home">
    <LogoutCom></LogoutCom><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogoutCom from '@/components/Logout/LogoutCom.ts';

@Component({
  components: {
    LogoutCom,
  },
})
export default class Logout extends Vue {}
</script>
