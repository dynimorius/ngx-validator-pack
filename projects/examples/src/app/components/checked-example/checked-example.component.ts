import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressChecks, ChecksDirective, PasswordChecks, WordCountChecks } from 'ngx-validator-pack';
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
  addressChecks = AddressChecks();
  wordCountChecks = WordCountChecks(2, 10);
  ngOnInit(): void {
    this.checkedForm = this.fb.group({
      passwordChecks: [null, this.passwordChecks.validators],
      addressChecks: [null, this.addressChecks.validators],
      wordCountChecks: [null, this.wordCountChecks.validators]
    });
  }
}
