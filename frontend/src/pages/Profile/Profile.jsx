import React from 'react'
import './Profile.css';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import ProfileCards from '../../components/ProfileCards/ProfileCards';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
          <ProfileCards/>
          <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile