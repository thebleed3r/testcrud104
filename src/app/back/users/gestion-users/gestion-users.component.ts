import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service/users-service.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  users;

  constructor(private serviceUser: UsersServiceService) { }

  ngOnInit(): void {
    this.serviceUser.getItems()
      .subscribe(res => {
        this.users = res;
      });
  }

  deleteUser(user , index) {
    if (window.confirm('Are you sure you want to delete this user ?')) {
      this.serviceUser.deleteItem(user._id)
        .subscribe(data => {
          this.users.splice(index , 1);
        });
    }
  }

}
