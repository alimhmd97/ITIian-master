import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";
import "./form.css"

const FormikField = ({ name, type, label }) => {
    return (
        <Field name={name}>
            {(formikField) => {
                return (
                    <div>
                        <label htmlFor={name} style={{ display: "block" }} >
                            {label}
                        </label>

                        <input
                        className="rounded-pill form-control2 input"
                               type={type}
                            id={name}
                            {...formikField.field}
                            defaultChecked={formikField.field.value}
                        />
                        <FormikErrorMessage name={name} />
                    </div>
                );
            }}
        </Field>
    );
};

export default FormikField;
