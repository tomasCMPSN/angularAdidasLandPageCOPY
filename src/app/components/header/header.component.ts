import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  toggleMenu(){
    const menu = document.getElementById('mobileMenu')
    menu?.classList.toggle('hidden')
  }

  hideNotification(){
    const notification = document.getElementById('userNotification')
    notification?.classList.add('hidden')
  }
}
