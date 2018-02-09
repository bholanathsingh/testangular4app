import { Component, OnInit } from '@angular/core';
import {BittrexDetailService} from '../services/bittrex.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  providers:[BittrexDetailService],
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  message=0;
  logHistory=null;
  constructor(private bittrexDetailService:BittrexDetailService) {
      this.bittrexDetailService.GetLogHistory().subscribe(data=>this.logHistory=data);
   }

  ngOnInit() {
    this.bittrexDetailService.GetLogHistory().subscribe(data=>this.logHistory=data);
  }

}
