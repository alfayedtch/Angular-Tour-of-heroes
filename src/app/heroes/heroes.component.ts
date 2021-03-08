import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';
import { HeroService} from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedhero!: Hero;

  heroes:Hero[] = [];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedhero = hero;
  }
  getHeroes():void{
    this.heroes = this.heroService.getHeroes();
  }

}
