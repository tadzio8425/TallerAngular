import { Component, OnInit } from '@angular/core';
import {Serie} from './Serie'
import {SeriesService} from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private seriesService: SeriesService) { }

  getSeries(){
   this.seriesService.getSeries().subscribe(
    series => {this.series = series;});
  }

  getSeasonAverage = () : number => {

    let totSeasons:number = 0;
    let numSeries:number = this.series.length;

    this.series.forEach(serie => {
        totSeasons += serie.seasons;
    });

    return totSeasons/numSeries;}

  ngOnInit() {
    this.getSeries();
  }

}
