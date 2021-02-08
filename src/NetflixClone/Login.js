import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { useStatevalue } from "./StateProvider";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
const Login = () => {
  const [{ user }, dispatch] = useStatevalue();
  const SignIn = () => {
    console.log(user);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.set_user,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login__logo">
      <h1>Login page</h1>
      <div className="container">
        <img
          className="Login__img"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt=""
        />

        <div className="Login__text">
          <Button id="button" variant="contained" onClick={() => SignIn()}>
            Sign In With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
