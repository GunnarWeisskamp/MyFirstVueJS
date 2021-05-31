import { Component, Vue } from "vue-property-decorator";
import WithRender from './LogoutCom.html';

@WithRender
@Component({
    name:'LogoutCom',
    template: require('./LogoutCom.html')
})
export default class LogoutCom extends Vue {
  
  LogOut() 
  {
    this.$router.push({ name: 'Home', params: { userName: "logging out" } })
  }
}