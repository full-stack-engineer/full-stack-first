import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const loginActions = {
    inputEmail: actionCreator<string>('INPUT_EMAIL'),
    inputPassword: actionCreator<string>('INPUT_PASSWORD')
};