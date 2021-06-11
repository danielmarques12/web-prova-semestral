import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: table;
  color: #000;
  text-align: center;

  h1 {
    margin: 62.5px 0;
  }
`;

export const Table = styled.table`
  margin: 0 auto;

  th,
  td {
    padding: 20px;
    font-size: 20px;
    border: 1px solid lightgray;
    border-radius: 2px;
    border-collapse: collapse;
  }
`;
