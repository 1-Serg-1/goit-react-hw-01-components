import { FriendItem, FriendStatus, FriendName } from './FriendListItem.styled';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendItem className="item" key={id}>
        <FriendStatus className="status" isOnline={isOnline}></FriendStatus>
        <Box
          as="img"
          bg="bgProfile"
          borderRadius="sm"
          className="avatar"
          src={avatar}
          alt={name}
          width="48"
        />
        <FriendName className="name">{name}</FriendName>
      </FriendItem>
    );
  });
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
