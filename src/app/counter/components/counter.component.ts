
import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    template: `
        <h3> Counter: {{counter}}  </h3>
        <button (click) = "increaseBy(1)"> +1 </button>
        <button (click) = "resetCounter()">Reset </button>
        <button (click) = "increaseBy(-1)"> -1 </button>
    `
})


export class CounterComponent {
    
   public counter:number = 10;
   public title:string = 'Hola Mundo';

   increaseBy (value: number): void {
    this.counter+=value;
   }
   resetCounter(): void {
    this.counter = 10;
   }
}

  




