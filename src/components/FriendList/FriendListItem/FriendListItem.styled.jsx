import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 250px;
  padding: 10px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  background-color: ${p => p.theme.colors.white};
`;
export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal} black;
  background-color: ${p => (p.isOnline ? '#00FF00' : '#FF0000')};
`;
export const FriendName = styled.p`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;
