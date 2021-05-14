<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DisplayAllDoctors></DisplayAllDoctors><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DisplayAllDoctors from '@/components/DoctorsData/DisplayAllDoctors.ts';

@Component({
  components: {
    DisplayAllDoctors,
  },
})
export default class Doctors extends Vue {}
</script>
