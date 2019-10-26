import React, { FC } from "react";
import "./LoginSNS.scss";

interface LoginSNSInterface {
    src: string;
    alt?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LoginInputBox: FC<LoginSNSInterface> = props => {
    return (
        <button
            className="LoginSNS"
            onClick={props.onClick}
        >
            <img
                src={props.src}
                alt={props.alt}
            />
        </button>
    )
}

export default LoginInputBox;