# Personal Website - Peler Yuan

[中文版说明](README.zh_CN.md)

## 项目介绍

> 一个现代化、优雅的个人主页，具有流体动画背景、响应式设计和流畅的页面过渡效果。

![preview](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMncyb3oyc21zc3czejU3cGk4M2tiNTdkaTM0N3FodGVpZmU5azNxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhXFCZEogq39rOpKUi/giphy.gif)

## 原项目信息

本项目基于 [SimonAKing/HomePage](https://github.com/SimonAKing/HomePage) 进行修改和定制。

**原项目地址：** https://github.com/SimonAKing/HomePage  
**原项目作者：** SimonAKing  
**原项目在线演示：** http://simonaking.com

感谢原作者的优秀工作！

## 主要修改

相比原项目，本版本进行了以下主要修改：

1. **图标库替换** - 将阿里巴巴矢量图标库替换为 Font Awesome 6.4.0
2. **新增分类** - 在 Blog 分类后添加了 Book 分类
3. **个性化配置** - 更新了个人信息和网站配置

## 安装和运行

```sh
git clone https://github.com/PelerYuan/personal-website.git
cd personal-website
npm install
npm run dev
```

## 项目特性

1. 高度封装页面中的所有信息
2. 使用 [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) 作为背景
3. 使用 `less` 作为 `css` 预处理器
4. 使用 `pug` 作为 `html` 预处理器
5. 使用 `gulp` 作为构建工具并配置构建脚本
6. 舒适的动画和美观的UI
7. 响应式设计，支持移动端
8. 引用的 `css` 和 `js` 文件总大小不超过 `18.5` kb！
9. 延迟响应页面切换事件
10. 还有很多功能等你来探索...

## 项目结构

根据项目特点，分为两个类别：
1. `intro` 首屏
2. `main` 次屏

相应的功能、样式和配置也基于此标准。

## 基础配置

`config.json` 文件中的每个键名都对应相应的组件名称。

例如：

```json
{
	"head": {
		"title": "Peler Yuan",
		"description": "Author:Peler Yuan,Category:Personal Website",
		"favicon": "favicon.ico"
	}
}
```

上述配置信息对应以下 `layout/head.pug` 组件中的信息：

```html
head
	title #{head.title}
	meta(charset="utf-8")
	meta(name="Description" content=`${head.description}`)
	link(rel="icon" href=`${head.favicon}` type="image/x-icon")
```

## 高级配置

### WebGL-Fluid-Simulation

首页使用 [WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/) 作为背景。

如果想要关闭，设置 `intro.background: false`。

### supportAuthor

配置信息中的 `supportAuthor` 选项默认开启，即支持作者。

所有支持项目如下：

1. 首页右上角会显示 `章鱼猫`
2. 控制台打印作者站点信息

如果想要关闭，设置 `intro.supportAuthor: false`。

### 图标替换

项目中的图标已替换为 Font Awesome 6.4.0。

如需自定义图标，可以：

1. 在 `src/css/common/icon.less` 文件中添加新的图标类
2. 在 `config.json` 文件中配置对应的 `main.ul.*.icon`

```css
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
	font-size: inherit;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
```

## 部署

在根目录执行 `npm run build` 后，项目文件将生成到 `dist` 目录。

然后可以将 dist 目录部署到你喜欢的服务器托管提供商。

以下是 `GithubPage` 的示例：

1. 创建 `userName.github.io` 仓库

2. ```sh
   cd dist
   git init
   git add -A
   git commit -am"init"
   git remote add origin https://github.com/userName/userName.github.io.git
   git push -f origin master
   ```

3. 然后在 GitHub 中设置仓库的 Github Page 选项。

4. 访问 `username.github.io` 浏览！

如果你的 `username.github.io` 仓库已经有内容，可以创建另一个仓库，比如 `blog`。

然后将占用的项目迁移到 `blog`，并为这个仓库设置 `GithubPage` 选项。

仓库变成了 `username.github.io/blog` 的子目录。

这样，你的 `username.github.io` 仓库就可以留给首页了！

## 技术栈

- **HTML 模板引擎：** Pug
- **CSS 预处理器：** Less
- **构建工具：** Gulp
- **图标库：** Font Awesome 6.4.0
- **背景动画：** WebGL-Fluid-Simulation
- **JavaScript：** ES6+ (通过 Babel 转译)

## 许可证

本项目基于原项目 [SimonAKing/HomePage](https://github.com/SimonAKing/HomePage) 的 LGPI-3.0 许可证。

## 致谢

- 感谢 [SimonAKing](https://github.com/SimonAKing) 提供的优秀原项目
- 感谢 [PavelDoGreat](https://github.com/PavelDoGreat) 的 WebGL-Fluid-Simulation 背景效果
- 感谢 Font Awesome 团队提供的图标库

---

**作者：** Peler Yuan  
**邮箱：** pelerlittlep@gmail.com  
**GitHub：** https://github.com/PelerYuan
