import styled from 'styled-components';

export const StatsTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  height: 100px;
  padding: 10px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.white};
`;
