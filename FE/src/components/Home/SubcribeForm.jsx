import { Formik } from "formik";
import "../../assets/style/subcribeForm.css";
import { useState } from "react";
const SubcribeForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <section className="subcribe-form">
      <h2>Newsletters</h2>
      <p>Sign up for newsletter and get 10% cash back offer</p>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          setIsSuccess(true);
          return (values.email = "");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="subcribe-form-container">
            <form action="subcribe" onSubmit={handleSubmit}>
              <div className="email-submit">
                <div className="email">
                  <input
                    onBlur={handleBlur}
                    type="email"
                    name="email"
                    className="subcribe-input"
                    placeholder="Your email address..."
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <button className="submit-btn">SUBCRIBE</button>
              </div>
              <div className="errors-subcribe">
                {errors.email && touched.email && errors.email}
                {isSuccess ? (
                  <div className="success-subcribe">
                    Subcribe success, please check your email !
                  </div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        )}
      </Formik>
    </section>
  );
};

export default SubcribeForm;
