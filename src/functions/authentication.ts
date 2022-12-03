import CryptoJS from "crypto-js";

export const decrypt = (text: string, secretKey: string): string => {
    return CryptoJS.AES.decrypt(text, secretKey).toString(CryptoJS.enc.Utf8);
};

export const encrypt = (text: string, secretKey: string): string => {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
};
