import { Component, Vue } from 'vue-property-decorator';
import WithRender from './ParentCom.html';
import Child from "./ChildCom";

@WithRender
@Component({
    name:'ParentCom',
    components: { Child }
})
export default class ParentCom extends Vue {
    suggestedUserNamesFromParent = ["AtomicKing", "MoonSideWalk", "RedSky"];
    userName: string = "sad";
    changeUserName(userName: string) 
    {
        let found: boolean = false;
        this.suggestedUserNamesFromParent.forEach(el => {
            if(el === userName)
            {
                found = true;
            }

        })
        if(found)
        {
            this.userName = "You cannot use this one"
        }
        else
        {
            this.userName = userName;
            Vue.prototype.$gunnarName = "";
            this.$router.push({ name: 'Home', params: { userName: userName } })
            //router.push({ name: 'user', params: { userId: '123' } })
        }
       
    }
}