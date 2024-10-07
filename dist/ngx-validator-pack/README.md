<img src="./D_dynamize-angular-icon.png" 
        alt="Picture" 
        width="400" 
        height="400" 
        style="display: block; margin: 0 auto" />

# Ngx Validator Pack

<a name="start"></a>

#### _A pack of validators for Angular Form Group and Form Controls_

## Table of Contents

- [Ngx Validator Pack](#ngx-validator-pack) - [_A pack of validators for Angular Form Group and Form Controls_](#a-pack-of-validators-for-angular-form-group-and-form-controls)
  - [Installation](#install)
  - [Ngx Validators](#ngx-validators)
    - [RegExp Validators](#regexp-validators)
    - [Date Validators](#date-validators)
    - [Conditional Validators](#conditional-validators)
  - [Ngx Prebuilt Validators](#ngx-prebuilt-validators)
    - [Address](#adress)
    - [Alphabet](#alphabet)
    - [Date](#date)
    - [Email](#email)
    - [IP Address](#ip-address)
    - [Numeric](#numeric)
    - [Special Characters](#specials)
    - [Passport](#passport)
    - [Password](#password)
    - [Phone](#phone)
    - [Space](#space)
    - [Social Security Number](#ssn)
    - [Time](#time)
    - [URL](#url)
    - [Zip Code](#zip-code)
  - [Ngx Form Group](#ngx-form-group-validators)
  - [Showing validation](#showing-validation)

## Installation

```bash
npm install --save @dynamize/ngx-validator-pack
```

## Ngx Validators

<a name="ngx-validators"></a>

### RegExp Validators

There are two types of RegExp validators in the Validator Pack, <mark>regexpValidator</mark> and <mark>regexpNotValidator</mark>.

<mark>regexpValidator</mark> returns an error if the value does not match the regular expression, and
opposite to it <mark>regexpNotValidator</mark> returns an error if the value matches the regular expression.

regexpValidator Example:

```javascript
import { regexpValidator } from '@dynamize/ngx-validator-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  exampleForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      regexpInput: [null, [regexpValidator(/(s|regexp)/)]]
    })
  }
}
```

In this example we are checking if the input is a word regexp, if not we will get an error.

regexpNotValidator Example:

```javascript
import { regexpNotValidator } from '@dynamize/ngx-validator-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  exampleForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      regexpNotInput: [null, [regexpNotValidator(/(s|regexp)/)]]
    })
  }
}
```

In this example we are checking if the input is not a word regexp, if not we will get an error.

Additionally we can supply two other optional parameters, first being the name of the error and
the second a string which will represent the error content / message.

```javascript
import { regexpValidator, regexpNotValidator } from '@dynamize/ngx-validator-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  exampleForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      regexpInput: [
        null,
        [
          regexpValidator(
            /(s|regexp)/,
            'example_regexp_error',
            'RegExp validation works!'
          ),
        ],
      ],
      regexpNotInput: [
        null,
        [
          regexpNotValidator(
            /(s|regexp)/,
            'example_regexp_not_error',
            'RegExp Not validation works!'
          ),
        ],
      ],
    });
  }
}
```

### Date Validators

We have three types of validators to compare date values (date picker values).

<mark>earlierThenValidator</mark> checks if a picked date is earlier then a give one.

<mark>laterThenValidator</mark> checks if a picked date is later then a give one.

<mark>compareToValidator</mark> compares the value of a given input to the value of the form control
whose name was given as a first parameter. The second parameter is a string representing
the comparison.

earlierThenValidator Example:

```javascript
import { earlierThenValidator } from '@dynamize/ngx-validator-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  exampleForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      earlierDate: [null, [earlierThenValidator(new Date())]]
    })
  }
}
```

laterThenValidator Example:

```javascript
import { laterThenValidator } from '@dynamize/ngx-validator-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  exampleForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      laterDate: [null, [laterThenValidator(new Date())]]
    })
  }
}
```

compareToValidator Example:

```javascript
import { compareToValidator } from '@dynamize/ngx-validator-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  exampleForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      controlDate: [null],
      compareDate: [null, [compareToValidator("controlDate", ">=")]]
    })
  }
}
```

The available comparisons are: '<', '>', '==', '===', '<=', '>='.

Additionally we can supply two other optional parameters, first being the name of the error and
the second a string which will represent the error content / message.

```javascript
import {
  earlierThenValidator,
  compareToValidator,
  laterThenValidator,
} from '@dynamize/ngx-validator-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  exampleForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      controlDate: [null],
      compareDate: [
        null,
        [
          compareToValidator(
            'controlDate',
            '>=',
            'compere_example_error',
            'It Works!!'
          ),
        ],
      ],
      earlierDate: [
        null,
        [
          earlierThenValidator(new Date()),
          'earlier_ten_example_error',
          'It Works!!',
        ],
      ],
      laterDate: [
        null,
        [
          laterThenValidator(new Date()),
          'later_then_example_error',
          'It Works!!',
        ],
      ],
    });
  }
}
```
