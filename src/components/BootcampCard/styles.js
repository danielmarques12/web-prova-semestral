import styled from 'styled-components';

export const Container = styled.div`
  width: 279px;
  height: 440px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-bottom: 50px;

  img {
    width: 279px;
    height: 134px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .button {
    width: 240px;
    margin: 0 auto;

    button {
      width: 100%;
      /* background-color: #387ea8;

      &:hover {
        background-color: #4396ca;
      } */
    }
  }
`;

export const Text = styled.div`
  width: 85%;
  margin: 20px auto 75px auto;
  text-align: center;

  h3 {
    font-size: 24px;
    color: #222;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    color: #222;
    font-weight: 500;
  }
`;
