import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 30px;
  background: orange;
`;

const Title = styled("h1")`
  font-size: 3.2rem;
`;

const Navi = styled("nav")``;

const SLink = styled(Link)``;

export default withRouter(({ location: pathname }) => (
  <Header>
    <Title>Coin Explorer</Title>
    <Navi>
      <SLink to="/">Prices</SLink>
      <SLink to="/exchanges">Exchanges</SLink>
      <SLink to="/coins">Coins</SLink>
    </Navi>
  </Header>
));
