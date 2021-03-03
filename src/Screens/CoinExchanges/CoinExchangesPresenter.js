import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Message from "Components/Message";
import CoinExchange from "Components/CoinExchange";

const Container = styled("section")``;

const CoinExchangesPresenter = ({ loading, error, exchanges }) =>
  loading ? (
    <Loading />
  ) : (
    <>
      {exchanges && exchanges.length > 0 && (
        <Container>
          {console.log(exchanges)}
          {exchanges
            .filter((exchange) => exchange.fiats.length > 0)
            .map((exchange) => (
              <CoinExchange key={exchange.id} {...exchange} />
            ))}
        </Container>
      )}
      {error && <Message message={error} />}
    </>
  );

CoinExchangesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          symbol: PropTypes.string.isRequired,
        }).isRequired
      ),
    }).isRequired
  ).isRequired,
};

export default CoinExchangesPresenter;
