import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
/*"Formbuilder" module/object allows methods and other modules/objects
to be passed into the element properties. "Validators" module/object allows
form validators to be used to for a particular element property.*/
import { SignupService} from "../signup.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {
  serverresult = [];
  loader = false;
  
  constructor(private ourFB: FormBuilder, private ourservice: SignupService, private router: Router) { }

  ourForm = this.ourFB.group({
    useremail: ["", Validators.required],
    userpassword: ["", Validators.required],
  })

  submission(ourpage: string = '/page'):void {
    //console.log(this.ourForm.value);
    this.loader = true;
    this.ourservice.loggingIn(this.ourForm.value).subscribe(
      response => this.handlingresponse(response, ourpage),
      error => this.handlingErrorResponse(error)
    );
  }

  handlingresponse (response: any, ourpage: string) {
    this.loader = false;
    this.serverresult = response[0];
    console.log("You are Successful! ", this.serverresult);
    if (this.serverresult) {
      this.router.navigate([ourpage]);
    }
  }

  handlingErrorResponse (error: any) {
    this.loader = false;
    console.error("You have an Error! ", error);
    setTimeout(() => {
      alert("Could not reach server. Please try again.");
    }, 1000);
  }

  ngOnInit(): void {
  }

}
