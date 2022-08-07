import { Box } from 'components/Box';
import { StatItem, StatLabel, StatPercentage } from './StatisticsList.styled';

export const StatisticsList = ({ stats }) => {
  return (
    <Box as="ul" display="flex" width={1 / 3} className="stat-list">
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatItem
            className="item"
            backgraundColor={getRandomHexColor()}
            key={id}
          >
            <StatLabel className="label">{label}</StatLabel>
            <StatPercentage className="percentage">
              {percentage}%
            </StatPercentage>
          </StatItem>
        );
      })}
    </Box>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
