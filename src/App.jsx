import React from "react";
import Experties from "./components/Experties/Experties";
import People from "./components/People/People";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Works/Works";
import css from "./styles/app.module.scss"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Work/>
      <Portfolio/>
      <People/>
      <Footer/>
    </div>
  )
};

export default App;
