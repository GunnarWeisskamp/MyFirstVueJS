import { Component, Vue, Prop } from "vue-property-decorator";
import WithRender from './LogonCom.html';

@WithRender
@Component({
    name:'LogonCom',
    template: require('./LogonCom.html')
})
export default class LogonCom extends Vue {
    @Prop({ default: [] })
    suggestedUserNamesFromChild!: string[];
    userName: string = "";
    handleSubmit() 
    {
      this.$emit("changeUserName", this.userName);
    }
}