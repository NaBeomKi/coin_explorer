import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("article")`
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

const Title = styled("h3")`
  margin-bottom: 1.5em;
  font-size: 2rem;
  font-weight: bold;
`;

const Description = styled("p")`
  margin-bottom: 1em;
`;

const Links = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Link = styled("a")`
  text-decoration: underline;
  &:hover {
    color: #9b59b6;
  }
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const Exchange = ({ name, description, links }) => (
  <Container>
    <Title>{name}</Title>
    {description && (
      <Description>{description.substring(0, 80)}...</Description>
    )}
    <Links>
      {links &&
        links.website &&
        links.website.map((link, index) => (
          <Link key={index} href={link}>
            {link}
          </Link>
        ))}
    </Links>
  </Container>
);

export default Exchange;

Exchange.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  links: PropTypes.shape({
    website: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
};
