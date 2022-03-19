import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor()

  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
  }

  createVendor() {
    this.vendorService.createVendor(this.vendor).subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/vendor/list')
      },
      error => console.log(error)
    )
  }
}
