import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Storage}from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url:string;
  constructor(private storage:Storage,private http: HttpClient) { }
  GetMovieData(): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=53.271989&lon=-9.046098&appid=ce7e582bf982c198295098ff5bf9e604');
  }

  updateWeather() { // on start of the app getting all the information for the currency and store it in the local storage


      this.url = 'https://api.openweathermap.org/data/2.5/onecall?lat=53.271989&lon=-9.046098&appid=ce7e582bf982c198295098ff5bf9e604';
      this.http.get(this.url)
        .subscribe((data) => { //getting the data from the website 
          this.storage.set('weather', data);//store the object in the storage
        }); 


  }

  getWeather() {
    return this.storage.get('weather');
  }
}

 