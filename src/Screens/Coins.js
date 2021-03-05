import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { getCoins } from "api";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Coin from "Components/Coin";

const Container = styled("main")`
  padding: 3em;
  text-align: center;
`;

export default function Coins() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);

  async function getCoinsData() {
    try {
      const { data } = await getCoins();
      setCoins(data);
    } catch {
      setError("Sorry, Can't find Coins. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Coins | Coin Explorer</title>
      </Helmet>
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
    </>
  );
}
