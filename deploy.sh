#!/bin/bash

# 轮椅辅助应用部署脚本

echo "=== 智能轮椅辅助应用部署脚本 ==="
echo "正在准备部署到Vercel..."

# 1. 确保所有更改已提交到Git
echo "检查是否有未提交的更改..."
if [[ -n $(git status -s) ]]; then
  echo "发现未提交的更改，正在添加..."
  git add .
  echo "请输入提交信息:"
  read commit_msg
  git commit -m "$commit_msg"
  echo "更改已提交到Git"
else
  echo "没有发现未提交的更改"
fi

# 2. 推送到GitHub
echo "正在推送更改到GitHub..."
git push
if [ $? -eq 0 ]; then
  echo "成功推送到GitHub"
else
  echo "推送到GitHub失败，请检查网络或权限"
  exit 1
fi

# 3. 部署到Vercel
echo "正在部署到Vercel..."
echo "注意: 如果你没有安装Vercel CLI，可能需要先运行 'npm install -g vercel'"

# 检查vercel是否安装
if ! command -v vercel &> /dev/null; then
  echo "未找到Vercel CLI，请先运行 'npm install -g vercel'"
  exit 1
fi

# 部署到Vercel (生产环境)
vercel --prod

if [ $? -eq 0 ]; then
  echo "=== 部署完成! ==="
  echo "您的网站已经成功部署到Vercel"
  echo "访问 https://cmg-wheelchair-app.vercel.app 查看部署结果"
else
  echo "Vercel部署失败，请检查错误信息"
  exit 1
fi

exit 0 