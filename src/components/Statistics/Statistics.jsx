import { StatisticsList } from './StatisticsList/StatisticsList';
import { Box } from 'components/Box';
import { StatsTitle } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="background"
      pt={4}
      pb={4}
      className="statistics"
    >
      {title && <StatsTitle className="title">{title}</StatsTitle>}
      <StatisticsList stats={stats}></StatisticsList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
