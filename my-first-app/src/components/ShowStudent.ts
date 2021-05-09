import { Component, Vue } from 'vue-property-decorator';
import WithRender from './ShowStudent.html';
import Student from 'src/types/Student'
require('./ShowStudent.css')
//import ShowStudent from './ShowStudent.css'

@WithRender
@Component({
    name:'ShowStudent',
    template: require('./ShowStudent.css')
})
export default class ShowStudent extends Vue {
    public students: Student[] = [
        { fullName: "fred", age:12 },
        { fullName: "mary", age:13 },
        ];
    public genderValue:string = "";
    public student:Student = { fullName: "", age:0};
    public searchName:string = "";
    public foundItem: boolean = false;
    public checkedValueDog: boolean = true;
    public checkedValueCat: boolean = false;

    getStudentViaName(): Student
    {
        this.foundItem = false;
        this.student.fullName = "";
        this.student.age = 0;
        this.students.forEach(el => 
        {
            //console.log(el.)
            if(el.fullName === this.searchName)
            {
                this.student.fullName = this.searchName + " Found";
                this.student.age = el.age;
                this.foundItem = true;
            }
        });
        return this.student;
    }

    checkState(){
        if(this.checkedValueDog == true)
        {
            this.checkedValueDog = false;
            this.checkedValueCat = true;
        }
        else
        {
            this.checkedValueDog = true;
            this.checkedValueCat = false;
        }
    }
    
}
