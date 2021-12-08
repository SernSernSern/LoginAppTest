import {emailRegex, passwordRegex} from './regex';

const validationStrings = {
  emailRequired: 'Email is Required',
  passwordRequired: 'Password is Required',
  invalidEmail: 'Invalid Email',
  invalidPassword: 'Invalid Password',
};

export const emailRequired = value =>
  value ? undefined : validationStrings.emailRequired;

export const passwordRequired = value =>
  value ? undefined : validationStrings.passwordRequired;

export const validateEmail = value => {
  let email =
    value && !emailRegex.test(value)
      ? validationStrings.invalidEmail
      : undefined;
  return email;
};

export const validatePassword = value => {
  let pass =
    value && !passwordRegex.test(value)
      ? validationStrings.invalidPassword
      : undefined;
  return pass;
};
