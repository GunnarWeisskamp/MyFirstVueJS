
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './TestItemsCom.html';

@WithRender
@Component({
    name:'TestItemsCom'
})
export default class TestItemsCom extends Vue {
    public msg: string = 'Test Item View';
    public mouseEnterValue: string = "";
    //@Prop({required: false}) readonly age: number = 14;


    @Prop({ default: 'Input Property' })
    exampleProperty!: string

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