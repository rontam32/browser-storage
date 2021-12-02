import * as originalStore2 from 'store2';
import * as cookiesJs from 'js-cookie';
import '../dist/main';
declare namespace store {
    const local: StoreAPI;
    const session: originalStore2.StoreAPI;
    function set(key: string, value: any, expiration: number): any;
    interface StoreAPI {
        set(key: string, value: any, expiration: number): any;
    }
}
export declare const store2WithExtension: typeof store & typeof originalStore2;
export declare class BrowserStorage {
    static sessionStorage: originalStore2.StoreAPI;
    static localStorage: store.StoreAPI & originalStore2.StoreAPI;
    static cookieStorage: cookiesJs.CookiesStatic<object> & {
        noConflict?(): cookiesJs.CookiesStatic<object>;
    };
}
export {};
