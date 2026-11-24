import React from "react";
import Nav from "../Ui/Nav";
import Landing from "../Ui/Landing";
import Sort from "../Ui/Sort"
import Selections from "../Ui/Selections"
import Footer from "../Ui/Footer"

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <Landing></Landing>
      <Sort></Sort>
      <Footer></Footer>
      <Selections></Selections>
    </>
  );
};

export default Home;
