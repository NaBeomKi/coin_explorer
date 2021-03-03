import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import Loading from "Components/Loading";
import Message from "Components/Message";
import CoinMarkets from "Screens/CoinMarkets";
import CoinExchanges from "Screens/CoinExchanges";

const Container = styled("main")`
  padding: 3em;
`;

const Title = styled("h2")`
  margin-bottom: 1.5em;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Description = styled("p")`
  margin-bottom: 1.5em;
`;

const Lists = styled("ul")`
  margin-bottom: 1.5em;
`;

const Item = styled("li")`
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const Strong = styled("strong")`
  font-weight: bold;
`;

const InnerMenu = styled("div")`
  margin-bottom: 1.5em;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.2em 0.4em;
  border: 3px solid #1abc9c;
  border-radius: 5px;
  font-weight: bold;
  color: ${(props) => (props.selected ? "white" : "#1abc9c")};
  background: ${(props) => (props.selected ? "#1abc9c" : "white")};
  &:not(:last-child) {
    margin-right: 1em;
  }
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, loading, error, coinInfo }) => (
    <Container>
      {loading ? (
        <>
          <Helmet>
            <title>Loading | Coin Explorer</title>
          </Helmet>
          <Loading />
        </>
      ) : (
        coinInfo && (
          <>
            <Helmet>
              <title>{coinInfo.name} | Coin Explorer</title>
            </Helmet>
            <Title>
              {coinInfo.name} / {coinInfo.symbol}
            </Title>
            <Description>{coinInfo?.description}</Description>
            <Lists>
              <Item>
                <Strong>Rank : </Strong>
                {coinInfo.rank}
              </Item>
              <Item>
                <Strong>Open Source : </Strong>
                {coinInfo.open_source ? "Yes" : "No"}
              </Item>
              <Item>
                <Strong>Proof Type : </Strong>
                {coinInfo.proof_type}
              </Item>
              <Item>
                <Strong>Structure : </Strong>
                {coinInfo.org_structure}
              </Item>
            </Lists>
            <InnerMenu>
              <Button
                to={`/coins/${coinInfo.id}/markets`}
                selected={pathname.includes("/markets")}
              >
                MARKETS
              </Button>
              <Button
                to={`/coins/${coinInfo.id}/exchanges`}
                selected={pathname.includes("/exchanges")}
              >
                EXCHANGES
              </Button>
            </InnerMenu>
            <Route path="/coins/:id/markets" component={CoinMarkets} />
            <Route path="/coins/:id/exchanges" component={CoinExchanges} />
          </>
        )
      )}
      {error && <Message message={error} />}
    </Container>
  )
);

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  coinInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    open_source: PropTypes.bool.isRequired,
    proof_type: PropTypes.string.isRequired,
    org_structure: PropTypes.string.isRequired,
  }),
};

export default DetailPresenter;
