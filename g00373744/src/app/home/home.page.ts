import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { stringify } from 'querystring';
import{Storage} from '@ionic/storage'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userFirstName: string;
  userLastName: string;
  age: number;
  value: string;
  genderString: string;
  

  constructor(private router: Router, private storage: Storage) {}

  go(){
    this.router.navigate(["calc-page"]);
  }

  goToDb(){
    this.router.navigate(["step-counter"]);
  }

  goToProfile(){
    this.router.navigate(["profile"]);
  }

  saveDetails(){

    console.log(this.userFirstName);
    console.log(this.userLastName);
    this.storage.set("fname",this.userFirstName);
    this.storage.set("lname",this.userLastName);
    this.storage.set("age",this.age);
    
    this.storage.set("gender",this.value);
    console.log(this.value);

  }
}
