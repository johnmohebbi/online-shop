export const validate = (data, type) => {
  const errors = {};
  if (type === "signup") {
    if (!data.userName.trim()) {
      errors.userName = "userName required.";
    } else if (data.userName.length < 4) {
      errors.userName = "userName need to be 4 character or more.";
    } else {
      delete errors.userName;
    }
  }
  if (!data.email.trim()) {
    errors.email = "email required.";
  } else if (!/\S+@\w+.com/.test(data.email)) {
    errors.email = "your Email is invalide.";
  } else {
    delete errors.email;
  }
  if (!data.password.trim()) {
    errors.password = "password is required.";
  } else if (data.password.trim().length < 6) {
    errors.password = "password need to be 6 character or more.";
  } else {
    delete errors.password;
  }
  console.log(errors);
  return errors;
};
