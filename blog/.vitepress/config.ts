import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

// 每页的文章数量
const pageSize = 10

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
    title: '☕ 浮记',
    base: '/blog/', // 精准打包到 /blog 子目录下，不惊动学术主页
    cacheDir: './node_modules/vitepress_cache',
    description: '学术之外的碎碎念',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://gausyu.github.io', // 底部版权声明链接指向你的仓库
        
        nav: [
            { text: '首页', link: '/' },
            { text: '分类', link: '/pages/category' },
            { text: '归档', link: '/pages/archives' },
            { text: '标签', link: '/pages/tags' },
            { text: '关于', link: '/pages/about' },
            { text: '学术主页 ↗', link: 'https://gausyu.github.io' } // 方便从日记本跳回主站
        ],
        search: {
            provider: 'local' // 开启极简的本地全文本搜索
        },
        outline: {
            label: '文章摘要'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/gausyu' } // 个人社交链接
        ]
    } as any,

    // 生产环境打包时，自动忽略草稿和私密笔记，非常适合写日记
    srcExclude: isProd
        ? [
              '**/trash/**/*.md',       // 排除所有 trash 目录下的文件
              '**/draft/**/*.md',       // 递归排除所有草稿
              '**/private-notes/*.md',  // 排除特定的私密文件
              'README.md'
          ]
        : ['README.md'],
    vite: {
        server: { port: 5000 }
    }
})