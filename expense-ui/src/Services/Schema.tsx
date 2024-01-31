import * as Yup from "yup";

export const signUpValidation = Yup.object({
  fullName: Yup.string()
    .min(2, "to short")
    .max(15, "to long")
    .required("Please enter name"),
  email: Yup.string().email().required("Please enter email"),
  password: Yup.string()
    .required("Please enter password")
    .min(3, "to weak")
    .max(8, "to long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Please enter your password"),
});
