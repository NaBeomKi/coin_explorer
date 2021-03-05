import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCoinMarkets } from "api";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Market from "Components/Market";

const Container = styled("section")``;

export default function CoinMarkets({
  match: {
    params: { id },
  },
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [markets, setMarkets] = useState([]);

  async function getCoinMarketsData() {
    try {
      const { data } = await getCoinMarkets(id);
      setMarkets(data);
    } catch {
      setError("Sorry, Can't find Markets. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCoinMarketsData();
  }, []);

  return loading ? (
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
}
