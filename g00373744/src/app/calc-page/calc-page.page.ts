import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';//importing router and storage to navigate and store 
import{Router} from '@angular/router';

@Component({
  selector: 'app-calc-page',
  templateUrl: './calc-page.page.html',
  styleUrls: ['./calc-page.page.scss'],
})
export class CalcPagePage implements OnInit {

  userHeight: number;//declaring variables
  userWeight: number;
  userBmi: number;
  firstname: string;
  lastname: string;

  outputString: string;



  constructor(private storage:Storage,private router:Router) { }//creating instances of routing and storage

  ngOnInit() {
    this.storage.get("fname").then(//"getting" information from the location in storage 
      (data)=>{
        this.firstname = data;//taking the data at the aforementioned location and setting firstname variable of this class to that value
        console.log(this.firstname);
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )
 
    this.storage.get("lname").then(
      (data)=>{
        this.lastname = data;
        
      }
    ).catch(
    (error)=>{
      console.log(error);
    }
    )
  }

  goToProfile(){
    this.router.navigateByUrl('/profile')//navigation
  }

  toDatabase(){
    this.router.navigateByUrl('/home');
  }

  calculateBMI() {

    this.storage.set("height",this.userHeight);//storing the values taken in on this page
    this.storage.set("weight",this.userWeight);
    this.storage.set("bmi",this.userBmi);

    

    if (this.userWeight > 0 && this.userHeight > 0) {//check to see if values were entered

      let bmiCalculatio = this.userWeight / (this.userHeight / 100 * this.userHeight / 100);//formula for bmi

      this.userBmi = parseFloat(bmiCalculatio.toFixed(2));

      this.setBMIMessage();//calling set bmi message explained below

      this.storage.set("bmi",this.userBmi);//saving bmi for later use

    }

  }

  // setBMIMessage will set the text message based on the value of BMI

  private setBMIMessage() {

    if (this.userBmi < 18.5) {// if conditions to indicate your health level indicated by bmi

      this.outputString = "Underweight"

    }

    if (this.userBmi > 18.5 && this.userBmi < 25) {

      this.outputString = "Normal"

    }

    if (this.userBmi > 25 && this.userBmi < 30) {

      this.outputString = "Overweight"

    }

    if (this.userBmi > 30) {

      this.outputString = "Obese"

    }

  }

}


