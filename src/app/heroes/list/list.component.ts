import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNmes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string ="";

  removeLastHero(): void{
    this.deleteHero = this.heroNmes.pop();
  }

}
