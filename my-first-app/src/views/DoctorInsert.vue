<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DoctorInsertCom></DoctorInsertCom><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DoctorInsertCom from '@/components/DoctorsData/DoctorInsertCom.ts';

@Component({
  components: {
    DoctorInsertCom,
  },
})
export default class DoctorInsert extends Vue {}
</script>
