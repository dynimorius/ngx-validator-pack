import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  AddressValidatorDirective,
  AlphabetOnlyValidatorDirective,
  CompareToValidatorDirective,
  DateDD_MM_YYYYValidatorDirective,
  DateYYYY_MM_DDValidatorDirective,
  EarlierThenValidatorDirective,
  EmailValidatorDirective,
  IPAddressValidatorDirective,
  IPv4ValidatorDirective,
  IPv6ValidatorDirective,
  LaterThenValidatorDirective,
  LinkToValidatorDirective,
  LinkedToValidatorDirective,
  NoSpecialsValidatorDirective,
  NumericsOnlyValidatorDirective,
  PassportValidatorDirective,
  PasswordValidatorDirective,
  PhoneNumberValidatorDirective,
  RegExpNotValidatorDirective,
  RegExpValidatorDirective,
  RequiredWhenValidatorDirective,
  SSNValidatorDirective,
  ShowValidationDirective,
  SingleSpaceValidatorDirective,
  SpaceRestrictionValidatorDirective,
  TimeHH_MM_12ValidatorDirective,
  TimeHH_MM_24ValidatorDirective,
  TimeHH_MM_SS_24ValidatorDirective,
  UrlValidatorDirective,
  ZipCodeValidatorDirective,
} from "ngx-validator-pack";
import { SnippetsComponent } from "../snippets/snippets.component";

@Component({
  selector: "app-template-driven-examples",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SnippetsComponent,
    ShowValidationDirective,
    AddressValidatorDirective,
    AlphabetOnlyValidatorDirective,
    DateDD_MM_YYYYValidatorDirective,
    DateYYYY_MM_DDValidatorDirective,
    EmailValidatorDirective,
    IPAddressValidatorDirective,
    IPv4ValidatorDirective,
    IPv6ValidatorDirective,
    NumericsOnlyValidatorDirective,
    NoSpecialsValidatorDirective,
    PassportValidatorDirective,
    PasswordValidatorDirective,
    PhoneNumberValidatorDirective,
    SingleSpaceValidatorDirective,
    SpaceRestrictionValidatorDirective,
    SSNValidatorDirective,
    TimeHH_MM_12ValidatorDirective,
    TimeHH_MM_24ValidatorDirective,
    TimeHH_MM_SS_24ValidatorDirective,
    UrlValidatorDirective,
    ZipCodeValidatorDirective,
    RegExpValidatorDirective,
    RegExpNotValidatorDirective,
    EarlierThenValidatorDirective,
    LaterThenValidatorDirective,
    CompareToValidatorDirective,
    RequiredWhenValidatorDirective,
    LinkToValidatorDirective,
    LinkedToValidatorDirective
  ],
  templateUrl: "./template-driven-examples.component.html",
  styleUrl: "./template-driven-examples.component.scss",
})
export class TemplateDrivenExamplesComponent implements OnInit {
  templateForm!: FormGroup;
  required: boolean = false;
  today: Date = new Date();
  regexp: RegExp = /^(s|regexp)$/;

  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {
    this.templateForm = this.fb.group({
      address: [null],
      alphabet: [null],
      dateDDMMYYYY: [null],
      dateYYYYMMDD: [null],
      email: [null],
      ipAddress: [null],
      ipv4: [null],
      ipv6: [null],
      numeric: [null],
      noSpecial: [null],
      passport: [null],
      password: [null],
      phone: [null],
      space: [null],
      spaceRes: [null],
      ssn: [null],
      timeHHMM12: [null],
      timeHHMM24: [null],
      timeHHMMSS24: [null],
      url: [null],
      zipCode: [null],
      earlierDate: [null],
      laterDate: [null],
      compareDate: [null],
      requiredWhen: [null],
      linkTo: [null],
      linkedTo: [null],
      regexp: [null],
      regexpNot: [null],
    });

    this.templateForm.valueChanges.subscribe(() => {
      console.log(this.templateForm.controls);
    });
  }

  requireChange($event: MouseEvent) {
    this.required = !this.required;
  }
}
