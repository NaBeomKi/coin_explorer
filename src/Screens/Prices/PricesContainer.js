import React from "react";
import PricesPresenter from "./PricesPresenter";
import { getPrices } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    prices: [],
  };
  setPrices = async () => {
    try {
      const { data } = await getPrices();
      this.setState({ prices: data });
    } catch {
      this.setState({ error: "Sorry, Can't find Prices. Try again" });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.setPrices();
  }
  render() {
    return <PricesPresenter {...this.state} />;
  }
}
