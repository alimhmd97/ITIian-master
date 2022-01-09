import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "../../shared/form/FormikField";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
// import logo from "../../../public/assets/images/iti_logo.jfif";
import styles from "./Login.module.css";
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  password: yup.string().required("Password field is required"),
});

const Login = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const [error, setError] = useState("");
  const onSubmit = async (values) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateDoc(doc(db, "users", user.user.uid), {
        isOnline: true,
      });

      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history.push("/");
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(user);
  return (
    <div className={`container   bg-body   my-auto ${styles.login__container}`}>
      <div className={`align-items-center d-flex ${styles.login__wrapper}`}>
        <figure className="col-6  d-flex justify-content-center align-items-center ">
          <figure className="w-50">
            {/* <img src={logo} alt="" className="w-100 p-0 m-0" /> */}
          </figure>
        </figure>
        <div className={`col-6 ${styles.form__wrapper} p-3 my-5  form`}>
          <h2>Login</h2>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => {
              return (
                <Form>
                  <div className="form w-50 m-auto" style={{ padding: 20 }}>
                    <FormikField label="email" name="email" type="email" />
                    <FormikField
                      label="password"
                      name="password"
                      type="password"
                    />

                    <button
                      style={{ display: "block" }}
                      className={`text-light  rounded-pill ${styles.button} my-4`}
                    >
                      login
                    </button>
                    {error ? (
                      <p className=" text-danger">wrong email or password</p>
                    ) : null}
                  </div>
                </Form>
              );
            }}
          </Formik>
          <p className="text-center">
            Not a user ?
            <Link to="/register" className="text-danger">
              Sign Up
            </Link>
            <br />
            <p> {user?.email}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
