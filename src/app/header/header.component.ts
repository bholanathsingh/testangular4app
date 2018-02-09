import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationStart} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers:[],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
 
  ngOnInit() {
      
  }


}
