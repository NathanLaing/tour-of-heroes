import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroeservice } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroeservice: heroeservice, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroeservice.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

}
