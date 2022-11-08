import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      format: 'cjs', // 打包为commonjs格式
      file: 'dist/wx-storage-wrapper.cjs.js', // 打包后的文件路径名称
      name: 'storagewx' // 打包后的默认导出文件名称
    },
    {
      format: 'esm', // 打包为esm格式
      file: 'dist/wx-storage-wrapper.esm.js',
      name: 'storagewx'
    },
    {
      format: 'umd', // 打包为umd通用格式
      file: 'dist/wx-storage-wrapper.umd.js',
      name: 'storagewx',
      minifyInternalExports: true
    }
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    resolve(),
    commonjs(),
    terser(),
  ]
}