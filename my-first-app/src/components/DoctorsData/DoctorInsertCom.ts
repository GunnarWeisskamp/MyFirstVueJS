import Doctor from '@/types/Doctor';
import { Component, Vue } from 'vue-property-decorator';
import WithRender from './DoctorInsertCom.html';
import DoctorsService from '../services/doctors-service';


@WithRender
@Component({
    name:'DoctorInsertCom',
    template: require('./DoctorInsertCom.css')
})
export default class DoctorInsertCom extends Vue {
  public  typeOfSurgery = [
    {Tid: 0, TName: "---Please Select--"},
    {Tid: 2, TName: "Brain Surgery"},
    {Tid: 3, TName: "Heart Surgery"},
  ]
    public msg: string = 'Insert new doctor';
    public genderValue:string = "";
    public typOfDoctorValue:number = 0;
    public doctor: Doctor = {id:1, age:0, fullName:"", gender:true, typeOfDoctor:""};
    public snackbar = true;
    mounted() {
        this.genderValue = "male";
        this.typOfDoctorValue = 0;
      }
    insertDoctor(){
        this.doctor.age =  parseInt(this.doctor.age.toString());
        if(this.genderValue == "male")
        {
            this.doctor.gender = true;
        }

        if(this.genderValue == "female")
        {
            this.doctor.gender = false;
        }
       DoctorsService.insert(this.doctor)
        .then(response => { 
          if(response.data === "Insert Done")
          {
            this.snackbar = true;
          }
      
    })
    .catch(error => {
        console.log(error.response)
    });;
        
    }
    onChange(){
       if(this.typOfDoctorValue === 1)
       {
        this.doctor.typeOfDoctor = "Brain Surgery";
       }

       if(this.typOfDoctorValue === 2)
       {
        this.doctor.typeOfDoctor = "Heart Surgery";
       }
    }
}