import { Box } from 'components/Box';
import {
  ProfileName,
  Description,
  ProfileAvatar,
  ProfileTag,
  ProfileLocation,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Box
      pt={5}
      pb={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="profile"
      width={1}
    >
      <Description className="description">
        <ProfileAvatar
          className="avatar"
          src={avatar}
          alt={`Avatar ${username}`}
        ></ProfileAvatar>
        <ProfileName className="name">{username}</ProfileName>
        <ProfileTag className="tag">{`@${tag}`}</ProfileTag>
        <ProfileLocation className="location">{location}</ProfileLocation>
      </Description>
      <Box
        as="ul"
        bg="bgProfile"
        width={1 / 3}
        display="flex"
        borderBottomLeftRadius="sm"
        borderBottomRightRadius="sm"
        className="stats"
      >
        <ProfileStatsItem>
          <ProfileStatsLabel className="label">Followers</ProfileStatsLabel>
          <ProfileStatsQuantity className="quantity">
            {followers}
          </ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel className="label">Views</ProfileStatsLabel>
          <ProfileStatsQuantity className="quantity">
            {views}
          </ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel className="label">Likes</ProfileStatsLabel>
          <ProfileStatsQuantity className="quantity">
            {likes}
          </ProfileStatsQuantity>
        </ProfileStatsItem>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
