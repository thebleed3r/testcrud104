import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service/users-service.service';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {

  user = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: 'user'
  };
  submitted = false;

  constructor(private userService: UsersServiceService) { }

  ngOnInit(): void {
  }

  addUser() {
    const data = {
      nom: this.user.nom,
      prenom: this.user.prenom,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role
    };
    this.userService.addItem(data)
      .subscribe(res => {
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newUser() {
    this.submitted = false;
    this.user = {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      role: 'user'
    };
  }

}
