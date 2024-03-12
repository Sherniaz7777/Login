import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/slice/signUpSlices";

const SignUp = ({ setisVisible }) => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    img: "",
  });
  

  const dispatch = useDispatch();
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const clickDiv = (e) => {
    let authDiv = e.target.closest("#test");

    if (!authDiv) setisVisible(false);

    if (authDiv.classList.value === styles.auth) {
      return;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(createUser(userData))
    setisVisible(false)
  };

  return (
    <div className={styles.overlay} onClick={clickDiv}>
      <div className={styles.auth} id="test">
        <form onSubmit={submit}>
          <h1>Register</h1>
          <p>
            <input
              type="email"
              placeholder="test@gmail.com"
              className={styles.inputs}
              name="email"
              onChange={changeInput}
            />
          </p>

          <p>
            <input
              type="text"
              placeholder="Name"
              className={styles.inputs}
              name="name"
              onChange={changeInput}
            />
          </p>

          <p>
            <input
              type="password"
              placeholder="Password"
              className={styles.inputs}
              name="password"
              onChange={changeInput}
            />
          </p>

          <p>
            <input
              type="text"
              placeholder="img url"
              className={styles.inputs}
              name="img"
              onChange={changeInput}
            />
          </p>
          <p>
            <input type="submit" className={styles.inputs} />
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
