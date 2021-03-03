import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("article")`
  &:hover {
    color: #9b59b6;
  }
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

const Strong = styled("strong")`
  font-weight: bold;
`;

const SLink = styled(Link)`
  text-decoration: underline;
`;

const Coin = ({ id, name, symbol, rank }) => (
  <Container>
    <SLink to={`coins/${id}`}>
      <Strong>#{rank}</Strong> {name} / {symbol} ➡
    </SLink>
  </Container>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Coin;
