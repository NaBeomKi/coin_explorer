import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Exchange from "Components/Exchange";

const Container = styled("main")`
  padding: 3em;
  text-align: center;
`;

const ExchangesPresenter = ({ loading, error, exchanges }) => (
  <Container>
    {loading ? (
      <Loading />
    ) : (
      exchanges &&
      exchanges.length > 0 &&
      exchanges.map((exchange) => <Exchange key={exchange.id} {...exchange} />)
    )}
    {error && <Message message={error} />}
  </Container>
);

ExchangesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      links: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired),
      }),
    }).isRequired
  ).isRequired,
};

export default ExchangesPresenter;
