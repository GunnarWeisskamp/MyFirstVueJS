import { Component, Vue } from 'vue-property-decorator';
import WithRender from './NavigationCom.html';
import LogonCom from '../Logon/LogonCom'

@WithRender
@Component({
    name:'NavigationCom',
    template: require('./NavigationCom.css'),
    components: { LogonCom }
})
export default class NavigationCom extends Vue {
    //mounted(){}
    beforeCreate(){
        alert("aaa")
    }
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
        }
       
    }
}