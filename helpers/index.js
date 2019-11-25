
// eslint-disable-next-line import/prefer-default-export
export const isValidEmail = (email) => {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-control-regex,max-len,no-useless-escape
  const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailPattern.test(email);
};

