import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpValidation } from "../../Services/Schema";
import "./LoginPage.css";
import Buttons from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import Modal from "../../Components/Modal/Modal";

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
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const formic = useFormik({
    initialValues: loginForm,
    validationSchema: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login-page-container">
      {isSignUp && (
        <Modal>
          <form className="form-container" onSubmit={formic.handleSubmit}>
            <h5 className="login-form-title">Sign Up </h5>

            {loginFormObj.map((form, index) => (
              <div className="form-field" key={index}>
                <label htmlFor={form.name}>{form.label} </label>
                <input
                  type={form.type}
                  id={form.name}
                  name={form.name}
                  placeholder={form.placeholder}
                  onChange={formic.handleChange}
                  onBlur={formic.handleBlur}
                  value={formic.values[form.name as keyof MyFormValues]}
                />
                {formic.touched[form.name as keyof MyFormValues] &&
                  formic.errors[form.name as keyof MyFormValues] && (
                    <div className="error-msg">
                      {formic.errors[form.name as keyof MyFormValues]}
                    </div>
                  )}
              </div>
            ))}

            <Buttons label="Submit" type="submit" />
          </form>
        </Modal>
      )}
    </div>
  );
};

export default LoginPage;
