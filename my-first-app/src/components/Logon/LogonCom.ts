import { Component, Vue, Prop } from "vue-property-decorator";
import WithRender from './LogonCom.html';

@WithRender
@Component({
    name:'LogonCom',
    template: require('./LogonCom.html')
})
export default class LogonCom extends Vue {
  testUserNames = ["Bob", "Fred", "Jill"];
  userName: string = "";
  userNameRequired: boolean = false;

  LogOn(e: any) 
  {
      if(this.userName === "")
      {
        this.userNameRequired = true;
        e.preventDefault();
        return;
      }
      this.userNameRequired = false;
      let found: boolean = false;
      this.testUserNames.forEach(el => {
          if(el === this.userName)
          {
              found = true;
          }
      })
      if(found)
      {
        this.$router.push({ name: 'Home', params: { userName: this.userName } })
      }
      else
      { 
        this.userName = "You cannot use this one"
      }
    }
}