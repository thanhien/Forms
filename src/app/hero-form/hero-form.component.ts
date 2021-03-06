import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];;

  model = new Hero();

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted =true;
  }
  get diagnostic(){
    return JSON.stringify(this.model);
  }
  newHero(){
    this.model = new Hero();
  }

}
