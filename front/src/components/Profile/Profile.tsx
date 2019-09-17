import React from "react";
import "./Profile.scss";

interface ProfileInterface {
    src: string;
    alt?: string;
    name: string;
}

const Profile: React.FC<ProfileInterface> = props => {
    return (
        <div className="Profile">
            <img className="Profile__image" src={props.src} alt={props.alt} />
            <p className="Profile__name">{props.name}</p>
        </div>
    )
}

export default Profile;