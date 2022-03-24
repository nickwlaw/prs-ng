import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User | null = null

  constructor(private systemService: SystemService) { }

  ngOnInit(): void {
    this.user = this.systemService.loggedInUser
  }

}
