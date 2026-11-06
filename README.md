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
- `assets/family-dawn.webp`：父女透明图，预先调整饱和度、左上方晨光与轻微边缘柔化后压缩为 288×446 WebP；网页不运行人物滤镜，原版压缩图保留于 `family-cutout-v2.webp`。
- `assets/family-shadow.webp`：根据人物透明轮廓生成的地面投影，柔化与渐隐已烘焙到图片中。
- `assets/ridge-light.svg`：与山景对齐的晨光层，日出过程中仅动画透明度。
- `assets/dao-calligraphy.ttf`：Ma Shan Zheng 的「道」单字子集，仅用于主标题；授权见 `assets/OFL-MaShanZheng.txt`。
- `assets/dao-serif.ttf`：Noto Serif SC 500 的页面用字子集，自托管；授权见 `assets/OFL-NotoSerifSC.txt`。新增中文文案时，未包含的字会使用系统衬线字体。
- `assets/daopen-share.jpg`：1200×630 的独立分享封面，供 Open Graph 与 Twitter Card 抓取，首页不加载此图。

文字直接呈现，不做淡入或位移动画；日出和晨光用 10 秒展开一次后静止。页面无 JavaScript 时仍显示完整静态画面；开启系统“减少动态效果”时不播放动画。旧版视频与 `remotion-bg/` 保留为素材源，新首页不再加载它们。

手机端使用稳定视口高度，分别适配 700px 以下短屏和 850px 以上长屏；最低画布高度为 520px，极矮视口仍允许纵向滚动以保留完整内容。

## 素材维护

人物图可通过 `python3 scripts/refine-family.py` 重新生成，开发环境需要 Pillow 和 NumPy；这些依赖不参与网页运行。

分享封面来自当前页面的静态构图。启动本地预览并用 Playwright CLI 打开后，将 `scripts/render-share.js` 的函数内容传给 `run-code` 即可重新导出。生成时等待字体与图片加载，临时套用 1200×630 构图，不修改首页样式。

分享元信息使用正式域名的绝对图片地址，上线后才可被外部平台抓取。各平台可能缓存旧预览；微信的实际卡片效果需上线后在微信内单独验证。

## 域名

对外地址为 https://www.daopen.ai/，`CNAME` 为 `www.daopen.ai`。推送到发布分支后，由 GitHub Pages 构建并部署。
