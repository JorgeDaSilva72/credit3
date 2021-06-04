import React from "react";
import GreenSection from "../components/GreenSection";
import RedSection from "../components/RedSection";
import BlueSection from "../components/BlueSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <GreenSection/>
      <RedSection/>
      <BlueSection/>
      <Contact/>
      <Footer/>   
         
    </div>
  );
};

export default Home;
