declare module 'yahoo-fantasy' {
    export const YahooFantasy: YahooFantasy;
}

interface YahooFantasy {
    authCallback: (req: Request, cb: Callback) => Response;
    auth: (res: Response, state?: any) => Response;
    setUserToken: (token: string) => void;
    setRefreshToken: (token: string) => void;
    refreshToken: (cb: Callback) => void;
    api: 
}

type Callback = (e: Error | null, params: CallbackParams) => void;

interface CallbackParams {
    access_token: string;
    refresh_token: string;
    state: any;
};