import React from "react";
import { useFormik } from "formik";
import { signUpValidation } from "../Services/Schema";
import "./LoginPage.css";

interface MyFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const loginFormObj = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "Enter your email address",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
  },
];

const LoginPage: React.FC = () => {
  const loginForm: MyFormValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: loginForm,
    validationSchema: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login-page-container">
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <h5 className="login-form-title">Login Form</h5>

        {loginFormObj.map((form, index) => (
          <div className="form-field" key={index}>
            <label htmlFor={form.name}>{form.label}:</label>
            <input
              type={form.type}
              id={form.name}
              name={form.name}
              placeholder={form.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[form.name as keyof MyFormValues]}
            />
            {formik.touched[form.name as keyof MyFormValues] &&
              formik.errors[form.name as keyof MyFormValues] && (
                <div className="error-msg">
                  {formik.errors[form.name as keyof MyFormValues]}
                </div>
              )}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
