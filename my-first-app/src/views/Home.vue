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
  //let a = this.$route.query.page;
  // public a:string = "sss";
  // public b:string = "gg";
  //  mounted() {
  //     this.a = this.$route.fullPath;//query.page;
  //     this.b = "dd";
  //     }
}
</script>
