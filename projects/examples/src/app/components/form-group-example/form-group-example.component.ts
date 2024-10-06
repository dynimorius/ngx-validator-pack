import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { requiredEther, requiredIf, requiredIfNot } from 'ngx-validator-pack';
import { ShowValidationDirective } from '../../../../../ngx-validator-pack/src/public-api';

@Component({
  selector: 'app-form-group-example',
  standalone: true,
  imports: [ReactiveFormsModule, ShowValidationDirective],
  templateUrl: './form-group-example.component.html',
  styleUrl: "../../app.component.scss",
})
export class FormGroupExampleComponent implements OnInit {
  formValidationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formValidationForm = this.fb.group({
      compare: [null],
      if: [null],
      ifNot: [null],
      ether: [null]
    }, {
      validators: [
        requiredIf('if', 'compare'),
        requiredIfNot('ifNot', 'compare'),
        requiredEther('ether', 'compare')
      ]
    })

    this.formValidationForm.valueChanges.subscribe(() => {
      console.log(this.formValidationForm.controls);
    })
  }
}
