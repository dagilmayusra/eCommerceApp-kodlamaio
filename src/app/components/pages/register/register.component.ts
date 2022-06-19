import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  user:User;
  ngOnInit() {
    this.createRegisterForm()
  }

  createRegisterForm(){
      this.registerForm = this.formBuilder.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required]
      })
  }
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService) { }

  register() {
        if(this.registerForm.valid){
            this.user=Object.assign({},this.registerForm.value)
        }
        this.userService.register(this.user).subscribe(data=>{
            console.log(data)
            alert("başarılıyla kayıt olundu")
            this.router.navigate(['/login']);
        })
  }

}
