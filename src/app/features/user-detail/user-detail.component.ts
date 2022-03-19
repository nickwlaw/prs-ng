import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User()
  userId: number = 0

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.userId = params.id
        this.userService.getById(this.userId).subscribe(
          data => {
            if (data.length > 0) {
              this.user = data[0]
            }
            console.log(data)
          },
          error => console.log(error)
        )
      }
    )

  }

}
