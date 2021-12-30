// import { Component, OnInit } from '@angular/core';
import { Component, OnInit,Input } from '@angular/core';
//import { Component, Input } from '@angular/core';
//import { Forecast } from './forecast'; 
//import { forecast } from '../../core/interfaces/forecast'; 


//@Input() forecast;

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  //@Input() forecast:Array[]=[];
  //@Input() forecast: any[];
  ///@Input() forecast: Array<any> = [];
  @Input() forecast:any;

  constructor() { }

  ngOnInit(): void {
    //@Input() forecast;
  }
}
