import styled from 'styled-components';

export const Container = styled.div``;

export const Text = styled.div`
  width: 800px;
  margin: 62.5px auto 0 auto;
  text-align: center;

  h1 {
    font-size: 24px;
    color: #222;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 18px;
    color: #222;
    font-weight: 500;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 931px;
  margin: 75px auto 0 auto;
`;
