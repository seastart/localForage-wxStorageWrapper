/// <reference path="../node_modules/miniprogram-api-typings/index.d.ts" />

import { StorageInfoType, batchSetStorageType } from './index.d'
/**
 * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
 * @param key 本地缓存中指定的 key
 * @param value 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 */
export function setStorageSync(key: string, value: any) {
  return wx.setStorageSync(key, value)
}

/**
 * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
 * @param key 本地缓存中指定的 key
 * @param data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 * @param encrypt 是否开启加密存储。只有异步的 setStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 加密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true。此外，由于加密后的数据会比原始数据膨胀1.4倍，因此开启 encrypt 的情况下，单个 key 允许存储的最大数据长度为 0.7MB，所有数据存储上限为 7.1MB
 * @returns 
 */
export  function setStorage(key: string, data: any, encrypt?: boolean): Promise<any>  {
  return new Promise((resolve, reject) => {
      wx.setStorage({
        key,
        data,
        encrypt,
        success: () => {
          resolve({})
        },
        fail: () => {
          reject({})
        },
      })
  })
}

/**
 * 根据 URL 销毁存在内存中的数据
 * @param url 需要销毁的二进制数据 URL
 */
export function revokeBufferURL(url: string) {
  return wx.revokeBufferURL(url)
}

/**
 * removeStorage 的同步版本
 * @param key 本地缓存中指定的 key
 */
export function removeStorageSync(key: string) {
  return wx.removeStorageSync(key)
}

/**
 * 从本地缓存中移除指定 key。
 * @param key 本地缓存中指定的 key
 * @returns 
 */
export  function removeStorage(key: string): Promise<any>  {
  return new Promise((resolve, reject) => {
      wx.removeStorage({
        key,
        success: () => {
          resolve({})
        },
        fail: () => {
          reject({})
        },
      })
  })
}

/**
 * 从本地缓存中同步获取指定 key 的内容。
 * @param key 本地缓存中指定的 key
 * @returns any key对应的内容
 */
export function getStorageSync(key: string): any {
  return wx.getStorageSync(key);
}

/**
 * getStorageInfo 的同步版本
 * @returns 
 * keys 当前 storage 中所有的 key
 * currentSize 当前占用的空间大小, 单位 KB
 * limitSize 限制的空间大小，单位 KB
 */
export function getStorageInfoSync(): StorageInfoType {
  return wx.getStorageInfoSync();
}

/**
 * 异步获取当前 storage 的相关信息。
 * @returns 
 * keys 当前 storage 中所有的 key
 * currentSize 当前占用的空间大小, 单位 KB
 * limitSize 限制的空间大小，单位 KB
 */
export  function getStorageInfo(): Promise<StorageInfoType>  {
  return new Promise((resolve, reject) => {
      wx.getStorageInfo({
        success: (res: StorageInfoType) => {
          resolve(res)
        },
        fail: () => {
          reject({})
        },
      })
  })
}

/**
 * 从本地缓存中异步获取指定 key 的内容。
 * @param key 本地缓存中指定的 key
 * @param encrypt 是否开启加密存储。只有异步的 getStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 解密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
 * @returns 
 */
export  function getStorage(key: string,encrypt?: boolean): Promise<any>  {
  return new Promise((resolve, reject) => {
      wx.getStorage({
        key,
        encrypt,
        success: (res: any) => {
          resolve(res.data);
        },
        fail: () => {
          reject({})
        },
      })
  })
}

/**
 * 根据传入的 buffer 创建一个唯一的 URL 存在内存中
 * @returns 
 */
export function createBufferURL(data: any): void {
  return wx.createBufferURL(data);
}

/**
 * clearStorage 的同步版本
 * @returns 
 */
export function clearStorageSync(): void {
  return wx.clearStorageSync();
}

/**
 * 清理本地数据缓存。
 * @returns 
 */
export  function clearStorage(): Promise<any>  {
  return new Promise((resolve, reject) => {
      wx.clearStorage({
        success: () => {
          resolve({});
        },
        fail: () => {
          reject({})
        },
      })
  })
}

/**
 * 将数据批量存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
 * @param key key 本地缓存中指定的 key
 * @param value data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 * @returns 
 */
export function batchSetStorageSync(arr: Array<batchSetStorageType>): void {
  return wx.batchSetStorageSync(arr as any);
}

/**
 * 将数据批量存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
 * @param key key 本地缓存中指定的 key
 * @param value data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 * @returns 
 */
export  function batchSetStorage(arr: Array<batchSetStorageType>): Promise<any>  {
  return new Promise((resolve, reject) => {
      wx.batchSetStorage({
        kvList: arr,
        success: () => {
          resolve({});
        },
        fail: () => {
          reject({})
        },
      })
  })
}

/**
 * 从本地缓存中同步批量获取指定 key 的内容。
 * @param arr 本地缓存中指定的 key 数组
 * @returns key对应的内容
 */
export function batchGetStorageSync(arr: Array<string>) {
  return wx.batchGetStorageSync(arr);
}

/**
 * 从本地缓存中异步批量获取指定 key 的内容。
 * @param arr 本地缓存中指定的 key 数组
 * @returns 
 */
export  function batchGetStorage(arr: Array<string>): Promise<any>  {
  return new Promise((resolve, reject) => {
      wx.batchGetStorage({
        keyList: arr,
        success: () => {
          resolve({});
        },
        fail: () => {
          reject({})
        },
      })
  })
}



