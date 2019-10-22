import React, { FC } from "react";
import "./ListButton.scss";

interface ListButtonInterface {
    addClassName?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ListButton: FC<ListButtonInterface> = props => {
    return (
        <button
            className={`ListButton ${props.addClassName}`}
            onClick={props.onClick}
        />
    )
}

export default ListButton;