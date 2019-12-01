import * as CryptoJS from "crypto-js";
import { todoActions } from "../redux/actions/actionTypes"
import store from "../redux/store";

// 暗号化
const pwd = "password"
export const encrypt = (word: string): string => {
    return CryptoJS.AES.encrypt(word, pwd).toString();
}

// 復号化
export const decrypt = (word: string): string => {
    return CryptoJS.AES.decrypt(word, pwd).toString(CryptoJS.enc.Utf8);
}

// 値域を変化させる
export const map = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number => {
    let result = 0;
    result = value <= fromMin
        ? toMin
        : value >= fromMax
            ? toMax
            : (() => {
                let ratio = (toMax - toMin) / (fromMax - fromMin);
                return (value - fromMin) * ratio + toMin;
            })();

    return result;
};

// 文字加工
export const dateShaping = (value: string, select: string): string => {
    const processingDate = value.split("T");
    let date = "";
    switch (select) {
        case "day":
            date = processingDate[0].replace(/-/g, ".").substr(5, 5);
            break;
        case "time":
            date = processingDate[1].substr(0, 5);
            break;
    }
    return date;
}

// タスクの数を計算（直列処理）
export const getTodoCount = async (propsFunc: () => Promise<void>) => {
    await new Promise((resolve) => {
        propsFunc()
        store.subscribe(() => {
            if (store.getState().main.loading === false) {
                resolve()
            }
        })
    })
    await new Promise((resolve) => {
        const progressArray = store.getState().main.data;
        for (const i in progressArray) {
            progressArray[i].progress !== 100
                ? store.dispatch(todoActions.addDoProgress())
                : store.dispatch(todoActions.addDoneProgress())
        }
        resolve()
    })
}

// スクロール発生判定
export const scrollJudge = () => {
    let scrollTimerId: NodeJS.Timeout;
    store.dispatch(todoActions.scrollStart())
    clearTimeout(scrollTimerId)
    scrollTimerId = setTimeout(() => {
        store.dispatch(todoActions.scrollEnd())
    }, 100)
}