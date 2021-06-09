import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 500px;
  height: 800px;

  h1 {
    color: #000;
    margin-top: 50px;
    margin-bottom: 25px;
  }
`;

export const Form = styled.form`
  width: 500px;
  height: 700px;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 500px;
  height: 80px;
  padding: 30px;
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

export const TextArea = styled.textarea`
  width: 500px;
  height: 160px;
  padding: 20px;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;
