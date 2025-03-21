import { defineConfig } from 'vitepress'
import { head } from './head.mts'
import { nav } from './nav.mts'
import { sidebar } from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Effective Typescript',
  description: 'Effective Typescript 中文第二版',
  srcDir: 'docs',
  outDir: 'dist',
  head,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/rayadaschn' }],
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-PRESENT Huy',
    },
    algolia: {
      appId: 'NTNZJ1MM77',
      apiKey: '32c1f89c32f811b176f014a78c89eb92',
      indexName: 'Huy',
      placeholder: '请输入关键词',
    },
  },
})
