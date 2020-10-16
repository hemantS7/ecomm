import { Component, OnInit } from '@angular/core';
import { Data, AppService } from '../../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total = [];
  grandTotal = 0;
  cartItemCount = [];
  cartItemCountTotal = 0;
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.appService.Data.cartList.forEach(product=>{
      this.total[product.id] = product.cartCount*product.newPrice;
      this.grandTotal += product.cartCount*product.newPrice;
      this.cartItemCount[product.id] = product.cartCount;
      this.cartItemCountTotal += product.cartCount;
    })
  }

  public updateCart(value){
    if(value){
      let removedQuantity = 0;
      this.appService.Data.cartList.forEach(product=>{
        if(product.ITEM_ID == value.productId){
               removedQuantity = product.cartCount - value.remainingQuantity;
               this.appService.Data.totalPrice = this.appService.Data.totalPrice -(product.MRP_RATE * removedQuantity);
               this.appService.Data.totalCartCount = this.appService.Data.totalCartCount - removedQuantity;
               product.cartCount = value.remainingQuantity; 
             }
      });

      this.appService.updatecartInLocalstorage();     
    }
  }

  public remove(product) {
    const index: number = this.appService.Data.cartList.indexOf(product);
    if (index !== -1) {
      this.appService.Data.cartList.splice(index, 1);
      this.appService.Data.totalCartCount = this.appService.Data.totalCartCount - product.cartCount;
      this.appService.Data.totalPrice = this.appService.Data.totalPrice - (product.cartCount * product.MRP_RATE )
      this.appService.updatecartInLocalstorage();
    }     
  }

  public clear(){
    this.appService.Data.cartList.forEach(product=>{
      this.appService.resetProductCartCount(product);
    });
    this.appService.Data.cartList.length = 0;
    this.appService.Data.totalPrice = 0;
    this.appService.Data.totalCartCount = 0;
    this.appService.updatecartInLocalstorage();
  } 

}
