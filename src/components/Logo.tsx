import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 35px;
  @media screen and (max-width: 500px) {
    height: 28px;
  }
`;

const LogoText = styled.h1`
  margin: 0 0 0 13px;
  font-weight: 400;
  font-size: 1.7rem;
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
    margin: 0 0 0 10px;
  }
`;

export default function Logo() {
  return (
    <Container>
      <LogoImage src="assets/kanggo.png" />
      <LogoText></LogoText>
    </Container>
  );
}
