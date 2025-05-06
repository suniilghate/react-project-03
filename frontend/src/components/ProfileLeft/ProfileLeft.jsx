import React from 'react'

import LogoSearch from '../../components/LogoSearch/LogoSearch';
import FollowersCard from '../../components/FollowersCard/FollowersCard';
import InfoCard from '../../components/InfoCard/InfoCard';

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft