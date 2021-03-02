import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled("article")`
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Price = ({
  name,
  symbol,
  quotes: {
    USD: { price },
  },
}) => <Container>{`${name} / ${symbol} : $${price}`}</Container>;

export default Price;

Price.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  quotes: PropTypes.shape({
    USD: PropTypes.shape({
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
