export const addressTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        address: [null, [addressValidator()]]
    })
}
`;

export const addressHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="address" id="address" formControlName="address" showValidation>
</form>
`;

export const alphabetTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        alphabet: [null, [alphabetOnlyValidator()]]
    })
}
`;

export const alphabetHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="alphabet" id="alphabet" formControlName="alphabet" showValidation>
</form>
`;

export const dateDDMMYYYYTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        dateDDMMYYYY: [null, [dateDD_MM_YYYYValidator()]]
    })
}
`;

export const dateDDMMYYYYHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="dateDDMMYYYY" id="dateDDMMYYYY" formControlName="dateDDMMYYYY" showValidation>
</form>
`;

export const dateYYYYMMDDTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        dateYYYYMMDD: [null, [dateYYYY_MM_DDValidator()]]
    })
}
`;

export const dateYYYYMMDDHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="dateYYYYMMDD" id="dateYYYYMMDD" formControlName="dateYYYYMMDD" showValidation>
</form>
`;

export const emailTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        email: [null, [emailValidator()]]
    })
}
`;

export const emailHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="email" id="email" formControlName="email" showValidation>
</form>
`;

export const ipAddressTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        ipAddress: [null, [ipAddressValidator()]]
    })
}
`;

export const ipAddressHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="ipAddress" id="ipAddress" formControlName="ipAddress" showValidation>
</form>
`;

export const ipv4TSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        ipv4: [null, [iPv4Validator()]]
    })
}
`;

export const ipv4HTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="ipv4" id="ipv4" formControlName="ipv4" showValidation>
</form>
`;

export const ipv6TSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        ipv6: [null, [iPv6Validator()]]
    })
}
`;

export const ipv6HTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="ipv6" id="ipv6" formControlName="ipv6" showValidation>
</form>
`;

export const numericTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        numeric: [null, [numericsOnlyValidator()]]
    })
}
`;

export const numericHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="numeric" id="numeric" formControlName="numeric" showValidation>
</form>
`;

export const noSpecialTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        noSpecial: [null, [noSpecialsValidator()]]
    })
}
`;

export const noSpecialHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="noSpecial" id="noSpecial" formControlName="noSpecial" showValidation>
</form>
`;

export const passportTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        passport: [null, [passportValidator()]]
    })
}
`;

export const passportHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="passport" id="passport" formControlName="passport" showValidation>
</form>
`;

export const passwordTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        password: [null, [passwordValidator()]]
    })
}
`;

export const passwordHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="password" id="password" formControlName="password" showValidation>
</form>
`;

export const phoneTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        phone: [null, [phoneNumberValidator()]]
    })
}
`;

export const phoneHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="phone" id="phone" formControlName="phone" showValidation>
</form>
`;

export const spaceTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        space: [null, [singleSpaceValidator()]]
    })
}
`;

export const spaceHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="space" id="space" formControlName="space" showValidation>
</form>
`;

export const spaceResTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        spaceRes: [null, [spaceRestrictionValidator()]]
    })
}
`;

export const spaceResHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="spaceRes" id="spaceRes" formControlName="spaceRes" showValidation>
</form>
`;

export const ssnTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        ssn: [null, [ssnValidator()]]
    })
}
`;

export const ssnHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="ssn" id="ssn" formControlName="ssn" showValidation>
</form>
`;

export const timeHHMM12TSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        timeHHMM12: [null, [timeHH_MM_12Validator()]]
    })
}
`;

export const timeHHMM12HTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="timeHHMM12" id="timeHHMM12" formControlName="timeHHMM12" showValidation>
</form>
`;

export const timeHHMM24TSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        timeHHMM12: [null, [timeHH_MM_24Validator()]]
    })
}
`;

export const timeHHMM24HTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="timeHHMM24" id="timeHHMM24" formControlName="timeHHMM24" showValidation>
</form>
`;

export const timeHHMMSS24TSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        timeHHMMSS24: [null, [timeHH_MM_SS_24Validator()]]
    })
}
`;

export const timeHHMMSS24HTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="timeHHMMSS24" id="timeHHMMSS24" formControlName="timeHHMMSS24" showValidation>
</form>
`;

export const urlTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        url: [null, [urlValidator()]]
    })
}
`;

export const urlHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="url" id="url" formControlName="url" showValidation>
</form>
`;

export const zipCodeTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        zipCode: [null, [zipCodeValidator()]]
    })
}
`;

export const zipCodeHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="zipCode" id="zipCode" formControlName="zipCode" showValidation>
</form>
`;

export const earlierDateTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        earlierDate: [null, [earlierThenValidator(this._controlDate)]]
    })
}
`;

export const earlierDateHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="date" name="laterDate" id="earlierDate" formControlName="earlierDate" showValidation>
</form>
`;

export const laterDateTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        laterDate: [null, [laterThenValidator(this._controlDate)]]
    })
}
`;

export const laterDateHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="date" name="laterDate" id="earlierDate" formControlName="earlierDate" showValidation>
</form>
`;

export const compareDateTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        compareDate: [null, [compareToValidator("earlierDate", ">=")]]
    })
}
`;

export const compareDateHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="date" name="compareDate" id="compareDate" formControlName="compareDate" showValidation>
</form>
`;

export const requiredWhenTSSnippet: string = `
exampleForm!: FormGroup;
required: boolean = false;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        requiredWhen: [null, [requiredWhenValidator(() => this.required)]]
    })
}

requireChange($event: MouseEvent) {
    this.required = !this.required;
}
`;

export const requiredWhenHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="requiredWhen" id="requiredWhen" formControlName="requiredWhen" showValidation>
</form>
`;

export const linkToTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        linkTo: [null, [linkToValidator("linkedTo")]]
    })
}
`;

export const linkToHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="linkTo" id="linkTo" formControlName="linkTo" showValidation>
</form>
`;

export const linkedToTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        linkedTo: [null, [linkedToValidator("linkTo")]]
    })
}
`;

export const linkedToHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="linkedTo" id="linkedTo" formControlName="linkedTo" showValidation>
</form>
`;

export const regexpTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        regexp: [null, regexpMatchValidator(/(s|regexp)/)]
    })
}
`;

export const regexpToHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="regexp" id="regexp" formControlName="regexp" showValidation>
</form>
`;

export const regexpNotTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        regexpNot: [null, regexpNotAMatchValidator(/(s|regexp)/)]
    })
}
`;

export const regexpNotHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" name="regexpNot" id="regexpNot" formControlName="regexpNot" showValidation>
</form>
`;