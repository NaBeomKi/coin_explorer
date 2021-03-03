import React from "react";
import DetailPresenter from "./DetailPresenter";
import { getDetail } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    coinInfo: null,
  };
  setCoinInfo = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data } = await getDetail(id);
      this.setState({ coinInfo: data });
    } catch {
      this.setState({ error: "Sorry, Can't find Coin information" });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.setCoinInfo();
  }
  render() {
    return <DetailPresenter {...this.state} />;
  }
}
