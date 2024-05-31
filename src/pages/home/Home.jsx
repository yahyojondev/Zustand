import React from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Cupon from "../../components/cupon/Cupon";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Products />
      <Cupon />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
