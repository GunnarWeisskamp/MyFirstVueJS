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
//public a:string = "";
    //$auth.isAuthenticated
      //let a = this.$route.query.page;
   
  public a!:string;
  //public doctors: Doctor[] = [];
  public b:string = "";
  exampleProperty!: string
  
    //$user: any;
   mounted() {
      //this.a = this.$route.fullPath;//query.page;
      
      this.a = this.$route.params.userName.toString()
      Vue.prototype.$gunnarName = this.a;
      this.b = Vue.prototype.$gunnarName;
      //$user.userName
     //this.$us
            //if()
      //window.hostname = 'foo';
      }
   
}