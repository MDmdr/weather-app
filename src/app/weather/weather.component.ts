import { Component, OnInit } from '@angular/core';
import { City } from '../core/interfaces/city';
import { CityService } from '../core/services/city.service';
//import {}
//import { Forecast } from './forecast'; 
//import { Forecast } from '.././../core/interfaces/forecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

	// @Input() forecast = [];

	cities: Array<City> = []; // create empty array of cities
	//chosenCity: number = -3;//String; // create variable for saving current (chosen) city
	chosenCity: number = 0;

	constructor(private cityService: CityService) { } // inject CityService to private variable
	ngOnInit(): void {
 		this.cities = this.cityService.getCities(); // on component initialize get data from service to local variable
	}

	/* onChooseCity(index: number): void { // create method, which will handle choose of the city
	 //this.chosenCity = index;
	 alert("ok");
	}  */

	onChooseCity(index: number): void {
	 //index=5;
	 console.log(index); // logging the index of the city in the browser console
	 this.chosenCity = index;
	}

}

