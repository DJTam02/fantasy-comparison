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
}

export const getConsumerKey = (): string => {
    return import.meta.env.VITE_FANTASY_CONSUMER_KEY;
};

export const getTokenRequestHeader = (secretKey: string): string => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(getConsumerKey() + ":" + decrypt(getSecretKey(), secretKey)));
}
