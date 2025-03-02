/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

// @internal Checks id an input in a format of Street number Street Name, City, State ZIP code
export const address =
  /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;

// @internal Checks for date format YYYY-MM-dd
export const dateYYYY_MM_DD =
  /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

// Checks for date format  dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY
// @internal with check for leap year
export const dateDD_MM_YYYY =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

// @internal Checks if input is an email
export const email =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// @internal Checks if input is an email
export const advancedEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// @internal Checks if input is in a IPv4 format
export const IPAddressV4 =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

// @internal Checks if input is in a IPv6 format
export const IPAddressV6 =
  /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;

// @internal Checks if input is in a IPv4 or IPv6 format
export const IPAddressV4AndV6 =
  /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;

// @internal Checks if input is in a ipv4 cidr address format
export const cidrV4 = /^(3[0-2]|[12]?[0-9])$/;

// @internal Checks if input is in a ipv6 cidr address format
export const cidrV6 = /^(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;

// @internal Checks if an input consists of letters only
export const lettersOnly = /^[A-Za-z]+$/;

// @internal Checks if an input has letters
export const hasLetters = /[a-zA-Z]/;

// @internal Checks if an input has lowercase letters
export const hasLowercase = /[a-z]/;

// @internal Checks if an input has uppercase letters
export const hasUppercase = /[A-Z]/;

// @internal Checks if an input consists of letters and numbers
export const alphaNumeric = /^[0-9a-zA-Z]+$/;

// @internal Checks if an input consists of letters, numbers and spaces
export const alphaNumericWithSpace = /^[0-9a-zA-Z\s]+$/;

// @internal Checks if the input consists of letters, periods, hyphens and spaces
export const lettersPeriodsHyphensAndSpaces = /^[a-zA-Z\s.-]+$/;

// @internal Checks if input contains < or >;
export const greaterOrLessThen = /(?=.*[<>])/;

// @internal Checks if input does not contains any special characters
export const noSpecial = /^[A-Za-z0-9 ]+$/;

// @internal Checks if input contains any special characters
export const hasSpecials = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;

// @internal Checks if an input consists of numbers only
export const numbersOnly = /^\d+$/;

// @internal Checks if an input has numbers
export const hasNumbers = /\d/;

// @internal Checks if input is in passport format
export const passport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;

// Checks if input consist of at least 1 lowercase letter, 1 uppercase letter,
// @internal 1 number, 1 special character and has length of at least 8 characters
export const passwordStrength =
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

// @internal Checks for a (000) 000 0000 phone format
export const phoneNumber = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

// @internal Checks for a single space character
export const space = /[\s]/;

// @internal Restrict only spaces, spaces at the beginning and end of the field
export const spaceRestriction = /^\S$|^\S[\s\S]*\S$/;

// @internal Checks if input is in an Social Security Number format
export const ssn =
  /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/;

// @internal Checks for Time Format HH:MM 12-hour with optional leading 0
export const timeHH_MM_12 = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;

// @internal Checks for Time Format HH:MM 24-hour with optional leading 0
export const timeHH_MM_24 = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

// @internal Checks for Time Format HH:MM:SS 24-hour
export const timeHH_MM_SS_24 =
  /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/;

// @internal Checks if input is a url
export const url =
  /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

// @internal Checks if input is a localhost url
export const localhostUrl =
  /^(https?:\/\/localhost\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|https?:\/\/localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))$/;

// @internal Checks if input is an internal url
export const interanetUrl =
  /^(https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9])$/;

// @internal Checks if input is a data URI
export const dataUri =
  /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i;

// @internal Checks of a zip code in formats 00000 or 00000-0000
export const zipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

// @internal Checks if input is in a hex color format
export const hexColor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

// @internal Checks if input is in a hex color format
export const strictHexColor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

// @internal Checks if input is in a cusip(Committee on Uniform Securities Identification Procedures) format
export const cusip = /^[0-9A-Z]{9}$/;

// @internal Checks if input has ASCII charters
export const ascii = /^[\x00-\x7F]+$/;

// @internal Checks if input is a float
export const float =
  /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

// @internal Checks if input is a decimal
export const decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

// @internal Checks if input is in a hexa decimal format
export const hexaDecimal = /^[0-9A-F]+$/i;

// @internal Checks if input is a latitude value
export const latitude = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;

// @internal Checks if input is a longitude value
export const longitude =
  /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
