import React, { FC } from "react";
import LogInInputBox from "../../components/LogIn/LogInInputBox";
import LogInButton from "../../components/LogIn/LogInButton";
import ReturnButton from "../../components/Button/ReturnButton";
import { UserState } from "../../redux/states/userState";
import { UserAction } from "../../redux/container/logInContainer";
import store from "../../redux/store";
import { selectActions } from "../../redux/actions/actionTypes";
import "./LogIn.scss";

type LogInProps = UserState & UserAction;

const LogIn: FC<LogInProps> = (props: LogInProps) => {
  return (
    <div className="LogIn">
      <div className="LogIn__inner">
        <div className="LogIn__form">
          <ReturnButton
            onClick={() => store.dispatch(selectActions.backToTopButton())}
          />
          {props.createAccount && (
            <div className="LogIn__logInInputBoxMargin">
              <LogInInputBox
                placeholder="名前"
                type="text"
                name="text"
                onChange={e => props.inputName(e.target.value)}
              />
            </div>
          )}
          <div className="LogIn__logInInputBoxMargin">
            <LogInInputBox
              placeholder="メールアドレス"
              type="email"
              name="emailText"
              onChange={e => props.inputEmail(e.target.value)}
            />
          </div>
          <div className="LogIn__logInInputBoxMargin">
            <LogInInputBox
              placeholder="パスワード"
              type="password"
              name="passwordText"
              onChange={e => props.inputPassword(e.target.value)}
            />
          </div>
          {props.createAccount && (
            <LogInInputBox
              placeholder="パスワード再入力"
              type="password"
              name="passwordConfirmdText"
              onChange={e => props.inputPasswordConfirmed(e.target.value)}
            />
          )}
          <div className="LogIn__logInButtonMargin">
            <LogInButton
              type="submit"
              name="buttonText"
              value={props.createAccount ? "アカウント作成" : "ログイン"}
              buttonText={props.createAccount ? "アカウント作成" : "ログイン"}
              // 関数で発火させないと無限ループ
              onClick={() => {
                if (props.createAccount) {
                  props.postSignUp(
                    props.name,
                    props.email,
                    props.password,
                    props.passwordConfirmd
                  );
                } else {
                  props.postLogIn(props.email, props.password);
                }
                props.pushLogInButton();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
