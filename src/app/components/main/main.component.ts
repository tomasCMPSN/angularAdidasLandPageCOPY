import { Component } from '@angular/core';
import novedadesData from '../../novedades.json'

interface Novedad {
  id: Number,
  name: String;
  image: String;
  price: Number;
  category: String;
  extra: String;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  novedades: Novedad[] = novedadesData

  selector = 1

  hideSection() {
    const section = document.getElementById('blueSection')
    section?.classList.add('hidden')
  }

  selector1() {
    this.selector = 1
  }

  selector2() {
    this.selector = 2
  }
  selector3() {
    this.selector = 3
  }


}
