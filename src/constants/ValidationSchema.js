import * as Yup from 'yup'

export const schema = Yup.object().shape({
  department: Yup.string().required("*Required"),
  name: Yup.string()
    .required("*Required")
    .min(3, "Name requires minimum three characters!!"),
  email: Yup.string()
    .required("*Required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email id!!"
    ),
  phone: Yup.string()
    .required("*Required")
    .matches(
      /(?:0)(?:50|52|54|55|56|58)[0-9]{7}/,
      "Please enter a valid UAE mobile number!!"
    ),
  message: Yup.string()
    .required("*Required")
    .min(26, "Message requires minimum 26 characters!!"),
});
