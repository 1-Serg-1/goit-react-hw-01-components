import { Box } from 'components/Box';
import {
  TransactionTableThead,
  TransactionTableTd,
  TransactionTableTr,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="table" width={1} p={4} className="transaction-history">
      <TransactionTableThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionTableThead>

      <Box as="tbody" bg="white">
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTableTr key={id}>
              <TransactionTableTd>{type}</TransactionTableTd>
              <TransactionTableTd>{amount}</TransactionTableTd>
              <TransactionTableTd>{currency}</TransactionTableTd>
            </TransactionTableTr>
          );
        })}
      </Box>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
