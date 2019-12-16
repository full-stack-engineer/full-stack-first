import icon from "../../assets/icon.svg";
import image from "../../assets/twitter.svg";
import React, { FC } from "react";
import LogInButton from "../../components/LogIn/LogInButton";
import LogInSNS from "../../components/LogIn/LogInSNS";
import { UserState } from "../../redux/states/userState";
import { SelectAction } from "../../redux/container/welcomeContainer";
import "./Welcome.scss";

type SelectProps = UserState & SelectAction;

const Welcome: FC<SelectProps> = (props: SelectProps) => {
  return (
    <div className="Welcome">
      <div className="Welcome__inner">
        <h1 className="Welcome__concept">
          「いま」やらないと
          <br />
          いけないことを
          <br />
          整理しよう
        </h1>
        <img className="Welcome__icon" src={icon} alt="dogressのアイコン" />
        <div className="Welcome__logInButtonMargin">
          <LogInButton
            type="submit"
            name="buttonText"
            value="アカウントを作成"
            buttonText="アカウント作成"
            onClick={() => props.selectCreateAccountButton()}
          />
        </div>
        <LogInButton
          type="submit"
          name="buttonText"
          value="ログイン"
          buttonText="ログイン"
          onClick={() => props.selectLogInButton()}
        />
        <p className="Welcome__text">または</p>
        <LogInSNS
          src={image}
          alt="Twitterロゴ"
          onClick={() =>
            (window.location.href =
              "https://dogress-api.herokuapp.com/api/v1/oauth/twitter")
          }
        />
      </div>
    </div>
  );
};

export default Welcome;
