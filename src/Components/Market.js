import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("article")`
  text-decoration: underline;
  &:hover {
    color: #9b59b6;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Market = ({ name, url }) => (
  <Container>
    <a href={url || "#"} target="_blank">
      {name} ➡
    </a>
  </Container>
);

Market.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Market;
