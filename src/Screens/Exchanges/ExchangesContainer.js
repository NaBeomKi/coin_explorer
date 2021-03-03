import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { getExchanges } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    exchanges: [],
  };
  setExchanges = async () => {
    try {
      const { data } = await getExchanges();
      this.setState({ exchanges: data });
    } catch {
      this.setState({ error: "Sorry, Can't find Exchanges. Try again." });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.setExchanges();
  }
  render() {
    return <ExchangesPresenter {...this.state} />;
  }
}
