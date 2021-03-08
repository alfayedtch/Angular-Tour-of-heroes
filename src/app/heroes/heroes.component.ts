import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedhero!: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero:Hero){
    this.selectedhero = hero;
  }

}
