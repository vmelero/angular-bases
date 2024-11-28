import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

    constructor(private dbzService: DbzService){
        
    }

    get characters(): Character[]{
        return [...this.dbzService.characters]; // El poner los tres puntos indica que es una copia del listado. En caso de no ponerlo sería hacer una referencia al mismo objeto
        // y podría alterarse en algún momento
    }

    deleteCharacterById(id: string): void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.onNewCharacter(character);

    }
   
   
}