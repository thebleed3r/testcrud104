import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service/users-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit {

  currentUser;
  submitted = false;

  constructor(
    private userService: UsersServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.userService.getItemById(id)
        .subscribe(res => {
          this.currentUser = res;
          console.log(this.currentUser);
        });
    });
  }

}
