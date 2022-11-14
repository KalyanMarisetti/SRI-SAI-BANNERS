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
  showNavigationArrows: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }

  onSubmit(){

  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


}
