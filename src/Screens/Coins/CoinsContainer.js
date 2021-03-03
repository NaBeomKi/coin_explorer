import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { getCoins } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    coins: [],
  };
  setCoins = async () => {
    try {
      const { data } = await getCoins();
      this.setState({ coins: data });
    } catch {
      this.setState({ error: "Sorry, Can't find Coins. Try again." });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.setCoins();
  }
  render() {
    return <CoinsPresenter {...this.state} />;
  }
}
