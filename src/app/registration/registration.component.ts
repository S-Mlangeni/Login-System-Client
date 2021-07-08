import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
/*"Formbuilder" module/object allows methods and other modules/objects
to be passed into the element properties. "Validators" module/object allows
form validators to be used to for a particular element property.*/
import { SignupService} from "../signup.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../app.component.css']
})
export class RegistrationComponent implements OnInit {
  loader = false;

  constructor(private ourFB: FormBuilder, private ourservice: SignupService, private router: Router) { }

  ourForm = this.ourFB.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    /*second parameter specifies the method/s, validator methods/objects in this
    case, to be applied to the property*/
    usersurname: ["", [Validators.required, Validators.minLength(3)]],
    useremail: ["", Validators.required],
    userpassword: ["", Validators.required],
  })

  submission() {
    this.loader = true;
    this.ourservice.signingup(this.ourForm.value).subscribe(
      response => this.handlingRegistrationResponse(response),
      error => this.handlingErrorResponse(error)
    );
  }

  handlingRegistrationResponse (response: any, loginpage: string = '/login'):void {
    //console.log("You are Successful! ", response);
    this.router.navigate([loginpage]);

  }

  handlingErrorResponse (error: any) {
    this.loader = false;
    console.error("You have Error! ", error);
    setTimeout(() => {
      alert("Could not reach server. Please try again.");
    }, 1000);
  }

  ngOnInit(): void {
  }

}
