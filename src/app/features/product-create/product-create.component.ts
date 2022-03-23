import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Vendor } from 'src/app/models/vendor.model';
import { ProductService } from 'src/app/services/product.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product()
  vendors: Vendor[] = []

  constructor(private productService: ProductService, private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
    this.vendorService.getAll().subscribe(
      data => {
        this.vendors = data
        console.log(data)
      },
      error => console.log(error)
    )
  }

  createProduct() {
    console.log(this.product)
    this.productService.createProduct(this.product).subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/product/list')
      },
      error => console.log(error)
    )
  }
}
