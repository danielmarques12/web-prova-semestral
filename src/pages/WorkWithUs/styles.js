import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 1440px;
  height: 821px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 850px;
    height: 625px;
  }

  h1 {
    color: #000;
    font-size: 56px;
    line-height: 66px;
    margin-bottom: 60px;
  }
`;

export const Form = styled.form`
  width: 450px;
  height: 520px;
  text-align: center;

  button {
    width: 70%;
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 70%;
  height: 60px;
  padding: 15px;
  font-size: 17px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  color: #000;
`;
