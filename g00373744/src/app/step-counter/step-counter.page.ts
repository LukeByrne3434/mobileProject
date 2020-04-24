import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

import{WeatherService} from '../Services/service.service';

@Component({
  selector: 'app-step-counter',
  templateUrl: './step-counter.page.html',
  styleUrls: ['./step-counter.page.scss'],
})
export class StepCounterPage implements OnInit {
  private outputs:any = [];
  constructor(public weather: WeatherService,private router:Router) { }
  
  
  
  ngOnInit() {

  this.weather.updateWeather();

}

  weatherCall(){
    
    console.log(this.weather.GetMovieData().subscribe(weather=>console.log(weather)));
      
  }

  goBack(){
    this.router.navigateByUrl('/home')
  }

  getData() {
    this.weather.getWeather()//getting the objects from the storage with parameter from
    .then(data => {
          this.outputs = [];
                this.outputs.push({
                    clouds  : data.current.weather[0].main,
                    description : data.current.weather.description,
                 
            });   
        });
  }   

}
