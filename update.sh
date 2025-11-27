#!/bin/bash
# 快速更新网站脚本

echo "=== 网站更新工具 ==="
echo ""

# 进入项目目录
cd "/Users/huangfu/Library/Mobile Documents/com~apple~CloudDocs/AI007/小团队管理方法论/website"

# 检查是否有修改
if [[ -z $(git status -s) ]]; then
    echo "✓ 没有修改，无需更新"
    exit 0
fi

echo "📝 检测到以下修改:"
git status -s
echo ""

# 显示修改内容
read -p "是否查看详细修改? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git diff
fi

# 确认提交
read -p "请输入更新说明 (直接回车使用默认): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="更新网站内容"
fi

# 提交并推送
echo ""
echo "📦 正在提交..."
git add .
git commit -m "$commit_msg"

echo ""
echo "🚀 正在推送到GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 更新成功!"
    echo "📍 网站将在1-2分钟后生效"
    echo "🌐 访问: https://waterhuangfu-art.github.io/team-management-handbook/"
else
    echo ""
    echo "❌ 推送失败，请检查网络连接"
fi
