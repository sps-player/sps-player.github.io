import React from "react";
import styled from "styled-components/macro";

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15vh;
  border-top: 1px solid #343a40;
  color: #868e96;
  padding: 1rem 1rem;
  a {
    color: #868e96;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <Paragraph>
        Made with ❤ by <a href="https://github.com/tdh8316">Donghyeok Tak</a>
        <br />
        Copyright 2021{" "}
        <a href="https://github.com/kanggo-sw">Kangwon High School</a>
      </Paragraph>
    </Container>
  );
}
