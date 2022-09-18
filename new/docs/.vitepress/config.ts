import { defineConfig } from "vitepress";

export default defineConfig({
  title: "qian-cli",
  description: "快速搭建vue3开发环境的脚手架",
  head: [
    ["link", { rel: "icon", href: "/vue3.png" }],
    [
      "meta",
      { name: "keywords", content: "qian-cli 首页,qian-cli 文档,轩小浅" },
    ],
    ["meta", { name: "author", content: "轩小浅" }],
  ],
  themeConfig: {
    logo: "/vue3.png",
    siteTitle: "8pig积累",
    socialLinks: [
      { icon: "github", link: "https://github.com/8pig" },
    ],
    nav: [
      { text: "TS入门", link: "/typescript/index" },
      { text: "指南", link: "/guide/about" },
      {
        text: "配置参考",
        link: "/configDoc/baseConfig/baseDir",
      },
      { text: "更多说明", link: "/more/" },
    ],

    sidebar: {
      "/typescript/": [
        {
          text: "TS入门",
          items: [
            { text: "数据类型", link: "/typescript/data-type" },
            { text: "关键字", link: "/typescript/index" }
          ],
        },
      ],
      "/guide/": [
        {
          text: "介绍",
          items: [
            { text: "关于脚手架", link: "/guide/about" },

          ],
        },
      ],
      "/configDoc/": [
        {
          text: "基础配置",
          items: [{ text: "目录结构", link: "/configDoc/baseConfig/baseDir" }],
        },
        {
          text: "可选配置",
          items: [
            { text: "axios", link: "/configDoc/optionConfig/axios/axios" },
            { text: "pinia", link: "/configDoc/optionConfig/pinia/pinia" },
            { text: "scss", link: "/configDoc/optionConfig/scss/scss" },
          ],
        },
      ],
    },
  },
  markdown: {
    externalLinks: { target: "_blank", rel: "nofollow noopener noreferrer" },
  },
});
