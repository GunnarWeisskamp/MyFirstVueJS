<template>
<div>
  <HomeCom></HomeCom>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeCom from '@/components/HomeCom.ts';

@Component({
  components: {
HomeCom
  },
})
export default class Home extends Vue {
}
</script>
