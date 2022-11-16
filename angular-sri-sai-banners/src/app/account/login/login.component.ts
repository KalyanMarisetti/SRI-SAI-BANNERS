import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  year: number = new Date().getFullYear();
  loginForm!: FormGroup;
  fieldTextType!: boolean;
  submitted = false;
  showNavigationArrows: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

     //Validation Set
     this.loginForm = this.formBuilder.group({
      // email: ['admin@themesbrand.com', [Validators.required, Validators.email]],
      email: ['kalyanmarisetti98@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      console.log('***********Form Valid*************')
    } else{
      console.log('***********Form IN Valid*************')

    }
  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


}
