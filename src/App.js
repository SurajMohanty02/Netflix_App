import React, { useState } from "react";
import "./App.css";
import Header from "./NetflixClone/Header";
import Banner from "./NetflixClone/Banner";
import Container from "./NetflixClone/Container";
import { useStatevalue } from "./NetflixClone/StateProvider";
import Login from "./NetflixClone/Login";

function App() {
  const [{ user }, dispatch] = useStatevalue("");

  return (
    <section>
      {user ? (
        <div className="App">
          <Header />
          <Banner />
          <Container />
        </div>
      ) : (
        <Login />
      )}
    </section>
  );
}

export default App;
