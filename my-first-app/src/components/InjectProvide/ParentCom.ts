import { Component, Vue, Provide } from "vue-property-decorator";
import WithRender from './ParentCom.html';
import ChildCom from '../InjectProvide/ChildCom';

@WithRender
@Component({
    name:'ParentCom',
    template: require('./ParentCom.css'),
    components: {ChildCom}
})
export default class ParentCom extends Vue {
    @Provide('key') private providedValue: string = 'The value from parent';
}