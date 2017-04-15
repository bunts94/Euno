import { Component, AfterViewInit } from '@angular/core';
import { CounterPageComponent } from './counter-page/counter-page.component';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    particlesJS.load('particles-js', './src/app/counter-page/particlesjs-config.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
