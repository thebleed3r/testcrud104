import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  success = false;
  name_input;
  email_input;
  message_input;

  onFormSumbmit(f)
  {

    if (!f.valid)
    {
      console.log('Form not valid !');
      return ;
    }

    console.log(f.value);
    this.success = true;
    f.resetForm();
  }

  constructor() { }
  ngOnInit(): void {
  }

}
