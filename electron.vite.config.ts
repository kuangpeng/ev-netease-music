import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'

const rendererPath = resolve(process.cwd(), './src/renderer')

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@api': resolve(rendererPath, './src/api'),
        '@components': resolve(rendererPath, './src/components')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ],
        dirs: ['./src/renderer/'],
        dts: './src/auto-imports.d.ts'
      }),
      Components({
        dts: './src/components.d.ts',
        resolvers: [NaiveUiResolver()]
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [ resolve(process.cwd(), './src/renderer/src/icons/svg') ],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',

        /**
         * custom insert position
         * @default: body-last
         */
        inject: 'body-last',

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
      UnoCSS({
        presets: [
          presetUno()
        ],
      }),
    ]
  }
})
