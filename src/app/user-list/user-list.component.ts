import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        console.log(data)
        this.users = data
      },
      error => { console.log(error) }
    )
  }

}
