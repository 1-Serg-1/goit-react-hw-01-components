import styled from 'styled-components';

export const Description = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  // align-content: center;
  width: calc(100% / 3);
  gap: 16px;
  border-top-left-radius: ${p => p.theme.radii.sm};
  border-top-right-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.white};
`;
export const ProfileAvatar = styled.img`
  width: 100%;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.bgProfile};
`;
export const ProfileName = styled.p`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;
export const ProfileTag = styled.p`
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const ProfileLocation = styled.p`
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: calc(100% / 3);
  padding-top: 10px;
  padding-bottom: 10px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
`;
export const ProfileStatsLabel = styled.span`
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const ProfileStatsQuantity = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;
