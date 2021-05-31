import { Component, Vue, Inject } from "vue-property-decorator";
import WithRender from './ChildCom.html';

@WithRender
@Component({
    name:'ChildCom',
    template: require('./ChildCom.css')

})
export default class ChildCom extends Vue {
    @Inject('key') private injectedValue!: string;
}