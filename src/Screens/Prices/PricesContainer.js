import React from "react";
import PricesPresenter from "./PricesPresenter";
import { getPrices } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    prices: [],
  };
  async componentDidMount() {
    try {
      const { data } = await getPrices();
      this.setState({ prices: data });
    } catch {
      this.setState({ error: "Sorry, Try again" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    return <PricesPresenter {...this.state} />;
  }
}
