import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 1440px;
  height: 821px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 850px;
    height: 625px;
  }
`;

export const About = styled.div`
  color: #000;
  width: 422px;

  h1 {
    font-size: 56px;
    line-height: 66px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 152.3%;
    margin: 40px 0;
  }
`;
