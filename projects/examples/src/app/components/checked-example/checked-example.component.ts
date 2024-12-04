import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChecksDirective, PasswordChecks } from 'ngx-validator-pack';
import { SnippetsComponent } from '../snippets/snippets.component';

@Component({
  selector: 'app-checked-example',
  standalone: true,
  imports: [ReactiveFormsModule, SnippetsComponent, ChecksDirective],
  templateUrl: './checked-example.component.html',
  styleUrl: './checked-example.component.scss',
})
export class CheckedExampleComponent implements OnInit {
  checkedForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}
  passwordChecks = PasswordChecks();

  ngOnInit(): void {
    this.checkedForm = this.fb.group({
      checked: [null, this.passwordChecks.validators],
    });
  }
}
