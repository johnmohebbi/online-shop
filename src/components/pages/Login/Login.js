import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { validate } from "../SignUp/validate";
import Styles from "./styles/Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [thouched, setThouched] = useState({});
  const [errors, setErrors] = useState({});

  const ChangeHandler = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const blurHandler = (event) => {
    setThouched({ ...thouched, [event.target.name]: true });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const resolve = new Promise((resolve) => setTimeout(resolve, 2000));
    const regect = new Promise((resolve, regect) => setTimeout(regect, 2000));

    if (!Object.keys(errors).length) {
      toast.promise(resolve, {
        pending: "Please Wait.",
        success: " Successfully registered👌",
      });
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } else {
      toast.promise(regect, {
        pending: "Please Wait.",
        error: "Information is not valid.",
      });
      setThouched({
        email: true,
        password: true,
      });
    }
  };
  useEffect(() => {
    setErrors(validate(inputValues, "login"));
  }, [inputValues]);

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler} className={Styles.form}>
      <h2>Login</h2>
        <section>
          <div className={Styles.formContainerInput}>
            <input
              className="w-full placeholder:text-gray-400 "
              type="text"
              name="email"
              value={inputValues.email}
              placeholder="email"
              onChange={ChangeHandler}
              onBlur={blurHandler}
              autoComplete="off"
            />
            <span className={Styles.borderFocus}></span>
            {errors.email && thouched.email && <span>{errors.email}</span>}
          </div>
          <div className={Styles.formContainerInput}>
            <input
              className="w-full placeholder:text-gray-400 "
              type="password"
              name="password"
              value={inputValues.password}
              placeholder="password"
              onChange={ChangeHandler}
              onBlur={blurHandler}
              autoComplete="off"
            />
            <span className={Styles.borderFocus}></span>
            {errors.password && thouched.password && (
              <span>{errors.password}</span>
            )}
          </div>
        </section>
        <div className="w-full text-center">
          <button className={Styles.btnSubmit} type="submit">
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
