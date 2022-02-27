import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm : FormGroup;
  constructor( private  formBuilder : FormBuilder,
                private userService : UserService) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({

      fullName : ['',[Validators.minLength(3),Validators.required]],
      emailAdress : ['',[Validators.minLength(10),Validators.required]],
      date : [''],
      departement : [''],
      tel : ['',[Validators.minLength(8),Validators.maxLength(8),Validators.required] ],
      message : [''],
    });
  }
  signup(f:any){
    console.log("my user",f);
    this.userService.signup(f).subscribe();
    
    }
    }
