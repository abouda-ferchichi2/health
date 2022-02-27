import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  loginForm : FormGroup;
  connectedUser : any;
  constructor(private formBulider : FormBuilder,
              private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBulider.group({
      email : [''],
      password : [' ']
    })

  }
 login(){
   console.log('user',this.user);
   let users = JSON.parse(localStorage.getItem("users") || "[]");

   for (let i = 0; i < users.length; i++) {
    if (users[i].email ==this.user.email && users[i].password == this.user.password) {
      this.connectedUser = users[i];
    }
   }
   if (this.connectedUser) {
     localStorage.setItem("connectedUser",JSON.stringify(this.connectedUser));

     switch (this.connectedUser.role) {
       case "admin":
         this.router.navigate(['dashboardAdmin'])
         break;
         case "client":
          this.router.navigate([''])
          break;
          case "doctor":
            this.router.navigate(['dashboardDoctor'])
         break;
       default:
         break;
     }
   }
 }
}
