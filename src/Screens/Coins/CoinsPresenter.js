import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Coin from "Components/Coin";

const Container = styled("main")`
  padding: 3em;
  text-align: center;
`;

const CoinsPresenter = ({ loading, error, coins }) => (
  <Container>
    {loading ? (
      <Loading />
    ) : (
      coins &&
      coins.length > 0 &&
      coins
        .filter((coin) => coin.rank !== 0)
        .sort((first, second) => first.rank - second.rank)
        .map((coin) => <Coin key={coin.id} {...coin} />)
    )}
    {error && <Message message={error} />}
  </Container>
);

export default CoinsPresenter;

CoinsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
