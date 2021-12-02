import * as originalStore2 from 'store2';
import * as cookiesJs from 'js-cookie';
import '../dist/main.js';

/* tslint:disable:no-namespace */
declare namespace store {
  export const local: StoreAPI;
  export const session: originalStore2.StoreAPI;
  export function set(key: string, value: any, expiration: number): any;

  export interface StoreAPI {
    set(key: string, value: any, expiration: number): any;
  }
}

export const store2WithExtension: typeof store & typeof originalStore2 = originalStore2 as any;

export class BrowserStorage {
  static sessionStorage = originalStore2.session;
  static localStorage = store2WithExtension.local;
  static cookieStorage = cookiesJs;
}
