import React from 'react'
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCards.css';

const ProfileCards = () => {

    const ProfilePage = true;

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span>Sunil Ghate</span>
            <span>FullStack developer</span>
        </div>

        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>6,890</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>2</span>
                    <span>Following</span>
                </div>
                {ProfilePage && (
                    <>
                        <div className="vl">

                        </div>
                        <div className="follow">
                            <span>3</span>
                            <span>Post</span>
                        </div>
                    </>
                )}
            </div>
            <hr/>
        </div>
        {ProfilePage ? '' : <span>My Profile</span>}
    </div>
  )
}

export default ProfileCards