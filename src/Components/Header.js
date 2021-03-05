import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.95px 2.6px;
`;

const Title = styled("h1")`
  font-size: 3.2rem;
  font-weight: bold;
`;

const Navi = styled("nav")``;

const SLink = styled(Link)`
  display: inline-block;
  margin-right: 1em;
  font-weight: bold;
  font-size: 1.8rem;
  color: ${(props) => (props.selected ? "#2980b9" : "#2c3e50")};
  &:hover {
    color: #2980b9;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Title>Coin Explorer</Title>
    <Navi>
      <SLink to="/" selected={pathname === "/"}>
        Prices
      </SLink>
      <SLink to="/exchanges" selected={pathname === "/exchanges"}>
        Exchanges
      </SLink>
      <SLink to="/coins" selected={pathname.includes("/coins")}>
        Coins
      </SLink>
    </Navi>
  </Header>
));
