<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 个人主页项目说明

这是一个基于 React + Vite + Tailwind CSS 的个人主页，适合展示个人简介、项目作品、论文、博客与联系方式。

## 页面风格

- 视觉风格：深色科技感（zinc 灰阶 + 渐变高光）
- 版式结构：单页滚动式，含 About / Projects / Blog / Paper / Demo / Contact
- 动效设计：大量使用 Motion 动画（渐入、位移、悬停反馈）
- 交互体验：自定义光标、星轨背景、毛玻璃卡片与 Bento Grid 布局
- 响应式：桌面与移动端均可访问，导航栏支持移动端折叠菜单

## 快速访问

### 1) 本地开发（最快）

前置条件：Node.js 18+

1. 安装依赖

    npm install

2. 启动开发服务器（默认端口 3000）

    npm run dev

3. 浏览器打开

    http://localhost:3000

### 2) 本地构建预览（接近线上）

1. 构建产物

    npm run build

2. 本地预览构建结果

    npm run preview

## 如何部署

本项目是纯前端静态站点，构建后发布 dist 目录即可。

### 方案 A：GitHub Pages（推荐）

适合你当前仓库名为 pekingdoncic.github.io 的场景。

1. 推送代码到 GitHub 仓库
2. 在仓库 Settings -> Pages 中启用 GitHub Pages
3. 使用 GitHub Actions 自动构建并发布（推荐）

可在仓库新增 .github/workflows/deploy.yml：

name: Deploy to GitHub Pages

on:
   push:
      branches: ["main"]
   workflow_dispatch:

permissions:
   contents: read
   pages: write
   id-token: write

concurrency:
   group: pages
   cancel-in-progress: true

jobs:
   build:
      runs-on: ubuntu-latest
      steps:
         - name: Checkout
            uses: actions/checkout@v4
         - name: Setup Node
            uses: actions/setup-node@v4
            with:
               node-version: 20
               cache: npm
         - name: Install
            run: npm ci
         - name: Build
            run: npm run build
         - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
               path: dist

   deploy:
      environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
      runs-on: ubuntu-latest
      needs: build
      steps:
         - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4

部署成功后，通常可以通过以下地址访问：

https://pekingdoncic.github.io/

### 方案 B：Vercel / Netlify

1. 导入仓库
2. 构建命令填写：npm run build
3. 输出目录填写：dist
4. 点击 Deploy 完成发布

## 常用命令

- 启动开发：npm run dev
- 生产构建：npm run build
- 本地预览：npm run preview
- 类型检查：npm run lint

## 目录结构

src/
- components/       页面组件（Hero、Navbar、BentoGrid 等）
- App.tsx           页面主结构
- index.css         全局样式与主题变量
- constants.ts      文案与数据配置

---

如果你希望，我还可以继续帮你补一版「一键部署」脚本（例如自动发布到 GitHub Pages），让每次 push main 都自动上线。
