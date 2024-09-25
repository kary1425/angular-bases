import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizadName():string{
    return this.name.toUpperCase();
  }
  public getHeroDescription():string{
    return `$(this.name) - ${this.age}`;
  }
  changeHero():void{
    this.name = 'spiderman'
  }
  changeAge():void{
    this.age = 25;
  }
  resetForm():void{
    this.name = 'ironma';
    this.age = 45;
  }
}
