import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})

export class CounterPageComponent implements OnInit {

  private readonly relaseDate: Date = new Date('05/01/2017');

  private readonly milliToDays = 24 * 60 * 60 * 1000;
  private readonly milliToHours = 60 * 60 * 1000;
  private readonly milliToMinutes = 60 * 1000;
  private readonly milliToSeconds = 1000;

  public Days: number;
  public Hours: number;
  public Minutes: number;
  public Seconds: number;

  public modalActions1 = new EventEmitter<string | MaterializeAction>();

  constructor() { }


  ngOnInit() {
    Observable.timer(0, 1000).map(t => {
      let curr: Date = new Date();
      let ticksTillRelease = new Date(this.relaseDate.getTime() - curr.getTime()).getTime();

      this.Days = Math.floor(ticksTillRelease / this.milliToDays);
      ticksTillRelease -= this.milliToDays * this.Days;

      this.Hours = Math.floor(ticksTillRelease / this.milliToHours);
      ticksTillRelease -= this.milliToHours * this.Hours;

      this.Minutes = Math.floor(ticksTillRelease / this.milliToMinutes);
      ticksTillRelease -= this.milliToMinutes * this.Minutes;

      this.Seconds = Math.floor(ticksTillRelease / this.milliToSeconds);
      ticksTillRelease -= this.milliToSeconds * this.Seconds;
    }).subscribe();
  }

  openModal1() {
    this.modalActions1.emit({ action: "modal", params: ['open'] });
  }

  closeModal1() {
    this.modalActions1.emit({ action: "modal", params: ['close'] });
  }

}
