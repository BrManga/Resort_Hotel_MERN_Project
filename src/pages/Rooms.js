import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
