import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

// fooddetails 
  
foodDetails = [
  {
    id:1,
    foodName:"Grilled Sandwich",
    foodDetails:"Pan-fried masala paneer.",
    foodPrice:45,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
  },
  {
    id:2,
    foodName:"Veggie Pizza",
    foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
    foodPrice:35,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
  },
  {
    id:3,
    foodName:"Chicken Burger",
    foodDetails:"Chicken",
    foodPrice:65,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
  },
  {
    id:4,
    foodName:"Vegan Wrap",
    foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
    foodPrice:40,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
  },
  {
    id:5,
    foodName:"Intense Brownie",
    foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
    foodPrice:55,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
  },
  {
    id:6,
    foodName:"Oreo Cheesecake Ice Cream",
    foodDetails:"Oreo ice cream",
    foodPrice:45,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
  }
]


}
