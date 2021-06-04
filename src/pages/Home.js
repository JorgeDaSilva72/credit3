import React from "react";
import Navigation from "../components/Navigation";
import GreenSection from "../components/GreenSection";
import RedSection from "../components/RedSection";
import BlueSection from "../components/BlueSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <GreenSection/>
      <RedSection/>
      <BlueSection/>
      <Contact/>
      <Footer/>   
         
    </div>
  );
};

export default Home;
