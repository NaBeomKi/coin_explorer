import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("section")`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #e74c3c;
`;

const Message = ({ message }) => <Container>{message}</Container>;

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
