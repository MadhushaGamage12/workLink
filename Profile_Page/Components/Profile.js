import React from "react";
import '../styles/styles.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile-image-container">
        <div className="profile-pic-container">
          <div className="placeholder-pic"></div>
        </div>
      </div>
      <div className="profile-info">
        <h2>Name:</h2>
        <p><strong>Title:</strong></p>
      </div>
    </section>
  );
}

export default Profile;
