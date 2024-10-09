import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { requiredEther, requiredIf, requiredIfNot } from "ngx-validator-pack";
import { ShowValidationDirective } from "../../../../../ngx-validator-pack/src/public-api";
import { formGroupHTMLSnippet, formGroupTSSnippet } from "../../snippet-data";
import { SnippetsComponent } from "../snippets/snippets.component";

@Component({
  selector: "app-form-group-example",
  standalone: true,
  imports: [ReactiveFormsModule, ShowValidationDirective, SnippetsComponent],
  templateUrl: "./form-group-example.component.html",
  styleUrls: ["./form-group-example.component.scss", "../../app.component.scss"],
})
export class FormGroupExampleComponent implements OnInit {
  tsSnippet = formGroupTSSnippet;
  htmlSnippet = formGroupHTMLSnippet;
  formValidationForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formValidationForm = this.fb.group(
      {
        compare: [null],
        if: [null],
        ifNot: [null],
        ether: [null],
      },
      {
        validators: [
          requiredIf("if", "compare"),
          requiredIfNot("ifNot", "compare"),
          requiredEther("ether", "compare"),
        ],
      }
    );

    this.formValidationForm.valueChanges.subscribe(() => {
      console.log(this.formValidationForm.controls);
    });
  }
}
