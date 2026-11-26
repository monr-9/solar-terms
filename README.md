# 二十四节气 · 中国人的时间美学

一个以「二十四节气」为主题的静态网站，共 7 个页面。
纯手写 HTML / CSS / JavaScript，配原创 SVG 与 AI 辅助水墨插画，无任何第三方依赖，断网也能完整打开。

## 页面结构

| 文件 | 页面 | 内容 |
|---|---|---|
| `index.html` | 首页 | 主题介绍、四季导览、四个内容入口 |
| `terms.html` | 节气总览 | 24 个节气按四季分组，支持按季节筛选 |
| `farming.html` | 节气农事 | 春耕、夏耘、秋收、冬藏，24 个节气的农事、农谚与农事小词典 |
| `customs.html` | 传统习俗 | 咬春、踏青、称人、消夏、贴秋膘、数九 |
| `food.html` | 节气食俗 | 春饼、梨、青团、香椿、谷雨茶、立夏蛋等 12 种时令食物 |
| `poetry.html` | 诗词雅集 | 6 首与节气相关的古诗词、赏析与节气关联 |
| `about.html` | 关于本站 | 设计理念、素材来源与版权说明、节气小测验 |

## 目录结构

```text
solar-terms-site/
├── index.html          首页
├── terms.html          节气总览
├── farming.html        节气农事
├── customs.html        传统习俗
├── food.html           节气食俗
├── poetry.html         诗词雅集
├── about.html          关于本站
├── css/
│   └── style.css       全站样式（单文件）
├── js/
│   └── main.js         交互脚本（单文件）
├── images/             6 张 SVG 图标插画 + 32 张 WebP 水墨配图
└── README.md
```

## 技术说明

- HTML5 语义化标签，页面间全部使用**相对路径**链接
- CSS Grid + Flexbox 响应式布局，适配桌面 / 平板 / 手机
- 原生 JavaScript：移动端菜单、滚动入场、四季筛选、小测验
- 首页与四季插画为原创 SVG；食俗、诗词、习俗、农事与总览页 32 张水墨配图由 AI 生成后人工挑选调色（`images/` 目录）
- 系统字体，不加载任何外部字体文件

## 本地预览

直接双击 `index.html` 用浏览器打开即可；
或在 VS Code 里右键 → `Open with Live Server`。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库（例如 `solar-terms`），**不要**勾选自动生成 README；
2. 把本文件夹里的**全部内容**上传到仓库根目录，确保 `index.html` 在根目录、不在子文件夹里；
3. 打开仓库的 **Settings → Pages**；
4. 「Build and deployment」选择 **Deploy from a branch**；
5. Branch 选 `main`，目录选 `/ (root)`，点 **Save**；
6. 等待约 1 分钟，访问 `https://你的用户名.github.io/solar-terms/`。

> 提示：GitHub Pages 区分大小写，文件名请保持全小写；不要使用中文文件名，避免部署后 404。

## 素材与版权

- 文字内容参考《月令七十二候集解》《二十四节气歌》及公开科普资料，结合个人理解整理撰写；
- 首页与四季插画、图标为原创 SVG 手绘；食俗、诗词、习俗与总览页配图由 AI 生成并经人工挑选裁切，未使用任何第三方图片；
- 页面可自由用于课程学习与交流。
