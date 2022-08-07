import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendList } from './FriendList.styled';

export const FrendList = ({ friends }) => {
  return (
    <FriendList className="friend-list">
      <FriendListItem friends={friends} />
    </FriendList>
  );
};
