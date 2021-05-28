import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
/*"Formbuilder" module/object allows methods and other modules/objects
to be passed into the element properties. "Validators" module/object allows
form validators to be used to for a particular element property.*/
import { SignupService} from "./signup.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private ourFB: FormBuilder, private ourservice: SignupService) {};
  
  ourForm = this.ourFB.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    /*second parameter specifies the method/s, validator methods/objects in this
    case, to be applied to the property*/
    usersurname: ["", [Validators.required, Validators.minLength(3)]],
    useremail: ["", Validators.required],
    userphonenumber: ["", Validators.required],
  })

  submission() {
    console.log(this.ourForm.value);
    this.ourservice.signingup(this.ourForm.value).subscribe(
      response => console.log("You are Successful! ", response),
      error => console.error("You have Error! ", error)
    );
  }
}
