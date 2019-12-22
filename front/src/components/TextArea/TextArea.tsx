import React, { FC, useState } from "react";
import { useTransition, animated } from "react-spring";
import "./TextArea.scss";

interface TextAreaInterface {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaInterface> = props => {
  const [showTextArea, setShow] = useState(false);
  const transitionTextArea = useTransition(showTextArea, null, {
    from: { opacity: 0, top: 0 },
    enter: { opacity: 1, top: -24 },
    leave: { opacity: 0, top: 0 }
  });

  return (
    <div className="TextArea">
      {transitionTextArea.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              className="TextArea__outsidePlaceholder"
              style={props}
            >
              <h2>タスクを追加してみよう</h2>
            </animated.div>
          )
      )}
      <textarea
        className="TextArea__textArea"
        onChange={props.onChange}
        rows={2}
        placeholder={props.placeholder}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        required
      />
    </div>
  );
};

export default TextArea;
