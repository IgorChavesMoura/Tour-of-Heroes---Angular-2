import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Location } from '@angular/common';
@Component({
  moduleId: module.id,
  selector: 'add-hero',
  templateUrl: 'add-hero.component.html',
  styleUrls: ['heroes.component.css']
})


export class AddHeroComponent {
  constructor(private heroService: HeroService,private location: Location) {}

  selectedHero: Hero;
  heroes : Hero[];
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    }).then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
