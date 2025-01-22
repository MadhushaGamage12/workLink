import React from 'react';
import ProfileHeader from "./ProfileHeader";
 // Rename the imported MainContent

function MainContent() {
  return (
    <main className="main-content">
      <div className="profile-container">
        <ProfileHeader />
      </div>
    </main>
  );
}

export default MainContent;
