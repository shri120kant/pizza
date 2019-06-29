import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas:any[]=[
    {
      "pizzaId": 1,
      "pizzaName": "Double Cheese Margherita",
      "pizzVeg/Nonveg": "http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark-90.png",
      "price": 35.95,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "pizzaId": 2,
      "pizzaName": "Deluxe Veggie",
      "pizzVeg/Nonveg": "http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark-90.png",
      "price": 35.95,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "pizzaId": 5,
      "pizzaName": "Mexican Green Wave",
      "pizzVeg/Nonveg": "http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark-90.png",
      "price": 35.95,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "pizzaId": 8,
      "pizzaName": "Peppy Paneer",
      "pizzVeg/Nonveg": "http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark-90.png",
      "price": 35.95,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "pizzaId": 10,
      "pizzaName": "Farm House",
      "pizzVeg/Nonveg": "http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark-90.png",
      "price": 35.95,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
