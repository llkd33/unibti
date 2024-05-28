import React from 'react';
import styled from 'styled-components';
import PangImage from "../assets/pangpang.png";
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Wrapper>
            <Header>나의 건강은 안전한가?</Header>
            <Title>나의 건강상태 체크하기</Title>
            <LogoImage>
              <img src={PangImage} className="rounded-circle" width={350} height={350} />
            </LogoImage>
            <Desc>웰니스 브랜드 굿스프링스와 함께 나의 건강MBTI를 araboja!</Desc>
            <Button>Start Test!</Button>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Header = styled.div`
  color: white;
  font-size: 40pt;
  font-family: "SimKyungha";
  height: 10vh;
  width: 100%;
  background: #ffa07a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 40pt;
  margin-top: 40px;
`;

const LogoImage = styled.div`
margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`;



