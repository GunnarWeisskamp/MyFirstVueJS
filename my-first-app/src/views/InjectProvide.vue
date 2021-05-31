<template>
<div>
  <ParentCom></ParentCom><br>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ParentCom from '@/components/InjectProvide/ParentCom.ts';

@Component({
  components: {
    ParentCom
  },
})
export default class Home extends Vue {
}
</script>
