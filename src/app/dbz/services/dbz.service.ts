import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [{

        id: uuid(),
        name: 'Krillin',
        power: 1000
        
    },

    {
        id: uuid(),
        name: 'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 7800
    }
    ];

    onNewCharacter(character: Character): void {

        const NewCharacter: Character = {id: uuid(), ...character}
       
        this.characters.push(NewCharacter); // Lo incluye al final
    }

    // onDeleteCharacter(index: number): void {
    //     this.characters.splice(index,1);
    // }

    deleteCharacterById( id: string){
      
        this.characters = this.characters.filter(characters => characters.id !== id);
    }
    
}