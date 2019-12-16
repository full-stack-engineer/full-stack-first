import React, { FC } from "react";
import "./Profile.scss";

interface ProfileInterface {
  name: string;
}

const Profile: FC<ProfileInterface> = props => {
  return (
    <div className="Profile">
      <p className="Profile__name">{props.name}</p>
    </div>
  );
};

export default Profile;
