import { Component, OnInit, Input} from '@angular/core';
import { ProductCategoriesService } from 'src/app/services/product-categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  public menuCategoriesData = []
  public menuCategoriesDetailsData = []
  public dataset = []
  constructor(private _productCategoriesService: ProductCategoriesService) { }

  ngOnInit() {
    this.getCategory();
   }

  openMegaMenu(){
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el) {
        if(el.children.length > 0){
          if(el.children[0].classList.contains('mega-menu')){
            el.classList.add('mega-menu-pane');
          }
        }        
    });
  }

  getCategory() {
    
    this._productCategoriesService.getCategoryDetails().subscribe(result => {
      this.menuCategoriesData = result.result.catrgoryWiseItems;
      console.log(result.result.catrgoryWiseItems)
    });
    
}


}
