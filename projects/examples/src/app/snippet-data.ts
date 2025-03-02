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
    <input type="text" formControlName="address" showValidation>
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
    <input type="text" formControlName="alphabet" showValidation>
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
    <input type="text" formControlName="dateDDMMYYYY" showValidation>
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
    <input type="text" formControlName="dateYYYYMMDD" showValidation>
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
    <input type="text" formControlName="email" showValidation>
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
    <input type="text" formControlName="ipAddress" showValidation>
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
    <input type="text" formControlName="ipv4" showValidation>
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
    <input type="text" formControlName="ipv6" showValidation>
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
    <input type="text" formControlName="numeric" showValidation>
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
    <input type="text" formControlName="noSpecial" showValidation>
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
    <input type="text" formControlName="passport" showValidation>
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
    <input type="text" formControlName="password" showValidation>
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
    <input type="text" formControlName="phone" showValidation>
</form>
`;

export const spaceTSSnippet: string = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
        space: [null, [spaceValidator()]]
    })
}
`;

export const spaceHTMLSnippet = `
<form [formGroup]="exampleForm">
    <input type="text" formControlName="space" showValidation>
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
    <input type="text" formControlName="spaceRes" showValidation>
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
    <input type="text" formControlName="ssn" showValidation>
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
    <input type="text" formControlName="timeHHMM12" showValidation>
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
    <input type="text" formControlName="timeHHMM24" showValidation>
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
    <input type="text" formControlName="timeHHMMSS24" showValidation>
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
    <input type="text" formControlName="url" showValidation>
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
    <input type="text" formControlName="zipCode" showValidation>
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
    <input type="date" formControlName="earlierDate" showValidation>
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
    <input type="date" formControlName="earlierDate" showValidation>
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
    <input type="date" formControlName="compareDate" showValidation>
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
    <input type="text" formControlName="requiredWhen" showValidation>
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
    <input type="text" formControlName="linkTo" showValidation>
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
    <input type="text" formControlName="linkedTo" showValidation>
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
    <input type="text" formControlName="regexp" showValidation>
</form>
`;

export const formGroupTSSnippet = `
exampleForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.exampleForm.fb.group({
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
}
`;

export const formGroupHTMLSnippet = `
<form [formGroup]="exampleForm">
    <div class="input-wrapper">
        <label for="compare">This is a control input: </label>
        <input type="text" name="compare" id="compare" formControlName="compare">
    </div>
    <div class="input-wrapper">
        <h3>requiredIf Example:</h3>
        <label for="if">This input is valid only if the control input is not empty: </label>
        <input type="text" name="if" id="if" formControlName="if" showValidation>
    </div>
    <div class="input-wrapper">
        <h3>requiredIfNot Example:</h3>
        <label for="ifNot">This input is valid only if the control input is empty: </label>
        <input type="text" name="ifNot" id="ifNot" formControlName="ifNot" showValidation>
    </div>
    <div class="input-wrapper">
        <h3>requiredEther Example:</h3>
        <label for="ether">This input is valid only if ether it self or control input has a value: </label>
        <input type="text" name="ether" id="ether" formControlName="ether" showValidation>
    </div>
</form>
`;