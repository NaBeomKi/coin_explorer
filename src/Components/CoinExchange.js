import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("article")`
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Title = styled("h2")`
  margin-bottom: 0.5em;
  font-weight: bold;
`;

const TextBox = styled("p")``;

const Span = styled("span")`
  &:not(:last-child) {
    margin-right: 0.3em;
  }
`;

const CoinExchange = ({ name, fiats }) => (
  <Container>
    <Title>{name}</Title>
    <TextBox>
      Pay on{" "}
      {fiats.map((fiat, index) => (
        <Span key={fiat.symbol + index}>{fiat.symbol}</Span>
      ))}
    </TextBox>
  </Container>
);

CoinExchange.propTypes = {
  name: PropTypes.string.isRequired,
  fiats: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CoinExchange;
