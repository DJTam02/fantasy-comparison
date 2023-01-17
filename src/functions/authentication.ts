import { ALPHA_NUMERIC_CHARS, CODE_VERIFIER_MAX_LENGTH, CODE_VERIFIER_MIN_LENGTH } from "@/constants/authentication";
import CryptoJS from "crypto-js";

export const decrypt = (text: string, secretKey: string): string => {
    return CryptoJS.AES.decrypt(text, secretKey).toString(CryptoJS.enc.Utf8);
};

export const encrypt = (text: string, secretKey: string): string => {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
};

export const getSecretKey = (): string => {
    return import.meta.env.VITE_FANTASY_SECRET_KEY;
};

export const getAppID = (): string => {
    return import.meta.env.VITE_FANTASY_APP_ID;
};

export const getConsumerKey = (): string => {
    return import.meta.env.VITE_FANTASY_CONSUMER_KEY;
};

export const getTokenRequestHeader = (secretKey: string): string => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(getConsumerKey() + ":" + decrypt(getSecretKey(), secretKey)));
};

export const getHashedCodeVerifier = (): string => {
    const length = Math.floor(Math.random() * (CODE_VERIFIER_MAX_LENGTH - CODE_VERIFIER_MIN_LENGTH));
    const charactersLength = ALPHA_NUMERIC_CHARS.length;
    let res = "";
    for (let i = 0; i < length; ++i) {
        res += ALPHA_NUMERIC_CHARS.charAt(Math.floor(Math.random() * charactersLength));
    }
    return CryptoJS.SHA256(res).toString(CryptoJS.enc.Hex);
};
