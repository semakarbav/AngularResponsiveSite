import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private orderDetailsService:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData=this.orderDetailsService.foodDetails;
  }

}
