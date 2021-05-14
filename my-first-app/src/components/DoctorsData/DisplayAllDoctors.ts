import Doctor from '@/types/Doctor';
import { Component, Vue } from 'vue-property-decorator';
import WithRender from './DisplayAllDoctors.html';
import DoctorsService from '../services/doctors-service';

@WithRender
@Component({
    name:'DisplayAllDoctors',
    template: require('./DisplayAllDoctors.css')
})
export default class DisplayAllDoctors extends Vue {
  public msg: string = 'Dispaly All Doctors Component';
  public doctors: Doctor[] = [];

  retrieveTutorials() {
      DoctorsService.getAll()
        .then((response) => {
          this.doctors = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    mounted() {
      this.retrieveTutorials();
    }
}