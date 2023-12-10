import { GET_TOKEN_URL, REDIRECT_URI } from "@/constants/authentication";
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

export const fetchToken = (decryptKey: string, grant_type: string, refresh_token?: string, code?: string): Promise<Response> => {
    const reqBody: RequestBody = {
        redirect_uri: encodeURIComponent(REDIRECT_URI),
        client_id: getConsumerKey(),
        client_secret: decrypt(getSecretKey(), decryptKey),
        Authorization: "Basic " + getTokenRequestHeader(decryptKey),
        grant_type,
        refresh_token,
        code
    }
    return fetch(GET_TOKEN_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
  })
}

interface RequestBody {
    redirect_uri: string;
    client_id: string;
    client_secret: string;
    grant_type: string;
    Authorization: string;
    code?: string;
    refresh_token?: string;
}
