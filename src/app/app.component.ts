import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public ComponentCounterValue:number = 6;

  updateCounter(counterValue:number){
    this.ComponentCounterValue = counterValue;
  }
}
