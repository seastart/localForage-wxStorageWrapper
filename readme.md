node version >= 14.19

# 下载方式
`npm i @seastart/wx-storage-wrapper`
`yarn add @seastart/wx-storage-wrapper`

# 使用方式
```
import { getStorageSync, setStorageSync } from '@seastart/wx-storage-wrapper'
setStorageSync('data', '31232312');
const data = getStorageSync('data');
```