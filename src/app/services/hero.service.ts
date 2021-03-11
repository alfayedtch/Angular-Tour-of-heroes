import { Injectable } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROES } from '../mock-heroes';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  getHeroes():Observable<Hero[]>{
    const lesheroes = of(HEROES);
    return lesheroes;
  }
}
