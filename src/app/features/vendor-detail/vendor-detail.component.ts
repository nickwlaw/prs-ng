import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = new Vendor()
  vendorId: number = 0

  constructor(private vendorService: VendorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.vendorId = params.id
        this.vendorService.getById(this.vendorId).subscribe(
          data => {
            if (data.length > 0) {
              this.vendor = data[0]
            }
          },
          error => console.log(error)
        )
      }
    )
  }

  deleteVendor() {
    this.vendorService.deleteById(this.vendor.id).subscribe(
      data => {
        this.router.navigateByUrl('/vendor/list')
      },
      error => console.log(error)
    )
  }
}
