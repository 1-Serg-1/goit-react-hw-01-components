import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  background-color: ${p => p.backgraundColor};
`;
export const StatLabel = styled.span`
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const StatPercentage = styled.span`
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
`;
