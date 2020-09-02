import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/auth/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private builder: FormBuilder, 
    private auth: AuthorizationService,
    private router: Router
  ) { }

  showError: Boolean = false;
  errorMessage: String = 'Datos inválidos';

  form = this.builder.group({
    code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    name: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  submit(){ 
    this.auth.authorize(this.form.value)
    .subscribe(
      data=>this.router.navigateByUrl('/'), 
      err=>{
      this.showError = true;
      this.errorMessage = err;
    });
  }

}
