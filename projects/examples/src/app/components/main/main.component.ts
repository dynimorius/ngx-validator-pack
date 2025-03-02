import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  addressValidator,
  alphabetOnlyValidator,
  compareToValidator,
  dateDD_MM_YYYYValidator,
  dateYYYY_MM_DDValidator,
  earlierThenValidator,
  emailValidator,
  iPv4Validator,
  iPv6Validator,
  ipAddressValidator,
  laterThenValidator,
  linkToValidator,
  linkedToValidator,
  noSpecialsValidator,
  numericsOnlyValidator,
  passportValidator,
  passwordValidator,
  phoneNumberValidator,
  regexpValidator,
  requiredWhenValidator,
  spaceValidator,
  spaceRestrictionValidator,
  ssnValidator,
  timeHH_MM_12Validator,
  timeHH_MM_24Validator,
  timeHH_MM_SS_24Validator,
  urlValidator,
  zipCodeValidator,
  PasswordChecks,
  wordCountValidator,
  ShowValidationDirective,
} from "ngx-validator-pack";

import {
  addressHTMLSnippet,
  addressTSSnippet,
  alphabetHTMLSnippet,
  alphabetTSSnippet,
  compareDateHTMLSnippet,
  compareDateTSSnippet,
  dateDDMMYYYYHTMLSnippet,
  dateDDMMYYYYTSSnippet,
  dateYYYYMMDDHTMLSnippet,
  dateYYYYMMDDTSSnippet,
  earlierDateHTMLSnippet,
  earlierDateTSSnippet,
  emailHTMLSnippet,
  emailTSSnippet,
  ipAddressHTMLSnippet,
  ipAddressTSSnippet,
  ipv4HTMLSnippet,
  ipv4TSSnippet,
  ipv6HTMLSnippet,
  ipv6TSSnippet,
  laterDateHTMLSnippet,
  laterDateTSSnippet,
  linkToHTMLSnippet,
  linkToTSSnippet,
  linkedToHTMLSnippet,
  linkedToTSSnippet,
  noSpecialHTMLSnippet,
  noSpecialTSSnippet,
  numericHTMLSnippet,
  numericTSSnippet,
  passportHTMLSnippet,
  passportTSSnippet,
  passwordHTMLSnippet,
  passwordTSSnippet,
  phoneHTMLSnippet,
  phoneTSSnippet,
  regexpTSSnippet,
  regexpToHTMLSnippet,
  requiredWhenHTMLSnippet,
  requiredWhenTSSnippet,
  spaceHTMLSnippet,
  spaceResHTMLSnippet,
  spaceResTSSnippet,
  spaceTSSnippet,
  ssnHTMLSnippet,
  ssnTSSnippet,
  timeHHMM12HTMLSnippet,
  timeHHMM12TSSnippet,
  timeHHMM24HTMLSnippet,
  timeHHMM24TSSnippet,
  timeHHMMSS24HTMLSnippet,
  timeHHMMSS24TSSnippet,
  urlHTMLSnippet,
  urlTSSnippet,
  zipCodeHTMLSnippet,
  zipCodeTSSnippet,
} from "../../snippet-data";
import { SnippetsComponent } from "../snippets/snippets.component";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [ReactiveFormsModule, ShowValidationDirective, SnippetsComponent],
  templateUrl: "./main.component.html",
  styleUrls: ["../../app.component.scss", "./main.component.scss"],
})
export class MainComponent implements OnInit {
  mainForm!: FormGroup;
  _controlDate = new Date();
  required: boolean = false;
  passwordChecks = PasswordChecks();

  addressTSSnippet: string = addressTSSnippet;
  addressHTMLSnippet: string = addressHTMLSnippet;
  alphabetTSSnippet: string = alphabetTSSnippet;
  alphabetHTMLSnippet: string = alphabetHTMLSnippet;
  dateDDMMYYYYTSSnippet: string = dateDDMMYYYYTSSnippet;
  dateDDMMYYYYHTMLSnippet: string = dateDDMMYYYYHTMLSnippet;
  dateYYYYMMDDTSSnippet: string = dateYYYYMMDDTSSnippet;
  dateYYYYMMDDHTMLSnippet: string = dateYYYYMMDDHTMLSnippet;
  emailTSSnippet: string = emailTSSnippet;
  emailHTMLSnippet: string = emailHTMLSnippet;
  ipAddressTSSnippet: string = ipAddressTSSnippet;
  ipAddressHTMLSnippet: string = ipAddressHTMLSnippet;
  ipv4TSSnippet: string = ipv4TSSnippet;
  ipv4HTMLSnippet: string = ipv4HTMLSnippet;
  ipv6TSSnippet: string = ipv6TSSnippet;
  ipv6HTMLSnippet: string = ipv6HTMLSnippet;
  numericTSSnippet: string = numericTSSnippet;
  numericHTMLSnippet: string = numericHTMLSnippet;
  noSpecialTSSnippet: string = noSpecialTSSnippet;
  noSpecialHTMLSnippet: string = noSpecialHTMLSnippet;
  passportTSSnippet: string = passportTSSnippet;
  passportHTMLSnippet: string = passportHTMLSnippet;
  passwordTSSnippet: string = passwordTSSnippet;
  passwordHTMLSnippet: string = passwordHTMLSnippet;
  phoneTSSnippet: string = phoneTSSnippet;
  phoneHTMLSnippet: string = phoneHTMLSnippet;
  spaceTSSnippet: string = spaceTSSnippet;
  spaceHTMLSnippet: string = spaceHTMLSnippet;
  spaceResTSSnippet: string = spaceResTSSnippet;
  spaceResHTMLSnippet: string = spaceResHTMLSnippet;
  ssnTSSnippet: string = ssnTSSnippet;
  ssnHTMLSnippet: string = ssnHTMLSnippet;
  timeHHMM12TSSnippet: string = timeHHMM12TSSnippet;
  timeHHMM12HTMLSnippet: string = timeHHMM12HTMLSnippet;
  timeHHMM24TSSnippet: string = timeHHMM24TSSnippet;
  timeHHMM24HTMLSnippet: string = timeHHMM24HTMLSnippet;
  timeHHMMSS24TSSnippet: string = timeHHMMSS24TSSnippet;
  timeHHMMSS24HTMLSnippet: string = timeHHMMSS24HTMLSnippet;
  urlTSSnippet: string = urlTSSnippet;
  urlHTMLSnippet: string = urlHTMLSnippet;
  zipCodeTSSnippet: string = zipCodeTSSnippet;
  zipCodeHTMLSnippet: string = zipCodeHTMLSnippet;
  earlierDateTSSnippet: string = earlierDateTSSnippet;
  earlierDateHTMLSnippet: string = earlierDateHTMLSnippet;
  laterDateTSSnippet: string = laterDateTSSnippet;
  laterDateHTMLSnippet: string = laterDateHTMLSnippet;
  compareDateTSSnippet: string = compareDateTSSnippet;
  compareDateHTMLSnippet: string = compareDateHTMLSnippet;
  requiredWhenTSSnippet: string = requiredWhenTSSnippet;
  requiredWhenHTMLSnippet: string = requiredWhenHTMLSnippet;
  linkToTSSnippet: string = linkToTSSnippet;
  linkToHTMLSnippet: string = linkToHTMLSnippet;
  linkedToTSSnippet: string = linkedToTSSnippet;
  linkedToHTMLSnippet: string = linkedToHTMLSnippet;
  regexpTSSnippet: string = regexpTSSnippet;
  regexpToHTMLSnippet: string = regexpToHTMLSnippet;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      address: [null, [addressValidator()]],
      alphabet: [null, [alphabetOnlyValidator()]],
      dateDDMMYYYY: [null, [dateDD_MM_YYYYValidator()]],
      dateYYYYMMDD: [null, [dateYYYY_MM_DDValidator()]],
      email: [null, [emailValidator()]],
      ipAddress: [null, [ipAddressValidator()]],
      ipv4: [null, [iPv4Validator()]],
      ipv6: [null, [iPv6Validator()]],
      numeric: [null, [numericsOnlyValidator()]],
      noSpecial: [null, [noSpecialsValidator()]],
      passport: [null, [passportValidator()]],
      password: [null, [passwordValidator()]],
      phone: [null, [phoneNumberValidator()]],
      space: [null, [spaceValidator()]],
      spaceRes: [null, [spaceRestrictionValidator()]],
      ssn: [null, [ssnValidator()]],
      timeHHMM12: [null, [timeHH_MM_12Validator()]],
      timeHHMM24: [null, [timeHH_MM_24Validator()]],
      timeHHMMSS24: [null, [timeHH_MM_SS_24Validator()]],
      url: [null, [urlValidator()]],
      zipCode: [null, [zipCodeValidator()]],
      earlierDate: [null, [earlierThenValidator(this._controlDate)]],
      laterDate: [null, [laterThenValidator(this._controlDate)]],
      compareDate: [null, [compareToValidator("earlierDate", ">=")]],
      requiredWhen: [null, [requiredWhenValidator(() => this.required)]],
      linkTo: [null, [linkToValidator("linkedTo")]],
      linkedTo: [null, [linkedToValidator("linkTo")]],
      regexp: [null, regexpValidator(/(s|regexp)/, '!!')],
      dynamicPassword: [null, this.passwordChecks.validators],
      wordCount: [null, wordCountValidator(5, '>')]
    });

    this.mainForm.valueChanges.subscribe(() => {
      console.log(this.mainForm.controls);
    });
  }

  requireChange($event: MouseEvent) {
    this.required = !this.required;
  }
}
