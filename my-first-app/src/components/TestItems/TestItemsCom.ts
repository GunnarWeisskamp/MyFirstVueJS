
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './TestItemsCom.html';

@WithRender
@Component({
    name:'TestItemsCom'
})
export default class TestItemsCom extends Vue {
    public msg: string = 'Test Item View';
    public mouseEnterValue: string = "";
    public errorHasHappened:string = "";
    @Prop({ 
         required:true, type:String, 
         default: 'This is the value from child', 
         validator:function(value)
         { 
            return myValidatorTest(value);
         }
        })
    componentValuePassedFromChild!: string

    mouseOverEvent(data:string){
        alert(data);
    }

    mouseClick($event: string){
        alert('You Clicked the mouse' + $event);
    }

    keyUpPageDown(){
        alert("Key Page Page Down")
    }

    mouseEnter(){
        alert(this.mouseEnterValue);
    }
    
    mounted() {   
    }
}

function myValidatorTest(value:string): boolean {
    if(value === "value from adult") 
    {
        return true;
    }
    else
    {
        return false;
    }
}
