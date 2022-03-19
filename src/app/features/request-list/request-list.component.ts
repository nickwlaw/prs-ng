import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = []

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getAll().subscribe(
      data => {
        this.requests = data
        console.log(data)
      },
      error => console.log(error)
    )
  }
}
