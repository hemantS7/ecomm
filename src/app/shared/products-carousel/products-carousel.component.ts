import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { Data, AppService } from '../../app.service';
import { Product } from "../../app.models";
import { Settings, AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit {

  @Input('products') products: Array<Product> = [];
  @Output() onQuantityChange: EventEmitter<any> = new EventEmitter<any>();
  
  public count:number = 1;
  public config: SwiperConfigInterface = {};
  public settings: Settings;
  public product:[]
  constructor(public appSettings:AppSettings, public appService:AppService, public dialog: MatDialog, private router: Router,public snackBar: MatSnackBar) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() { }
  
  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 1,
      spaceBetween: 16,       
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true,  
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        740: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        }
      }
    }
  }

  public openProductDialog(product){   
    let dialogRef = this.dialog.open(ProductDialogComponent, {
        data: product,
        panelClass: 'product-dialog',
        direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(product => {
      if(product){
        this.router.navigate(['/products', product.id, product.name]); 
      }
    });
  }

  public addToCart(product:Product){
     this.appService.addToCart(product);
   }

   public changeQuantity(value){
    this.onQuantityChange.emit(value);
    }

}