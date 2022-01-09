import { FieldArray, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import FormikField from "../../shared/form/FormikField";
import styles from "./register.module.css";
import { setDoc, doc, Timestamp } from "firebase/firestore";
// import logo from "../../imgs/1.png";
const validationSchema = yup.object({
  name: yup.string().required("name field is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  password: yup.string().required("Password field is required"),
  passwordConfirmation: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same"),
  }),
});

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    Itian: [],
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const [user, setUser] = useState({});
  const history = useHistory();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const onSubmit = async (values) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
        values.passwordConfirmation
      );
      await setDoc(doc(db, "users", user.user.uid), {
        uid: user.user.uid,
        name: values.name,
        email: values.email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        avatar:
          "https://www.duke-nus.edu.sg/images/librariesprovider5/people/1-placeholder.png?sfvrsn=61a8955c_0",
        avatarPath: "",
      });
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history.push("/");
      console.log(user);
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };
  const [error, setError] = useState("");

  return (
    <div className="container  ">
      <div className="row">
        <figure className="col-6  d-flex justify-content-center ">
          <figure className={`w-25 ${styles.register__logo}`}>
            {/* <img src={logo} alt="" className="w-100" /> */}
          </figure>
        </figure>
        <div className={`col-6 ${styles.form__wrapper} pb-5  my-5`}>
          <h2>Register</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="form w-50 m-auto" style={{ padding: 20 }}>
                    <FormikField label="name:" name="name" type="text" />
                    <FormikField label="email" name="email" type="email" />
                    <FormikField
                      label="password"
                      name="password"
                      type="password"
                    />
                    <FormikField
                      label="password confirmation"
                      name="passwordConfirmation"
                      type="password"
                    />

                    <Field name="itian">
                      {(formikField) => {
                        return (
                          <>
                            <div>
                              <label
                                htmlFor="Itian"
                                className="form-label  "
                                style={{
                                  display: "block",
                                }}
                              >
                                {" "}
                              </label>
                              <FieldArray name="Itian">
                                {({
                                  push,

                                  form: {
                                    values: { Itian },
                                  },
                                }) => {
                                  return (
                                    <div>
                                      <button
                                        type="button"
                                        className={`my-3 ${styles.button} rounded-pill text-light px-5 py-2`}
                                        onClick={() => {
                                          push();
                                          push();
                                        }}
                                      >
                                        Itian
                                      </button>
                                      {Itian.map((feild, i) => (
                                        <div key={i}>
                                          {" "}
                                          {i === 0 && (
                                            <label
                                              htmlFor={`Itian[${i}]`}
                                              className="form-label  "
                                              style={{
                                                display: "block",
                                              }}
                                            >
                                              {" "}
                                              code
                                            </label>
                                          )}{" "}
                                          {i === 1 && (
                                            <label
                                              htmlFor={`Itian[${i}]`}
                                              className="form-label  "
                                              style={{
                                                display: "block",
                                              }}
                                            >
                                              {" "}
                                              name
                                            </label>
                                          )}
                                          <Field
                                            className={`${styles.input} rounded-pill mb-5`}
                                            name={`Itian[${i}]`}
                                          />
                                          {Itian.length > 2 &&
                                            (Itian.length = 0)}
                                        </div>
                                      ))}
                                    </div>
                                  );
                                }}
                              </FieldArray>
                            </div>
                          </>
                        );
                      }}
                    </Field>
                    <button
                      style={{ display: "block" }}
                      type="submit"
                      className={`  ${styles.button}  rounded-pill text-light`}
                    >
                      submit
                    </button>
                  </div>
                  {error ? (
                    <p className=" text-danger text-center">
                      {" "}
                      this email already in use
                    </p>
                  ) : null}
                </Form>
              );
            }}
          </Formik>
          <p className="text-center">
            Already a user ?{" "}
            <Link to="/login" className="text-danger">
              {" "}
              Log In{" "}
            </Link>{" "}
          </p>{" "}
        </div>
      </div>{" "}
    </div>
  );
};

export default Register;
