import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Market from "Components/Market";

const Container = styled("section")``;

const CoinMarketsPresenter = ({ loading, error, markets }) =>
  loading ? (
    <Loading />
  ) : (
    <>
      {markets && markets.length > 0 && (
        <Container>
          {markets
            .filter((market) => market.market_url)
            .map((market, index) => (
              <Market
                key={market.exchange_id + index}
                name={market.exchange_name}
                url={market.market_url}
              />
            ))}
        </Container>
      )}
      {error && <Message message={error} />}
    </>
  );

CoinMarketsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_id: PropTypes.string.isRequired,
      exchange_name: PropTypes.string.isRequired,
      market_url: PropTypes.string,
    })
  ),
};

export default CoinMarketsPresenter;
