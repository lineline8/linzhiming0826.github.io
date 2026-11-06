# DAOPEN.AI

「道 · 闻道 · 悟道 · 行道」的日出主题艺术首页，日期保留为 **2026.2.18**。

纯静态 HTML、CSS 和 JavaScript，可由 GitHub Pages 直接托管，无需构建。

## 本地预览

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173/。

## 页面资源

- `index.html`：内容与页面元信息。
- `assets/site.css`：响应式布局、配色和一次性日出动画。
- `assets/site.js`：自动播放日出、后台暂停和减少动态效果支持。
- `assets/landscape.svg`：矢量山景，无视频下载、滤镜动画或第三方脚本。
- `assets/family-cutout-v2.webp`：用户重新处理的父女透明图，裁去空白后压缩为 288×446 WebP，覆盖页面最大显示宽度的 3 倍像素密度。页面仅加载压缩版，原始大图未放入站点。
- `assets/ridge-light.svg`：与山景对齐的晨光层，日出过程中仅动画透明度。
- `assets/dao-serif.ttf`：Noto Serif SC 500 的页面用字子集，自托管；授权见 `assets/OFL-NotoSerifSC.txt`。新增中文文案时，未包含的字会使用系统衬线字体。

页面无 JavaScript 时仍显示完整静态画面；开启系统“减少动态效果”时不播放动画。旧版视频与 `remotion-bg/` 保留为素材源，新首页不再加载它们。

## 域名

对外地址为 https://www.daopen.ai/，`CNAME` 为 `www.daopen.ai`。推送到发布分支后，由 GitHub Pages 构建并部署。
