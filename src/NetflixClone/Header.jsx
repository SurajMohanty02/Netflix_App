import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./Header.css";
import { useStatevalue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Header = () => {
  const [{ user }, dispatch] = useStatevalue();
  const SignOut = () => {
    dispatch({
      type: actionTypes.remove_user,
      user: null,
    });
  };
  return (
    <header className="container-fluid is-fixed">
      <img
        className="img__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt=""
      />

      <div className="container__wrap">
        <span className="text">UNLIMITED TV SHOWS & MOVIES</span>
        <Button id="join__btn" variant="contained">
          JOIN NOW
        </Button>
        <Button id="btn" variant="contained" onClick={SignOut}>
          Sign Out
        </Button>
        <Avatar id="avtar" src={user.photoURL} />
      </div>
    </header>
  );
};

export default Header;
