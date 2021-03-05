import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { getPrices } from "api";
import Loading from "Components/Loading";
import Message from "Components/Message";
import Price from "Components/Price";

const Container = styled("main")`
  padding: 3em;
  text-align: center;
`;

export default function Prices() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [prices, setPrices] = useState([]);

  async function getPricesData() {
    try {
      const { data } = await getPrices();
      setPrices(data);
    } catch {
      setError("Sorry, Can't find Prices. Try again");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPricesData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Prices | Coin Explorer</title>
      </Helmet>
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
    </>
  );
}
