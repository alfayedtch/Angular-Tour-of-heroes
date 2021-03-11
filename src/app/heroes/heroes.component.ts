import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';
import { HeroService} from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedhero!: Hero;

  heroes:Hero[] = [];

  constructor(private heroService:HeroService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedhero = hero;
    this.messageService.add(`HeroesComponent: Id du héro Selectionné =${hero.id}`);
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes);
  }

}
