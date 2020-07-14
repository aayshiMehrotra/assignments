import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  hideMenu: boolean = true;
  routers: Router;
  constructor(private router: Router){

  }

  ngOnInit(){
    this.routers = this.router;
  }
  
}
