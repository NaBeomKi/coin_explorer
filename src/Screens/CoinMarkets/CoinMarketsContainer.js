import React from "react";
import CoinMarketsPresenter from "./CoinMarketsPresenter";
import { getCoinMarkets } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    markets: [],
  };
  setCoinMarkets = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data } = await getCoinMarkets(id);
      this.setState({ markets: data });
    } catch {
      this.setState({ error: "Sorry, Can't find Markets. Try again." });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.setCoinMarkets();
  }
  render() {
    return <CoinMarketsPresenter {...this.state} />;
  }
}
