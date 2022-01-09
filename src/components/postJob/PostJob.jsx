import { Formik, Form } from "formik";

import FormikField from "../../shared/form/FormikField";
import styles from "./PostJob.module.css";

const PostJob = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    alert(`mail is  ${values.jobTitle} and password is ${values.location} `);
  };

  return (
    <div className={`align-items-center d-flex`}>
      <div className={`w-50 mx-auto`}>
        <h4 className="text-center mb-3">Add a new job</h4>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => {
            return (
              <Form>
                <div>
                  <FormikField
                    label="Job Title"
                    name="jobTitle"
                    type="text"
                    className="w-100"
                  />
                  <FormikField
                    label="Location"
                    name="location"
                    type="text"
                    className="w-100"
                  />
                  <label>Description</label>
                  <textarea
                    label="Description"
                    name="description"
                    className={`w-100 ${styles.textarea}`}
                  ></textarea>

                  <div className="text-end">
                    <button
                      type="submit"
                      className={`text-white btn btn-danger rounded-pill my-4`}
                    >
                      Add a Job
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PostJob;
