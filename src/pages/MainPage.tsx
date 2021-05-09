import styled, { keyframes } from "styled-components/macro";

import Footer from "../components/Footer";

import Logo from "../components/Logo";

const Header = styled.header`
  z-index: 2;
  padding: 2rem 2.5rem;
  position: absolute;
  @media screen and (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
  @media screen and (max-height: 400px) {
    display: none;
  }
`;

const TextAppear = (y: string) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(${y});
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainText = styled.h1`
  margin: 25vh 0 0 10vw;
  font-weight: 600;
  font-size: 6rem;
  color: #525252;
  animation: 0.7s ease-out 0s 1 ${TextAppear("-100px")};
  @media screen and (max-width: 1200px) {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: 870px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 3rem;
  }
`;

const SubText = styled.p`
  margin: 8px 0 0 10vw;
  font-size: 3.2rem;
  font-weight: 800;
  color: white;
  animation: 1.2s ease-out 0s 1 ${TextAppear("50px")};
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 1.6rem;
  }
`;

export default function MainPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("assets/background.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Header>
          <Logo />
          <MainText>SPS.Player</MainText>
          <SubText>항상 준비된 공간</SubText>
        </Header>
      </div>
      <Footer></Footer>
    </>
  );
}
