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
    userNewName: string = "";
    isLoggeOn:boolean = false;
    mounted() {
        this.$root.$on('loggedOn',(userName: string) => {
            if(userName !== "logging out")
            {
                this.userNewName = userName;
                this.isLoggeOn = true;
            }
            else
            {
                this.userNewName = "";
                this.isLoggeOn = false;
            }   
        })
    }
}