import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sticky-navbar';
  ngOnInit(){
    var menus:any=document.getElementById("menus");
    var navbar:any=document.getElementById("navbar");
    window.onscroll=function(){
      if(window.pageYOffset >= menus.offsetTop)
      {
        navbar.classList.add("sticky");
      }
      else{
        navbar.classList.remove("sticky");
      }
    }
  }
}
