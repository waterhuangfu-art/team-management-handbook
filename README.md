# 创始人带团队21讲 - 网站说明文档

## 📋 项目简介

这是一个交互式的在线学习网站,用于呈现《创始人带团队21讲》管理手册。网站包含以下功能:

- ✅ 响应式设计,适配手机/平板/电脑
- ✅ 搜索功能,快速查找内容
- ✅ 阅读进度跟踪,自动保存学习进度
- ✅ 章节导航,快速跳转
- ✅ 现代化UI设计

## 📁 项目结构

```
website/
├── index.html              # 首页
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── main.js            # JavaScript功能
├── pages/
│   ├── day-01.html        # 第1讲
│   ├── day-02.html        # 第2讲
│   └── ...                # 其他章节
├── generate_pages.py      # 页面生成脚本
└── README.md              # 本文档
```

## 🚀 快速开始

### 方法1: 本地浏览

1. 用浏览器打开 `index.html` 文件即可开始使用
2. 无需安装任何依赖,所有功能都内置

### 方法2: 本地服务器运行

如果要测试完整功能,建议通过本地服务器运行:

**使用Python:**
```bash
cd website
python3 -m http.server 8000
```
然后访问: http://localhost:8000

**使用Node.js:**
```bash
cd website
npx serve
```

## 🌐 部署到网上

### 方案1: GitHub Pages (免费推荐)

1. **创建GitHub仓库**
   - 登录GitHub,创建新仓库
   - 仓库名建议: `team-management-handbook`

2. **上传代码**
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/team-management-handbook.git
   git push -u origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `main` 分支
   - 点击 Save

4. **访问网站**
   - 几分钟后,网站会发布到: `https://你的用户名.github.io/team-management-handbook/`

### 方案2: Vercel (免费,最简单)

1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 导入你的GitHub仓库
5. 点击 "Deploy"
6. 完成!会自动生成一个网址

### 方案3: Netlify (免费)

1. 访问 [netlify.com](https://netlify.com)
2. 将 `website` 文件夹拖拽到页面上
3. 等待部署完成
4. 会自动生成一个网址,可以自定义域名

### 方案4: 自己的服务器

如果有自己的服务器:

1. 将 `website` 文件夹上传到服务器
2. 配置Web服务器(Nginx/Apache)指向该目录
3. 访问你的域名即可

**Nginx配置示例:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/website;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## 🔧 自定义修改

### 修改内容

如果需要修改手册内容:

1. 编辑原始markdown文件: `../创始人带团队21讲20251101.md`
2. 重新运行生成脚本:
   ```bash
   python3 generate_pages.py
   ```
3. 所有HTML页面会自动更新

### 修改样式

- 编辑 `css/style.css` 文件
- 主要颜色定义在文件开头的 `:root` 部分
- 支持自定义主题色、字体等

### 修改功能

- 编辑 `js/main.js` 文件
- 可以添加或修改交互功能

## 💡 功能说明

### 搜索功能
- 在首页搜索框输入关键词
- 实时过滤章节卡片
- 支持标题和内容搜索

### 阅读进度
- 自动记录已完成的章节
- 使用浏览器本地存储(localStorage)
- 即使关闭浏览器也会保存进度
- 点击"标记为已完成"按钮记录进度

### 目录导航
- 侧边栏显示所有章节
- 点击快速跳转
- 当前章节高亮显示
- 已完成章节显示✓标记

### 响应式设计
- 自动适配不同屏幕尺寸
- 手机端优化的导航菜单
- 平板和电脑端显示侧边栏

## 📊 数据管理

### 清除学习进度

如果需要重置学习进度:

1. 打开浏览器开发者工具(F12)
2. 切换到 Console 标签
3. 输入以下命令:
   ```javascript
   progressManager.resetProgress()
   location.reload()
   ```

### 导出学习进度

未来可以添加导出功能,当前进度存储在:
```javascript
localStorage.getItem('management_handbook_progress')
```

## 🐛 常见问题

### Q: 为什么搜索不工作?
A: 请确保通过http(s)协议访问,而不是file://协议。建议使用本地服务器运行。

### Q: 进度没有保存?
A: 检查浏览器是否允许localStorage。隐私模式下可能不工作。

### Q: 样式显示不正常?
A: 检查css文件路径是否正确,确保相对路径正确。

### Q: 如何添加新章节?
A: 在markdown文件中添加新章节,然后重新运行 `generate_pages.py`。

## 📝 技术栈

- **HTML5**: 页面结构
- **CSS3**: 样式和响应式设计
- **JavaScript (ES6+)**: 交互功能
- **localStorage**: 本地数据存储
- **Python 3**: 页面生成脚本

## 🎨 浏览器兼容性

支持所有现代浏览器:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 许可证

欢迎转载分享

作者: 黄赋

## 🤝 技术支持

如有问题或建议,请:
1. 检查本文档的"常见问题"部分
2. 查看控制台是否有错误信息
3. 确保所有文件路径正确

## 🔄 更新日志

### v1.0.0 (2025-01-25)
- ✅ 初始版本发布
- ✅ 完整的21讲内容
- ✅ 搜索、进度追踪、导航功能
- ✅ 响应式设计
- ✅ 部署说明文档
