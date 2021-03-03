import React from "react";
import CoinExchangesPresenter from "./CoinExchangesPresenter";
import { getCoinExchanges } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    exchanges: [],
  };
  setCoinExchanges = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data } = await getCoinExchanges(id);
      this.setState({ exchanges: data });
    } catch {
      this.setState({ error: "Sorry, Can't find Exchanges. Try again." });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.setCoinExchanges();
  }
  render() {
    return <CoinExchangesPresenter {...this.state} />;
  }
}
