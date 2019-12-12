import isLength from "validator/lib/isLength";
import matches from "validator/lib/matches";

// eslint-disable-next-line import/prefer-default-export
export const isValidEmail = (email) => {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-control-regex,max-len,no-useless-escape
  const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailPattern.test(email);
};

export const isValidPassword = (password) => {
  // validate password
  if (!isLength(password, 8)) {
    return (
      "The password must be eight characters or longer"
    );
  }
  if (!matches(password, /(?=.*[A-Z]+)/g)) {
    return (`The password must contain at least 1
         uppercase alphabetical character`);
  }
  if (!matches(password, /(?=.*[a-z])/g)) {
    return (`The password must contain at least 1 
        lowercase alphabetical character`);
  }
  if (!matches(password, /(?=.*[0-9])/i)) {
    return (`The password must contain at least 1 
        numeric character`);
  }
  if (!matches(password, /(?=.*[!@#$%^&*])/i)) {
    return (`The password must contain at least 
        one special character`);
  }

  return "Valid";
};
