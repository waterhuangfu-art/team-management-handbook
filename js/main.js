// ==================== 全局配置 ====================
const STORAGE_KEY = 'management_handbook_progress';
const NOTES_KEY = 'management_handbook_notes';
const HIGHLIGHTS_KEY = 'management_handbook_highlights';
const SETTINGS_KEY = 'management_handbook_settings';
const STATS_KEY = 'management_handbook_stats';
const TOTAL_CHAPTERS = 21;

// ==================== 数据结构 ====================
const chapters = [
    { id: 1, title: '你自己干最多,团队却没成长', file: 'day-01.html' },
    { id: 2, title: '业绩好的人,为什么不能提拔', file: 'day-02.html' },
    { id: 3, title: '你是在管理,还是在传话', file: 'day-03.html' },
    { id: 4, title: '公司出问题,先反思自己', file: 'day-04.html' },
    { id: 5, title: '你的目标,团队听得懂吗', file: 'day-05.html' },
    { id: 6, title: '新人没干劲,老人没激情怎么办', file: 'day-06.html' },
    { id: 7, title: '目标定了就不能改?', file: 'day-07.html' },
    { id: 8, title: '下属问你"能给这个折扣吗"', file: 'day-08.html' },
    { id: 9, title: '好业绩=努力+这个被忽视的因素', file: 'day-09.html' },
    { id: 10, title: '6个月评价周期,别等年底算总账', file: 'day-10.html' },
    { id: 11, title: '下属说"工资太少",别急着辩解', file: 'day-11.html' },
    { id: 12, title: '为什么大家爱打游戏,不爱上班', file: 'day-12.html' },
    { id: 13, title: '激发竞争,为何团队反而垮了', file: 'day-13.html' },
    { id: 14, title: '你必须给团队讲这件事', file: 'day-14.html' },
    { id: 15, title: '让下属记日记,90天后判若两人', file: 'day-15.html' },
    { id: 16, title: '客户提无理要求,你护不护下属', file: 'day-16.html' },
    { id: 17, title: '培养3年后离开的员工,值吗', file: 'day-17.html' },
    { id: 18, title: '批评和发火,是两件事', file: 'day-18.html' },
    { id: 19, title: '8个人干出12个人的活,怎么做到', file: 'day-19.html' },
    { id: 20, title: '下属不在眼前,怎么督导?', file: 'day-20.html' },
    { id: 21, title: '没人能帮你决策时,怎么办', file: 'day-21.html' }
];

// ==================== 本地存储管理 ====================
class ProgressManager {
    constructor() {
        this.progress = this.loadProgress();
    }

    loadProgress() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : { completed: [], current: 1 };
    }

    saveProgress() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
    }

    markCompleted(chapterId) {
        if (!this.progress.completed.includes(chapterId)) {
            this.progress.completed.push(chapterId);
            this.saveProgress();
        }
    }

    isCompleted(chapterId) {
        return this.progress.completed.includes(chapterId);
    }

    setCurrentChapter(chapterId) {
        this.progress.current = chapterId;
        this.saveProgress();
    }

    getCurrentChapter() {
        return this.progress.current;
    }

    getCompletedCount() {
        return this.progress.completed.length;
    }

    getProgressPercentage() {
        return Math.round((this.progress.completed.length / TOTAL_CHAPTERS) * 100);
    }

    resetProgress() {
        this.progress = { completed: [], current: 1 };
        this.saveProgress();
    }
}

const progressManager = new ProgressManager();

// ==================== 笔记管理 ====================
class NoteManager {
    constructor() {
        this.notes = this.loadNotes();
    }

    loadNotes() {
        const data = localStorage.getItem(NOTES_KEY);
        return data ? JSON.parse(data) : {};
    }

    saveNotes() {
        localStorage.setItem(NOTES_KEY, JSON.stringify(this.notes));
    }

    addNote(chapterId, content, selection = '') {
        if (!this.notes[chapterId]) {
            this.notes[chapterId] = [];
        }
        this.notes[chapterId].push({
            id: Date.now(),
            content: content,
            selection: selection,
            timestamp: new Date().toISOString()
        });
        this.saveNotes();
    }

    deleteNote(chapterId, noteId) {
        if (this.notes[chapterId]) {
            this.notes[chapterId] = this.notes[chapterId].filter(n => n.id !== noteId);
            this.saveNotes();
        }
    }

    getNotes(chapterId) {
        return this.notes[chapterId] || [];
    }

    getAllNotes() {
        return this.notes;
    }

    getTotalNotesCount() {
        return Object.values(this.notes).reduce((sum, notes) => sum + notes.length, 0);
    }
}

const noteManager = new NoteManager();

// ==================== 高亮管理 ====================
class HighlightManager {
    constructor() {
        this.highlights = this.loadHighlights();
    }

    loadHighlights() {
        const data = localStorage.getItem(HIGHLIGHTS_KEY);
        return data ? JSON.parse(data) : {};
    }

    saveHighlights() {
        localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(this.highlights));
    }

    addHighlight(chapterId, text, color = '#FFEB3B') {
        if (!this.highlights[chapterId]) {
            this.highlights[chapterId] = [];
        }
        this.highlights[chapterId].push({
            id: Date.now(),
            text: text,
            color: color,
            timestamp: new Date().toISOString()
        });
        this.saveHighlights();
    }

    removeHighlight(chapterId, highlightId) {
        if (this.highlights[chapterId]) {
            this.highlights[chapterId] = this.highlights[chapterId].filter(h => h.id !== highlightId);
            this.saveHighlights();
        }
    }

    getHighlights(chapterId) {
        return this.highlights[chapterId] || [];
    }

    getAllHighlights() {
        return this.highlights;
    }

    getTotalHighlightsCount() {
        return Object.values(this.highlights).reduce((sum, highlights) => sum + highlights.length, 0);
    }
}

const highlightManager = new HighlightManager();

// ==================== 阅读设置管理 (已禁用) ====================
// 阅读设置功能已移除

// ==================== 学习统计 ====================
class StudyStats {
    constructor() {
        this.stats = this.loadStats();
    }

    loadStats() {
        const data = localStorage.getItem(STATS_KEY);
        return data ? JSON.parse(data) : {
            studyDays: [],
            totalMinutes: 0,
            lastStudyDate: null
        };
    }

    saveStats() {
        localStorage.setItem(STATS_KEY, JSON.stringify(this.stats));
    }

    recordStudySession(minutes = 5) {
        const today = new Date().toISOString().split('T')[0];

        if (!this.stats.studyDays.includes(today)) {
            this.stats.studyDays.push(today);
        }

        this.stats.totalMinutes += minutes;
        this.stats.lastStudyDate = new Date().toISOString();
        this.saveStats();
    }

    getStudyStreak() {
        if (this.stats.studyDays.length === 0) return 0;

        const sortedDays = this.stats.studyDays.sort().reverse();
        const today = new Date();
        let streak = 0;

        for (let i = 0; i < sortedDays.length; i++) {
            const studyDate = new Date(sortedDays[i]);
            const diffDays = Math.floor((today - studyDate) / (1000 * 60 * 60 * 24));

            if (diffDays === i) {
                streak++;
            } else {
                break;
            }
        }

        return streak;
    }

    getTotalStudyDays() {
        return this.stats.studyDays.length;
    }

    getTotalMinutes() {
        return this.stats.totalMinutes;
    }
}

const studyStats = new StudyStats();

// ==================== 分享管理 ====================
class ShareManager {
    generateShareCard(chapterId, chapterTitle) {
        const shareModal = document.createElement('div');
        shareModal.className = 'share-modal';
        shareModal.innerHTML = `
            <div class="share-modal-content">
                <button class="share-close" onclick="this.closest('.share-modal').remove()">✕</button>
                <h3 style="margin-bottom: 1.5rem; color: var(--text-primary);">分享此讲</h3>

                <div class="share-card-preview">
                    <img src="../images/Day${String(chapterId).padStart(2, '0')}${chapterTitle.split(/[,，]/)[0]}.png"
                         alt="分享卡片"
                         style="width: 100%; max-width: 400px; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);"
                         onerror="this.src='../images/海报.png'">
                </div>

                <p style="margin: 1.5rem 0; color: var(--text-secondary); font-size: 0.95rem;">
                    长按图片保存并分享给朋友<br>
                    也可以直接复制链接分享
                </p>

                <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
                    <button class="btn btn-secondary" onclick="navigator.clipboard.writeText(window.location.href).then(() => alert('链接已复制!'))">
                        复制链接
                    </button>
                    <button class="btn" onclick="this.closest('.share-modal').remove()">
                        知道了
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(shareModal);
    }
}

const shareManager = new ShareManager();

// ==================== 导航菜单切换 ====================
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ==================== 搜索功能 ====================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const contentGrid = document.querySelector('.content-grid');

    if (!searchInput || !contentGrid) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = contentGrid.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.card-excerpt')?.textContent.toLowerCase() || '';

            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ==================== 渲染章节卡片 ====================
function renderChapterCards() {
    const contentGrid = document.querySelector('.content-grid');
    if (!contentGrid) return;

    contentGrid.innerHTML = chapters.map(chapter => {
        const isCompleted = progressManager.isCompleted(chapter.id);
        const completedClass = isCompleted ? 'completed' : '';
        const completedBadge = isCompleted ? '<span style="color: var(--success-color); margin-left: 0.5rem;">✓</span>' : '';

        return `
            <div class="card ${completedClass}" onclick="navigateToChapter(${chapter.id})">
                <div class="card-number">Day ${chapter.id}</div>
                <h3 class="card-title">${chapter.title}${completedBadge}</h3>
                ${isCompleted ? '<p class="card-excerpt" style="color: var(--success-color); font-weight: 600;">已完成</p>' : ''}
            </div>
        `;
    }).join('');
}

// ==================== 导航到章节 ====================
function navigateToChapter(chapterId) {
    const chapter = chapters.find(c => c.id === chapterId);
    if (chapter) {
        progressManager.setCurrentChapter(chapterId);
        window.location.href = `pages/${chapter.file}`;
    }
}

// ==================== 更新进度显示 ====================
function updateProgressDisplay() {
    const progressWidget = document.querySelector('.progress-widget');
    if (!progressWidget) return;

    const completedCount = progressManager.getCompletedCount();
    const percentage = progressManager.getProgressPercentage();

    progressWidget.innerHTML = `
        <h3>学习进度</h3>
        <div class="progress-number">${completedCount} / ${TOTAL_CHAPTERS}</div>
        <div class="progress-bar" style="margin-top: 1rem;">
            <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
        <p style="margin-top: 0.5rem; opacity: 0.9;">已完成 ${percentage}%</p>
    `;
}

// ==================== 标记当前章节完成 ====================
function markCurrentChapterComplete() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const currentChapter = chapters.find(c => c.file === fileName);

    if (currentChapter) {
        progressManager.markCompleted(currentChapter.id);
        updateArticleProgress();
    }
}

// ==================== 更新文章页面进度 ====================
function updateArticleProgress() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const currentChapter = chapters.find(c => c.file === fileName);

    if (!currentChapter) return;

    const isCompleted = progressManager.isCompleted(currentChapter.id);
    const completeBtn = document.getElementById('markCompleteBtn');

    if (completeBtn) {
        if (isCompleted) {
            completeBtn.textContent = '✓ 已完成';
            completeBtn.classList.add('btn-secondary');
            completeBtn.disabled = true;
        } else {
            completeBtn.addEventListener('click', () => {
                markCurrentChapterComplete();
            });
        }
    }

    // 更新目录状态
    updateTOCStatus();
}

// ==================== 更新目录状态 ====================
function updateTOCStatus() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();

    tocLinks.forEach(link => {
        const linkFileName = link.getAttribute('href').split('/').pop();
        const chapter = chapters.find(c => c.file === linkFileName);

        if (chapter) {
            if (progressManager.isCompleted(chapter.id)) {
                link.classList.add('completed');
            }

            if (linkFileName === fileName) {
                link.classList.add('active');
            }
        }
    });
}

// ==================== 渲染目录 ====================
function renderTOC() {
    const tocList = document.querySelector('.toc-list');
    if (!tocList) return;

    tocList.innerHTML = chapters.map(chapter => {
        return `
            <li class="toc-item">
                <a href="${chapter.file}" class="toc-link">
                    Day ${chapter.id}: ${chapter.title}
                </a>
            </li>
        `;
    }).join('');

    updateTOCStatus();
}

// ==================== 文章导航 ====================
function initArticleNavigation() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const currentChapter = chapters.find(c => c.file === fileName);

    if (!currentChapter) return;

    const prevChapter = chapters.find(c => c.id === currentChapter.id - 1);
    const nextChapter = chapters.find(c => c.id === currentChapter.id + 1);

    const navigationHTML = `
        <div class="article-navigation">
            ${prevChapter ?
                `<a href="${prevChapter.file}" class="nav-btn secondary">
                    ← 上一讲: Day ${prevChapter.id}
                </a>` :
                '<div></div>'
            }
            <button id="markCompleteBtn" class="nav-btn" style="max-width: 200px;">
                标记为已完成
            </button>
            ${nextChapter ?
                `<a href="${nextChapter.file}" class="nav-btn">
                    下一讲: Day ${nextChapter.id} →
                </a>` :
                `<a href="../index.html" class="nav-btn">返回首页</a>`
            }
        </div>
    `;

    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        articleContent.insertAdjacentHTML('beforeend', navigationHTML);
        updateArticleProgress();
    }
}

// ==================== 滚动进度 ====================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-color);
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ==================== 平滑滚动 ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== 回到顶部按钮 ====================
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', '回到顶部');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== 侧边栏目录 (可折叠) ====================
function initSidebarTOC() {
    const articleContent = document.querySelector('.article-content');
    if (!articleContent) return;

    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar-toc';
    sidebar.innerHTML = `
        <div class="sidebar-toc-header">
            <h4>目录</h4>
            <button class="sidebar-toggle" onclick="this.closest('.sidebar-toc').classList.toggle('collapsed')">
                <span class="toggle-icon">−</span>
            </button>
        </div>
        <div class="toc-list"></div>
    `;

    const tocWrapper = document.querySelector('.toc-wrapper');
    if (tocWrapper) {
        tocWrapper.appendChild(sidebar);
        renderTOC();
    }
}

// ==================== 阅读设置控件 (已禁用) ====================
// 阅读设置控件已移除

// ==================== 学习统计可视化 ====================
function renderStudyStats() {
    const statsContainer = document.getElementById('studyStats');
    if (!statsContainer) return;

    const streak = studyStats.getStudyStreak();
    const totalDays = studyStats.getTotalStudyDays();
    const completedCount = progressManager.getCompletedCount();
    const notesCount = noteManager.getTotalNotesCount();
    const highlightsCount = highlightManager.getTotalHighlightsCount();

    statsContainer.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">🔥</div>
                <div class="stat-value">${streak}</div>
                <div class="stat-label">连续学习天数</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📚</div>
                <div class="stat-value">${completedCount}/${TOTAL_CHAPTERS}</div>
                <div class="stat-label">完成讲数</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📝</div>
                <div class="stat-value">${notesCount}</div>
                <div class="stat-label">笔记数</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">✨</div>
                <div class="stat-value">${highlightsCount}</div>
                <div class="stat-label">标注数</div>
            </div>
        </div>
    `;
}

// ==================== 成就系统 ====================
function checkAchievements() {
    const completedCount = progressManager.getCompletedCount();
    const achievements = [];

    // 完成所有章节
    if (completedCount === TOTAL_CHAPTERS) {
        showAchievement('🏆 学习大师', '恭喜完成全部21讲!', 'achievement-master');
    }

    // 完成一半
    if (completedCount === Math.floor(TOTAL_CHAPTERS / 2) && !localStorage.getItem('achievement-half')) {
        showAchievement('⭐ 半程英雄', '已完成一半课程,继续加油!', 'achievement-half');
    }

    // 连续学习7天
    const streak = studyStats.getStudyStreak();
    if (streak >= 7 && !localStorage.getItem('achievement-week')) {
        showAchievement('🔥 7日达人', '连续学习7天,坚持就是胜利!', 'achievement-week');
    }

    // 笔记达人
    const notesCount = noteManager.getTotalNotesCount();
    if (notesCount >= 20 && !localStorage.getItem('achievement-notes')) {
        showAchievement('📝 笔记达人', '已记录20条笔记,学习很认真!', 'achievement-notes');
    }
}

function showAchievement(title, message, achievementKey) {
    localStorage.setItem(achievementKey, 'true');

    const achievementToast = document.createElement('div');
    achievementToast.className = 'achievement-toast';
    achievementToast.innerHTML = `
        <div class="achievement-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(achievementToast);

    setTimeout(() => achievementToast.classList.add('show'), 100);
    setTimeout(() => {
        achievementToast.classList.remove('show');
        setTimeout(() => achievementToast.remove(), 300);
    }, 5000);
}

// ==================== 文本选择处理 (高亮和笔记) ====================
function initTextSelection() {
    const articleContent = document.querySelector('.article-content');
    if (!articleContent) return;

    let selectedText = '';

    document.addEventListener('mouseup', (e) => {
        const selection = window.getSelection();
        selectedText = selection.toString().trim();

        if (selectedText && articleContent.contains(selection.anchorNode)) {
            showSelectionMenu(e.pageX, e.pageY, selectedText);
        } else {
            hideSelectionMenu();
        }
    });
}

function showSelectionMenu(x, y, text) {
    hideSelectionMenu();

    const menu = document.createElement('div');
    menu.className = 'selection-menu';
    menu.style.left = x + 'px';
    menu.style.top = (y - 50) + 'px';
    menu.innerHTML = `
        <button onclick="highlightSelectedText('${escapeHtml(text)}')">✨ 高亮</button>
        <button onclick="addNoteFromSelection('${escapeHtml(text)}')">📝 笔记</button>
    `;
    document.body.appendChild(menu);
}

function hideSelectionMenu() {
    const menu = document.querySelector('.selection-menu');
    if (menu) menu.remove();
}

function escapeHtml(text) {
    return text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function highlightSelectedText(text) {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const currentChapter = chapters.find(c => c.file === fileName);

    if (currentChapter) {
        highlightManager.addHighlight(currentChapter.id, text);
        alert('已添加高亮标注');
    }

    hideSelectionMenu();
}

function addNoteFromSelection(text) {
    const note = prompt('请输入笔记内容:', '');
    if (!note) return;

    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const currentChapter = chapters.find(c => c.file === fileName);

    if (currentChapter) {
        noteManager.addNote(currentChapter.id, note, text);
        alert('笔记已保存');
    }

    hideSelectionMenu();
}

// ==================== 页面加载完成后初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 记录学习session
    studyStats.recordStudySession();

    // 初始化移动端菜单
    initMobileMenu();

    // 首页功能
    if (document.querySelector('.content-grid')) {
        renderChapterCards();
        updateProgressDisplay();
        initSearch();
        renderStudyStats();
    }

    // 文章页面功能
    if (document.querySelector('.article-content')) {
        renderTOC();
        initArticleNavigation();
        initScrollProgress();
        initSidebarTOC();
        initTextSelection();

        // 检查成就
        setTimeout(() => checkAchievements(), 1000);
    }

    // 全局功能
    initSmoothScroll();
    initBackToTop();

    // 添加淡入动画
    document.body.classList.add('fade-in');
});

// ==================== 导出到全局作用域 ====================
window.navigateToChapter = navigateToChapter;
window.progressManager = progressManager;
window.noteManager = noteManager;
window.highlightManager = highlightManager;
window.studyStats = studyStats;
window.shareManager = shareManager;
window.highlightSelectedText = highlightSelectedText;
window.addNoteFromSelection = addNoteFromSelection;
