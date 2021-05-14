import Doctor from '@/types/Doctor';
import http from '../utilitities/http-axios';

class DoctorsService {
  getAll() {
    return http.get("/Doctor/GetAllDoctors");
  }

  insert(data: Doctor) {
     return http.post("/Doctor/InsertDoctor", {id:data.id, fullName: data.fullName, age: 1, typeOfDoctor:''})
    //  .then(response => { 
    //   console.log(response)
    //   return response;
    // })
    // .catch(error => {
    //     console.log(error.response)
    // });

    // return new Promise(resolve => {
    //   http.post("/Doctor/InsertDoctor", {id:data.id, fullName: data.fullName, age: 1, typeOfDoctor:''})
    //     .then(({ data }) => {
    //       alert(data);
    //       //context.commit(SET_AUTH, data.user);
    //       resolve(data);
    //     })
    //     .catch(({ response }) => {
    //       alert('s');
    //       //context.commit(SET_ERROR, response.data.errors);
    //     });
    // });
  }
  // async insertTwo(data: string) {
  //   const article = { a: "Vue POST Request Example" };
  //   const request = await http.post("/Doctor/InsertDoctorTwo", article)
  //   alert(request)
  // }

  async insertTwo(data: Doctor){
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ a: "Vue POST Request Example" })
    // };
    // fetch("https://localhost:44371/api/Doctor/InsertDoctorTwo", requestOptions)
    //   .then(response => response.json())


      const headers = new Headers();
      headers.append(
        "Authorization",
        "api_key"
      );
      const request = new Request(
        "https://localhost:44371/api/Doctor/InsertDoctor",
        {
          method: "POST",
          headers,
          mode: "cors",
          body: JSON.stringify(data)
        }
      );
      const res = await fetch(request);
  }

//   get(id: string) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data: any) {
//     return http.post("/tutorials", data);
//   }

//   update(id: string, data: any) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id: string) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title: string) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new DoctorsService();