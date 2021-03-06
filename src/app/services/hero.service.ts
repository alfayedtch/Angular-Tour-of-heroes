import { Injectable } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROES } from '../mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }


  getHeroes():Observable<Hero[]>{
    const lesheroes = of(HEROES);
    this.messageService.add('Heroservice:fetched heroes');
    return lesheroes;
  }
}
