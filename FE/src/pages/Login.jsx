import { useContext } from "react";
import "../assets/style/login.css";
import { useFormik } from "formik";
import { ContextUpdate, ContextValue } from "../contexts/ContextProvider";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAdmin, loginSuccess, loginFail } = useContext(ContextValue);
  const { onAdminLogin } = useContext(ContextUpdate);
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: () => {
      onAdminLogin(values.username, values.password);
      resetForm();
    },
    validationSchema: "",
  });

  return (
    <div className="login-container">
      {!loginSuccess && (
        <div className="login-form">
          <h2 style={{ textAlign: "center", marginBottom: 30 }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: 15,
              }}
            >
              {loginFail && (
                <div style={{ color: "red", width: "100%" }}>
                  Incorrect username or password
                </div>
              )}
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      )}
      {loginSuccess && isAdmin && (
        <div
          className="direct"
          onClick={() => (
            navigate("/"), window.open("http://localhost:5000/admin")
          )}
        >
          Go to Admin Panel
          <BsArrowRight />
        </div>
      )}
      {loginSuccess && !isAdmin && (
        <div className="direct" onClick={() => navigate("/")}>
          <BsArrowLeft />
          Login Success, Back to Homepage
        </div>
      )}
    </div>
  );
};

export default Login;
