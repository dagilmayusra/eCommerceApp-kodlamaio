import { User } from './../../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  returnUrl: string;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,) { }

  ngOnInit() {
    this.createLoginForm();
      // // reset login status
      // this.authenticationService.logout();

      // // get return url from route parameters or default to '/'
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  createLoginForm () {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  login() {    
    if(this.loginForm.valid){
      this.user=Object.assign({},this.loginForm.value)
    }
    this.userService.login(this.user).subscribe(data=>{
        if(data.length>0) {
          alert("başarılıyla giriş yaptınız")
          this.router.navigate(['/users']);
        }
        else {
          alert("Giriş Bilgileri Yanlış")
        }

    })
  }

}
