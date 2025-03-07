import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-water-main',
  templateUrl: './water-main.component.html',
  styleUrls: ['./water-main.component.scss'],
  imports: [IonContent]
})
export class WaterMainComponent  implements OnInit {
  router = inject(Router);

  goal = signal(3000);
  drinkingWater = signal(0);
  cupCapacity = signal(300);
  percentage = computed(() => Math.floor(this.drinkingWater() / this.goal() * 100))
  constructor() { 
  }

  drinkWater() {

    let newAmount = this.drinkingWater() + this.cupCapacity()
    let waterInterval = setInterval(() => {
      this.drinkingWater.update(v => {
        
        if (this.drinkingWater() == newAmount) {
          clearInterval(waterInterval);
          return newAmount; 
        }
        
        return v+2;
      });
    }, 1);
   
  }
  ngOnInit() {}

}
