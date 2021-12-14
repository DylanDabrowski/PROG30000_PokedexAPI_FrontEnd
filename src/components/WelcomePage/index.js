import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, StartButton } from "./WelcomePageElements";

const WelcomePage = () => {
  return (
    <>
      <Wrapper>
        <h1>Welcome</h1>
        <StartButton to={"/"}>Pokemon</StartButton>
      </Wrapper>
    </>
  );
};

export default WelcomePage;
