import styled from 'styled-components';

export const TransactionTableThead = styled.thead`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  height: 40px;
  background-color: ${p => p.theme.colors.bgTableThead};
`;

export const TransactionTableTr = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.bgRowEven};
  }
`;

export const TransactionTableTd = styled.td`
  color: ${p => p.theme.colors.primary};
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
