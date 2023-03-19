import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  i = 0
  textHeader = "PAGO EN LÍNEA"
  
  toggleMenu(){
    const menu = document.getElementById('mobileMenu')
    menu?.classList.toggle('hidden')
  }

  hideNotification(){
    const notification = document.getElementById('userNotification')
    notification?.classList.add('hidden')
  }
 
  ngOnInit(): void {
    setInterval( () => this.textIncrement(this.i), 3500)
  }

  textIncrement(iReceived : number){
   this.i++
   if( this.i % 2 ===  0 ){
    this.textHeader = "PAGO EN LÍNEA"
   }else{
    this.textHeader = "APROVECHÁ EL ENVIÓ EXPRESS Y RECIBÍ TUS COMPRAS EN 24H."
   }
   
  }
  
}
