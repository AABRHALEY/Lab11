import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  outputs: ['counterChange'],
  template: `<p>
             <button (click) = "dec()"> - </button> 
             {{counterValue}}
             <button (click) = "inc()"> + </button> 
             </p>`,

  styles: []
})
export class CounterComponent implements OnInit {
   _counter:number;
   counterValue:number;
   counterChange:EventEmitter<number>;

constructor() {
  this.counterChange=new EventEmitter();
  this.counterValue = 0;
  
 }

dec(){
      console.log('counter');
  this.counterValue--;
  this.counterChange.emit(this.counterValue);
}

inc(){
      console.log('counter');
  this.counterValue ++;
  this.counterChange.emit(this.counterValue);
}

@Input()
  set counter(counter:number){
      console.log('counter ' + counter);
  this._counter = counter;
  this.counterValue = counter || 0;
  //this.counterChange.emit(this.counterValue);
}

  ngOnInit() {
  }

}
