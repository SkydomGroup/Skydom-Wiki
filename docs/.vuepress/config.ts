import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Skydom Wiki 主页',
    description: 'Skydom Wiki 主页',

    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            { text: '首页', link: '/' },
            { text: 'test', children: [ {text: '1', link: '/guide/test.html'} ] },
        ],
        sidebar: {
            '/guide/': [ 'test' ],
        },
    }),
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        mediumZoomPlugin({
            selector: 'img.img-zoomable',
            zoomOptions: {
                margin: 16
            }
        }),
    ],
})