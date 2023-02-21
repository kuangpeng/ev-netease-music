import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'

const rendererPath = resolve(process.cwd(), './src/renderer')

/** @type {import('vite').UserConfig} */
export default {
  root: rendererPath,
  server: {
    port: 8800
  },
  resolve: {
    alias: {
      '@renderer': resolve(rendererPath, './src'),
      '@api': resolve(rendererPath, './src/api'),
      '@components': resolve(rendererPath, './src/components')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true
      },
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      dirs: [rendererPath],
      dts: resolve(rendererPath, './src/auto-imports.d.ts')
    }),
    Components({
      dts: resolve(rendererPath, './src/components.d.ts'),
      resolvers: [NaiveUiResolver()]
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(rendererPath, './src/icons/svg')],
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
      customDomId: '__svg__icons__dom__'
    }),
    UnoCSS({
      presets: [presetUno()]
    })
  ]
}
