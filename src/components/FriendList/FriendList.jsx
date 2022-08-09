import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendList } from './FriendList.styled';

export const FrendList = ({ friends }) => {
  return (
    <FriendList className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendList>
  );
};
