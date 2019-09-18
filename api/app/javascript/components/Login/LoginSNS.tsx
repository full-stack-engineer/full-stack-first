import React from "react";
import "./LoginSNS.scss";

interface LoginSNSInterface {
    href: string;
    src: string;
    alt?: string;
}

const LoginInputBox: React.FC<LoginSNSInterface> = props => {
    return (
        <div className="LoginSNS">
            <p className="LoginSNS__text">または</p>
            <a className="LoginSNS__link" href={props.href}>
                <button className="LoginSNS__button">
                    <img src={props.src} alt={props.alt} />
                </button>
            </a>
        </div >
    )
}

export default LoginInputBox;