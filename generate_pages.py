#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
章节页面生成脚本
从markdown文件中提取内容并生成HTML页面
"""

import re
import os

# 章节信息
chapters_info = [
    (1, "你自己干最多,团队却没成长"),
    (2, "业绩好的人,为什么不能提拔"),
    (3, "你是在管理,还是在传话"),
    (4, "公司出问题,先反思自己"),
    (5, "你的目标,团队听得懂吗"),
    (6, "新人没干劲,老人没激情怎么办"),
    (7, "目标定了就不能改?"),
    (8, "下属问你\"能给这个折扣吗\""),
    (9, "好业绩=努力+这个被忽视的因素"),
    (10, "6个月评价周期,别等年底算总账"),
    (11, "下属说\"工资太少\",别急着辩解"),
    (12, "为什么大家爱打游戏,不爱上班"),
    (13, "激发竞争,为何团队反而垮了"),
    (14, "你必须给团队讲这件事"),
    (15, "让下属记日记,90天后判若两人"),
    (16, "客户提无理要求,你护不护下属"),
    (17, "培养3年后离开的员工,值吗"),
    (18, "批评和发火,是两件事"),
    (19, "8个人干出12个人的活,怎么做到"),
    (20, "下属不在眼前,怎么督导?"),
    (21, "没人能帮你决策时,怎么办")
]

def read_markdown_file(file_path):
    """读取markdown文件"""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def extract_chapter_content(markdown_content, day_number):
    """从markdown中提取指定章节的内容"""
    # 分割所有章节 - 使用中文冒号 :
    pattern = r'# Day \d+：'
    splits = re.split(pattern, markdown_content)

    # splits[0] 是前面的导读等内容
    # splits[1] 对应 Day 1, splits[2] 对应 Day 2, 以此类推

    if day_number < len(splits):
        content = splits[day_number].strip()
        # 去掉末尾的分隔线
        content = re.sub(r'\n---+\s*$', '', content)
        # 提取第一行作为标题
        lines = content.split('\n', 1)
        if len(lines) > 0:
            title = lines[0].strip()
            body = lines[1] if len(lines) > 1 else ''
            return title, body.strip()
    return None, None

def markdown_to_html(content):
    """简单的markdown到HTML转换"""
    # 处理标题
    content = re.sub(r'^## (.+)$', r'<h2>\1</h2>', content, flags=re.MULTILINE)
    content = re.sub(r'^### (.+)$', r'<h3>\1</h3>', content, flags=re.MULTILINE)

    # 处理特殊框
    content = re.sub(
        r'^## ⚠️ (.+)$',
        r'<div class="warning-box"><h3>⚠️ \1</h3>',
        content,
        flags=re.MULTILINE
    )
    content = re.sub(
        r'^## 💰 (.+)$',
        r'<div class="tip-box"><h3>💰 \1</h3>',
        content,
        flags=re.MULTILINE
    )

    # 处理粗体
    content = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content)

    # 处理列表
    lines = content.split('\n')
    html_lines = []
    in_list = False

    for line in lines:
        if line.strip().startswith('- '):
            if not in_list:
                html_lines.append('<ul>')
                in_list = True
            item = line.strip()[2:]
            html_lines.append(f'<li>{item}</li>')
        elif line.strip().startswith(('1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')):
            if not in_list:
                html_lines.append('<ol>')
                in_list = True
            item = re.sub(r'^\d+\.\s+', '', line.strip())
            html_lines.append(f'<li>{item}</li>')
        else:
            if in_list:
                # 判断是否为ul或ol
                if len(html_lines) > 0 and '<li>' in str(html_lines[-1]):
                    # 简单检查:如果上一个li是用-开始的就用ul,否则用ol
                    html_lines.append('</ul>')
                else:
                    html_lines.append('</ul>')
                in_list = False

            if line.strip():
                if not line.strip().startswith('<'):
                    html_lines.append(f'<p>{line.strip()}</p>')
                else:
                    html_lines.append(line)
            else:
                html_lines.append('')

    if in_list:
        html_lines.append('</ul>')

    return '\n'.join(html_lines)

def generate_html_template(day_number, title, content_html):
    """生成HTML页面"""
    # 判断是否需要添加CTA引导（每隔3-5讲）
    show_cta = day_number in [3, 6, 9, 12, 15, 18, 21]

    cta_html = ''
    if show_cta:
        cta_html = '''
            <!-- CTA引导 - 关注公众号 -->
            <div style="background: linear-gradient(135deg, #fff 0%, var(--bg-secondary) 100%); padding: 2rem; border-radius: var(--radius-lg); border: 2px solid var(--primary-color); margin: 3rem 0; box-shadow: var(--shadow-md);">
                <h3 style="text-align: center; font-size: 1.5rem; margin-bottom: 1rem; color: var(--primary-color); font-weight: 700;">
                    🎁 关注公众号,领取21天卡片版
                </h3>
                <p style="text-align: center; color: var(--text-secondary); font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.8;">
                    关注【公众号:黄赋】回复"<strong style="color: var(--primary-color);">21天</strong>"<br>
                    即可获得21天管理卡片版,方便每天打卡学习
                </p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; justify-items: center;">
                    <div style="text-align: center;">
                        <div style="background: white; padding: 0.75rem; border-radius: var(--radius-md); box-shadow: var(--shadow-md); display: inline-block;">
                            <img src="../images/公众号二维码.jpg" alt="公众号二维码" style="width: 150px; height: 150px; display: block; border-radius: var(--radius-sm);">
                        </div>
                        <p style="margin-top: 0.75rem; font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">公众号二维码</p>
                    </div>

                    <div style="text-align: center;">
                        <div style="background: white; padding: 0.75rem; border-radius: var(--radius-md); box-shadow: var(--shadow-md); display: inline-block;">
                            <img src="../images/黄赋的二维码.png" alt="黄赋微信" style="width: 150px; height: 150px; display: block; border-radius: var(--radius-sm);">
                        </div>
                        <p style="margin-top: 0.75rem; font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">交个朋友</p>
                    </div>
                </div>
            </div>
        '''

    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Day {day_number}: {title} - 创始人带团队21讲">
    <title>Day {day_number}: {title} - 创始人带团队21讲</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="../index.html" class="nav-brand">创始人带团队21讲</a>
            <button class="nav-toggle">☰</button>
            <ul class="nav-links">
                <li><a href="../index.html">返回首页</a></li>
                <li><a href="notes.html">我的笔记</a></li>
                <li><a href="cases.html">案例库</a></li>
            </ul>
        </div>
    </nav>

    <!-- 文章布局 -->
    <div class="article-layout">
        <!-- 侧边栏目录 -->
        <aside class="sidebar">
            <div class="toc-wrapper">
                <h3 class="sidebar-title">章节目录</h3>
                <ul class="toc-list">
                    <!-- 目录将通过JavaScript动态生成 -->
                </ul>
            </div>
        </aside>

        <!-- 文章内容 -->
        <article class="article-content" id="content">
            <header class="article-header">
                <div class="article-number">Day {day_number} / 21</div>
                <h1 class="article-title">{title}</h1>

                <!-- 分享按钮 -->
                <div style="margin-top: 1.5rem; display: flex; gap: 1rem; align-items: center;">
                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem;"
                            onclick="shareManager.generateShareCard({day_number}, '{title}')">
                        📤 分享此讲
                    </button>
                    <span style="color: var(--text-secondary); font-size: 0.875rem;">长按卡片保存分享</span>
                </div>
            </header>

            <div class="article-body">
{content_html}
            </div>

{cta_html}

            <!-- 导航按钮将通过JavaScript动态生成 -->
        </article>
    </div>

    <script src="../js/main.js"></script>
</body>
</html>'''

def main():
    """主函数"""
    # 文件路径
    markdown_file = '../创始人带团队21讲20251101.md'
    output_dir = 'pages'

    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)

    # 读取markdown文件
    print("读取markdown文件...")
    markdown_content = read_markdown_file(markdown_file)

    # 为每个章节生成HTML
    for day_number, title in chapters_info:
        print(f"生成 Day {day_number}: {title}...")

        # 提取章节内容
        extracted_title, content = extract_chapter_content(markdown_content, day_number)

        if content is None:
            print(f"警告: 无法提取 Day {day_number} 的内容")
            continue

        # 转换为HTML
        content_html = markdown_to_html(content)

        # 生成HTML文件
        html_content = generate_html_template(day_number, title, content_html)

        # 保存文件
        output_file = os.path.join(output_dir, f'day-{day_number:02d}.html')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html_content)

        print(f"  ✓ 已生成: {output_file}")

    print("\n全部完成!")
    print(f"共生成 {len(chapters_info)} 个HTML文件")

if __name__ == '__main__':
    main()
