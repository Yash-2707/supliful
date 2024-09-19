import React from "react";
import StartNav from "./StartNav";
import WelcomeComp from "./WelcomeComp";
import Products from './Products'

function Start() {
  return (
    <div>
      <StartNav/>
      <WelcomeComp/>
      <Products/>
    </div>
  );
}

export default Start;
