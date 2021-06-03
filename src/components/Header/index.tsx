import React from "react";
import { Container } from "./styles";
import SantanderLogo from "../../assets/santander-logo.svg";

export const Header: React.FC = () => {
  return (
    <Container>
      <img src={SantanderLogo} alt="Santander Logo" height="30rem" />
    </Container>
  );
};
