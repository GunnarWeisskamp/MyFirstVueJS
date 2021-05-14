import { Component, Vue, Prop } from "vue-property-decorator";
import WithRender from './ChildCom.html';

@WithRender
@Component({})
export default class Child extends Vue {

  @Prop({ default: [] })
  suggestedUserNamesFromChild!: string[];
  userName: string = "";
  handleSubmit() 
  {
    this.$emit("changeUserName", this.userName);
  }
}