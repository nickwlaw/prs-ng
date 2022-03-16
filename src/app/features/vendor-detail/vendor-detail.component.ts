import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = new Vendor()
  vendorId: number = 1

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.vendorService.getById(this.vendorId).subscribe(
      data => {
        if (data.length > 0) {
          this.vendor = data[0]
        }
      },
      error => console.log(error)
    )
  }

}
