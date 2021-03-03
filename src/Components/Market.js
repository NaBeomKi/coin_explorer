import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("article")`
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Link = styled("a")`
  text-decoration: underline;
  &:hover {
    color: #9b59b6;
  }
`;

const Market = ({ name, url }) => (
  <Container>
    <Link href={url || "#"} target="_blank">
      {name} ➡
    </Link>
  </Container>
);

Market.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Market;
