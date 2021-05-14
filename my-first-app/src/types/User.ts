export class User {
  constructor(name:string) {
    this.userName = name;
    
  }

  userName!:string;
  // isLogged() {
  //   return this.logged;
  // }

  // isAdmin() {
  //   return this.roles.includes('admin');
  // }

  // setAsAdmin() {
  //   const index = this.roles.indexOf('admin');
  //   if (index === -1) {
  //     this.roles.push('admin');
  //   }
  // }

  // setAsUser() {
  //   const index = this.roles.indexOf('admin');
  //   if (index > -1) {
  //     this.roles.splice(index, 1);
  //   }
  // }

  copy(user:string) {
    Object.assign(this, user);
  }
}
export default User;
