import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  width: 400px;
  height: 315px;
  margin: 0 auto;
  border-radius: 8px;

  a {
    color: #db1313;
  }

  button {
    width: 362px;
    height: 80px;
    background-color: #387ea8;
    text-decoration: underline;

    &:hover {
      background-color: #4396ca;
    }
  }
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 362px;
  height: 80px;
  padding: 15px;
  font-size: 20px;
  font-weight: 300;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  color: #000;
`;

export const SubmitInput = styled(Input)`
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: #f55e61;
  cursor: pointer;

  &:hover {
    background-color: #d95255;
  }
`;

export const Separator = styled.div`
  align-items: center;
  text-align: center;
  margin: 20px 16px;
  border-bottom: 1px solid #dadde1;
  display: flex;
`;

export const Text = styled.div`
  padding: 50px;

  h1 {
    color: #d95255;
  }

  h2 {
    color: #222;
  }
`;

export const Select = styled.select`
  font-size: 20px;
  width: 172.5px;
  height: 60px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  border: 0 0 1px 0px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 362px;
  height: 60px;

  input {
    width: 172.5px;
    margin: 0;
    height: 60px;
  }
`;
