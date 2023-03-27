import { Component } from '@angular/core';
import novedadesData from '../../novedades.json'
import coleccionesData from '../../colecciones.json'
import adiclubData from '../../adiclub.json'
import mejorData from '../../mejor.json'

interface Product {
  id:  Number,
  name: String;
  image: String;
  price: String;
  category: String;
  extra: String;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  novedades: Product[] = novedadesData
  colecciones: Product[] = coleccionesData
  adiclub: Product[] = adiclubData
  mejor: Product[] = mejorData

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
