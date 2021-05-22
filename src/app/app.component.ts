import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService} from "./signup.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ourForm = new FormGroup({
    username: new FormControl(""),
    usersurname: new FormControl(""),
    useremail: new FormControl(""),
    userphonenumber: new FormControl(""),
  })

  constructor(private ourservice: SignupService) {}

  submission() {
    console.log(this.ourForm.value);
    this.ourservice.signingup(this.ourForm.value).subscribe(
      response => console.log("You are Successful! ", response),
      error => console.error("You have Error! ", error)
    );
  }
}
