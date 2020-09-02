import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FacadeService } from '../../services/facade.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  form = this.builder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    age: [, [Validators.required, Validators.min(1), Validators.max(100)]],
    genre: ['MALE', [Validators.required]],
    hobby: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  ngOnInit(): void {
  }

}
