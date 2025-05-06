import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCards from '../ProfileCards/ProfileCards';
import './ProfileSide.css';
import FollowersCard from '../FollowersCard/FollowersCard';

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCards/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide