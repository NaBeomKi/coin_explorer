import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { getExchanges } from "api";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Exchange from "Components/Exchange";

const Container = styled("main")`
  padding: 3em;
  text-align: center;
`;

export default function Exchanges() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [exchanges, setExchanges] = useState([]);

  async function getExchangesData() {
    try {
      const { data } = await getExchanges();
      setExchanges(data);
    } catch {
      setError("Sorry, Can't find Exchanges. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getExchangesData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Exchanges | Coin Explorer</title>
      </Helmet>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          exchanges &&
          exchanges.length > 0 &&
          exchanges.map((exchange) => (
            <Exchange key={exchange.id} {...exchange} />
          ))
        )}
        {error && <Message message={error} />}
      </Container>
    </>
  );
}
