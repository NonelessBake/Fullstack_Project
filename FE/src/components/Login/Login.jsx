import { useContext } from "react";
import "../../assets/style/login.css";
import { useFormik } from "formik";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAdmin } = useContext(ContextValue);
  const { onAdminLogin } = useContext(ContextUpdate);
  const navigate = useNavigate();
  console.log(isAdmin);
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: () => {
      onAdminLogin(values.username, values.password);
      resetForm();
      isAdmin && navigate("/admin");
    },
    validationSchema: "",
  });

  return (
    <div className="login-container">
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
