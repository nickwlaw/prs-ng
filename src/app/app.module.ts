import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './features/about/about.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { VendorListComponent } from './features/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './features/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { MenuComponent } from './core/menu/menu.component';
import { RequestListComponent } from './features/request-list/request-list.component';
import { UserCreateComponent } from './features/user-create/user-create.component';
import { VendorCreateComponent } from './features/vendor-create/vendor-create.component';
import { ProductCreateComponent } from './features/product-create/product-create.component';
import { UserEditComponent } from './features/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    VendorListComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    MenuComponent,
    RequestListComponent,
    UserCreateComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
