import React, { FC } from "react";
import classNames from "classnames";
import { mainButtonActions } from "../../redux/actions/actionTypes";
import store from "../../redux/store";
import "./TransformButton.scss";

interface TransformButtonInterface {
  addClassName?: string;
  onClick?: any;
  listFlag?: boolean;
}

const TransformButton: FC<TransformButtonInterface> = props => {
  const classNameForTransformButton = classNames("TransformButton", {
    "is-open": props.listFlag === true
  });

  return (
    <button
      className={classNameForTransformButton}
      onClick={() =>
        props.listFlag
          ? store.dispatch(mainButtonActions.pushCloseButton())
          : props.onClick()
      }
    >
      <div className="TransformButton__inner">
        <span className="TransformButton__top" />
        <span className="TransformButton__middle" />
        <span className="TransformButton__bottom" />
      </div>
    </button>
  );
};

export default TransformButton;
