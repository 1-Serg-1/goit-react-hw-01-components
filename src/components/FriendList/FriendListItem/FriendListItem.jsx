import { FriendItem, FriendStatus, FriendName } from './FriendListItem.styled';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem className="item">
      <FriendStatus className="status" isOnline={isOnline}></FriendStatus>
      <Box
        as="img"
        bg="bgProfile"
        borderRadius="sm"
        className="avatar"
        src={avatar}
        alt={name}
        width="48px"
      />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
