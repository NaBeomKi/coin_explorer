import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCoinExchanges } from "api";
import Loading from "Components/Loading";
import Message from "Components/Message";
import CoinExchange from "Components/CoinExchange";

const Container = styled("section")``;

export default function CoinExchanges({
  match: {
    params: { id },
  },
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [exchanges, setExchanges] = useState([]);

  async function getCoinExchangesData() {
    try {
      const { data } = await getCoinExchanges(id);
      setExchanges(data);
    } catch {
      setError("Sorry, Can't find Exchanges. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCoinExchangesData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {exchanges && exchanges.length > 0 && (
        <Container>
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
}
