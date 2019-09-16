import { Component } from '@angular/core';

import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-life-cycle',
    templateUrl: './life-cycle.component.html'
})

export class LifeCycleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

    data:number=100;
  
    constructor() {
        console.log('1.-Dato en el Constructor '+this.data);
    }

    ngOnInit() {
        console.log(`2.-ngOnInit  - el dato es ${this.data}`);
    }
    ngDoCheck() {
        console.log("3.-ngDoCheck - el dato es "+this.data)
    }
    ngAfterContentInit() {
        console.log("4.-ngAfterContentInit - el dato es "+this.data);
    }
    ngAfterContentChecked() {
        console.log("5.-ngAfterContentChecked - el dato es "+this.data);
    }
    ngAfterViewInit() {
        console.log("6.-ngAfterViewInit- el dato es "+this.data);
    }
    ngAfterViewChecked() {
        console.log("7.-ngAfterViewChecked- el dato es "+this.data);
    }
    ngOnDestroy() {
        console.log("8.-ngOnDestroy- el dato es "+this.data);
    }

    ngOnChanges() {
      console.log(`ngOnChanges - se modifico el dato es ${this.data}`);
    }
    
    agregarNumber():void{
      this.data+=100;
    }
    
    restarNumber():void{
      this.data -=10;
    }
}
