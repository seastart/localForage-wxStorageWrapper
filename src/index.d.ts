declare namespace wxStorageWrapper {
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  export function setStorageSync(key: string, value: any): number
  export  function setStorage(key: string, data: any, encrypt?: boolean): Promise<any>
  export function revokeBufferURL(url: string):void
  export function removeStorageSync(key: string): void
  export  function removeStorage(key: string): Promise<any>
  export function getStorageSync(key: string): any
  export function getStorageInfoSync(): StorageInfoType
  export  function getStorageInfo(): Promise<StorageInfoType>
  export  function getStorage(key: string,encrypt?: boolean): Promise<any>
  export function createBufferURL(data: any): void
  export function clearStorageSync(): void
  export  function clearStorage(): Promise<any>
  export function batchSetStorageSync(arr: Array<batchSetStorageType>): void
  export  function batchSetStorage(arr: Array<batchSetStorageType>): Promise<any>
  export function batchGetStorageSync(arr: Array<string>): void
  export  function batchGetStorage(arr: Array<string>): Promise<any>
}

export type StorageInfoType = {
  keys: Array<string>;
  currentSize: number;
  limitSize: number;
}

export type batchSetStorageType = {
  key: string,
  value: any
}

declare module 'wx';

declare module 'wx-storage-wrapper' {
  export = wxStorageWrapper
}