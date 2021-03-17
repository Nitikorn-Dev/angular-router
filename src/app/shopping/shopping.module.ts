import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingMainComponent } from "./shopping-main.component";
import { ShoppingRouterModule } from "./shopping-routing.module";
import { ProductComponent } from "./product/product.component";
import { ProductsDetailComponent } from "./productsdetail/productsdetail.component";

@NgModule({
  imports: [CommonModule, ShoppingRouterModule],
  declarations: [
    ShoppingMainComponent,
    ProductComponent,
    ProductsDetailComponent
  ],
  providers: []
})
export class ShoppingModule {}
