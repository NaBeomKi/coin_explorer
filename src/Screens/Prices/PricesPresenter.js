import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Price from "Components/Price";

const Container = styled("main")`
  padding: 3em;
  text-align: center;
`;

const PricesPresenter = ({ loading, error, prices }) => (
  <Container>
    {loading ? (
      <Loading />
    ) : (
      prices &&
      prices.length > 0 &&
      prices.map((price) => <Price key={price.id} {...price} />)
    )}
    {error && <Message message={error} />}
  </Container>
);

export default PricesPresenter;

PricesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};
