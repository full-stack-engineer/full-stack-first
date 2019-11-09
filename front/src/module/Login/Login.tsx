import React, { FC } from "react";
import LoginInputBox from "../../components/Login/LoginInputBox"
import LoginButton from "../../components/Login/LoginButton";
import ReturnButton from "../../components/Button/ReturnButton";
import { UserState } from "../../redux/states/userState";
import { UserAction } from "../../redux/container/loginContainer";
import store from "../../redux/store";
import { selectActions } from "../../redux/actions/actionTypes"
import "./Login.scss";

type LoginProps = UserState & UserAction;

const Login: FC<LoginProps> = (props: LoginProps) => {
    return (
        <div className="Login">
            <div className="Login__inner">
                <div className="Login__form">
                    <ReturnButton
                        onClick={() => store.dispatch(selectActions.backToTopButton())}
                    />
                    {props.createAccount &&
                        <div className="Login__loginInputBoxMargin">
                            <LoginInputBox
                                placeholder="名前"
                                type="text"
                                name="text"
                                onChange={e => props.inputName(e.target.value)}
                            />
                        </div>
                    }
                    <div className="Login__loginInputBoxMargin">
                        <LoginInputBox
                            placeholder="メールアドレス"
                            type="email"
                            name="emailText"
                            onChange={e => props.inputEmail(e.target.value)}
                        />
                    </div>
                    <div className="Login__loginInputBoxMargin">
                        <LoginInputBox
                            placeholder="パスワード"
                            type="password"
                            name="passwordText"
                            onChange={e => props.inputPassword(e.target.value)}
                        />
                    </div>
                    {props.createAccount &&
                        <LoginInputBox
                            placeholder="パスワード再入力"
                            type="password"
                            name="passwordConfirmdText"
                            onChange={e => props.inputPasswordConfirmed(e.target.value)}
                        />
                    }
                    <div className="Login__loginButtonMargin">
                        <LoginButton
                            type="submit"
                            name="buttonText"
                            value={props.createAccount ? "アカウント作成" : "ログイン"}
                            buttonText={props.createAccount ? "アカウント作成" : "ログイン"}
                            // 関数で発火させないと無限ループ
                            onClick={() => {
                                if (props.createAccount) {
                                    props.postSignUp(props.name, props.email, props.password, props.passwordConfirmd);
                                } else {
                                    props.postLogIn(props.email, props.password);
                                }
                                props.pushLoginButton();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;