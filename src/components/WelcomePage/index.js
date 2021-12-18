import React from "react";
import { Wrapper, StartButton } from "./WelcomePageElements";

const WelcomePage = () => {
  return (
    <>
      <Wrapper>
        <h1>Welcome</h1>
        <StartButton to={"/pokemonpage"}>Pokemon</StartButton>
      </Wrapper>
    </>
  );
};

export default WelcomePage;
