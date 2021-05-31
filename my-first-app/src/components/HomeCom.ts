import { Component, Vue } from 'vue-property-decorator';
import WithRender from './HomeCom.html';
import Child from "../components/Parent/ChildCom";
import User from '@/types/User';

@WithRender
@Component({
    name:'HomeCom',
    components: { Child }
})
export default class HomeCom extends Vue {
  public msgTwo:string = "";
  public a!:string;
  public b:string = "";
  exampleProperty!: string
  public userName:string = "";
  mounted() {
      this.userName = (this.$route.params.userName.toString() !== "") ?this.$route.params.userName.toString() : "";
      if(this.userName !== "")
      {
        this.$root.$emit('loggedOn', this.userName)
      }
    }
}