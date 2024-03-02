import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Skydom Wiki 主页',
    description: '欢迎来到 Minecraft Skydom Server Wiki 主页',

    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            { text: '首页', link: '/' },
            { text: '玩家手册', children: [ {text: '简单介绍', link: '/guide/introduction.html'}, {text: '基本设定', link: '/guide/settings.html'}, {text: '指令列表', link: '/guide/command.html'}, {text: '常见问题', link: '/guide/faq.html'} ] },
            { text: '相关链接', children: [ {text: '官方网站', link: 'https://www.Skydom.cc'}, {text: 'QQ频道', link: 'https://pd.qq.com/s/ezzxi1mtb'}, {text: 'MCBBS', link: 'https://www.mcbbs.net/thread-1454867-1-1.html'}, {text: 'GitHub', link: 'https://GitHub.com/SkydomGroup/'}, {text: 'Minecraft Wiki', link: 'https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki'} ]}
        ],
        sidebar: {
            '/guide/': [ 'introduction', 'settings', 'command', 'faq' ],
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
        searchPlugin({
            locales: {
                '/': { placeholder: '搜索' }
            },
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
})