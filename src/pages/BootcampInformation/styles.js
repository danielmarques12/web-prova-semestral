import styled from 'styled-components';

export const Container = styled.div`
  width: 950px;
  margin: 200px auto 0 auto;
  display: flex;
  justify-content: space-between;

  img {
    width: 300px;
    height: 247px;
    border-radius: 10px;
  }
`;

export const LeftBar = styled.div`
  width: 435px;
  height: 420px;
  color: #000;
  text-align: center;
  margin-top: 100px;

  span {
    font-size: 23px;
    font-weight: 700;
  }

  p {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 400;
  }

  button {
    width: 400px;
  }
`;

export const RightBar = styled.div`
  width: 365px;
  height: 420px;
  text-align: center;
`;

export const Text = styled.div`
  /* width: 85%; */
  margin: 10px auto 75px auto;
  text-align: center;

  h3 {
    font-size: 30px;
    color: #222;
    margin-bottom: 20px;
    font-weight: 400;
  }

  p {
    font-size: 20px;
    color: #222;
    font-weight: 400;
  }
`;
