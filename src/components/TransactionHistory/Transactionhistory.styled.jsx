import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid black;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  & th {
    background-color: lightblue;
    font-weight: bold;
  }

  & tr:nth-child(even) {
    background-color: Lightgray;
  }

  & tr:nth-child(odd) {
    background-color: white;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: lightyellow;
  }
`;
