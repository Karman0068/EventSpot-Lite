import React from 'react'
import ProfilePictureSection from '../Components/GeneralComponents/ProfilePictureSection'
import MyProjectsBody from './MyProjectsBody';
import FlexboxContainer from '../Components/GeneralComponents/AddNewComponent';

function ProfilePageBody() {
  return (
    <>
        <ProfilePictureSection />
        <div>Name</div>
        <div>Info</div>
        <div>Contact</div>
        <div>Connections</div>
        <MyProjectsBody />
    </>
    
  )
}

export default ProfilePageBody;
