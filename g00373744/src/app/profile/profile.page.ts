import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import{Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router,private storage: Storage) { }

  fName:string;
  lName:string;
  age:number;
  height:number;
  weight:number;
  bmi:number;
  gender:string;

//retrieving data from the ionic storage in the other pages
  ngOnInit() {
    this.storage.get("fname").then(//calling storage method and retrieving the element fname
      (data)=>{
        this.fName = data;//setting the data at that location equal to fname of this page
        console.log(this.fName);//testing to see if it storage and retrieval worked correctly
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )
 
    this.storage.get("lname").then(
      (data)=>{
        this.lName = data;
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )

    this.storage.get("age").then(
      (data)=>{
        this.age = data;
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )

    this.storage.get("height").then(
      (data)=>{
        this.height = data;
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )

    this.storage.get("weight").then(
      (data)=>{
        this.weight = data;
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )

    this.storage.get("bmi").then(
      (data)=>{
        this.bmi = data;
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )

    this.storage.get("gender").then(
      (data)=>{
        this.gender = data;
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )
  }

  goBack(){
    this.router.navigateByUrl('/home')//button class to return to homepage
  }

  

}
