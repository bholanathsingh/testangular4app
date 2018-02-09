import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationStart} from '@angular/router';


@Component({
  selector: 'app-root',
  providers:[],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  islogin=false;

  constructor(private router:Router){}

  ngOnInit() {
   
  }
}
