import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

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
