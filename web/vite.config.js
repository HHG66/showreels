import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  transpileDependencies: true,
  runtimeCompiler: true,
  resolve: {
    alias: {
       vue: 'vue/dist/vue.esm-bundler.js',// 增加这一行 ， 增加动态编译的能力
       '@':process.cwd()+'/src'
    }
  },
  publicPath:'../'

})

