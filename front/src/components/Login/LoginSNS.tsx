import React, { FC } from "react";
import "./LoginSNS.scss";

interface LoginSNSInterface {
    src: string;
    alt?: string;
}

const LoginInputBox: FC<LoginSNSInterface> = props => {
    return (
        <button className="LoginSNS">
            <img src={props.src} alt={props.alt} />
        </button>
    )
}

export default LoginInputBox;