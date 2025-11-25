// ==================== 题库数据 ====================
const questionBank = [
    {
        id: 1,
        question: "作为创始人,你每月业绩目标50万,应该给自己定多少目标最合理?",
        options: [
            { text: "A. 15万 (最多的,体现责任)", answer: false },
            { text: "B. 0-10万 (少量,主要培养团队)", answer: true },
            { text: "C. 25万 (一半,公平分配)", answer: false },
            { text: "D. 30万 (大部分,确保完成)", answer: false }
        ],
        explanation: "创始人的价值在于通过团队实现目标,而不是自己冲一线。应该把主要精力放在培养团队上。"
    },
    {
        id: 2,
        question: "销售冠军小王业绩第一但总在背后吐槽公司,你会怎么做?",
        options: [
            { text: "A. 立即提拔他当主管,业绩说明一切", answer: false },
            { text: "B. 睁一只眼闭一只眼,能力强就行", answer: false },
            { text: "C. 限制权力并培养替代者,准备让他离开", answer: true },
            { text: "D. 给他加薪,希望能改变态度", answer: false }
        ],
        explanation: "价值观不一致的人,能力越强危害越大。要有计划地减少依赖,培养替代者。"
    },
    {
        id: 3,
        question: "团队加班很多但效率不高,你的第一反应应该是?",
        options: [
            { text: "A. 多招几个人分担工作", answer: false },
            { text: "B. 要求大家提高执行力", answer: false },
            { text: "C. 反思自己:指示够清楚吗?培养到位吗?", answer: true },
            { text: "D. 制定更严格的考核制度", answer: false }
        ],
        explanation: "公司99%的问题,根源都在创始人自己。先反思自己的管理方式,再考虑其他问题。"
    },
    {
        id: 4,
        question: "定了500万目标,团队问为什么,你应该怎么回答?",
        options: [
            { text: "A. 这是底线,必须完成", answer: false },
            { text: "B. 算账给他们看:这是盈亏平衡线", answer: true },
            { text: "C. 因为我说的,执行就好", answer: false },
            { text: "D. 这是行业平均水平", answer: false }
        ],
        explanation: "要让团队理解目标背后的逻辑,算清楚成本和盈亏平衡点,他们才会真正认同目标。"
    },
    {
        id: 5,
        question: "对于新入职的下属小白(低能力+低意愿),最有效的管理方式是?",
        options: [
            { text: "A. 多指示+多关怀,手把手教", answer: false },
            { text: "B. 多指示+少关怀,建立规则", answer: true },
            { text: "C. 少指示+多关怀,让他自由发挥", answer: false },
            { text: "D. 放手不管,看他的表现", answer: false }
        ],
        explanation: "新人小白需要的是规则和标准,不是温情。先让他把基本动作做对,建立信心。"
    },
    {
        id: 6,
        question: "市场环境变了,原定目标明显不合理,你应该?",
        options: [
            { text: "A. 坚持不变,朝令夕改没原则", answer: false },
            { text: "B. 解释原因并和团队一起调整", answer: true },
            { text: "C. 私下降低要求,但不告诉团队", answer: false },
            { text: "D. 先观望一段时间再说", answer: false }
        ],
        explanation: "坚持过时的目标,是对团队最大的不负责。该调就调,但要解释清楚为什么。"
    },
    {
        id: 7,
        question: "下属问你'这个折扣能给吗',你应该?",
        options: [
            { text: "A. 直接回答能或不能", answer: false },
            { text: "B. 反问'你怎么看?为什么必须签下这单?'", answer: true },
            { text: "C. 让他自己决定", answer: false },
            { text: "D. 说'都听你的'", answer: false }
        ],
        explanation: "不要替下属做决定,要通过反问引导他自己思考和判断,这样他才能成长。"
    },
    {
        id: 8,
        question: "为什么员工爱打游戏不爱上班?根本原因是?",
        options: [
            { text: "A. 工资太低,没有激励", answer: false },
            { text: "B. 工作缺乏目标、反馈、成长感和决策权", answer: true },
            { text: "C. 员工态度有问题", answer: false },
            { text: "D. 游戏太好玩了", answer: false }
        ],
        explanation: "游戏有明确目标、即时反馈、成长可见。工作如果只是螺丝钉,当然没干劲。"
    },
    {
        id: 9,
        question: "小团队提升效率,更应该依靠?",
        options: [
            { text: "A. 激发内部竞争,排行榜pk", answer: false },
            { text: "B. 发挥强项,合理配合", answer: true },
            { text: "C. 统一标准,整齐划一", answer: false },
            { text: "D. 末位淘汰,优胜劣汰", answer: false }
        ],
        explanation: "小团队靠配合不是竞争。让擅长开拓的开拓,擅长维护的维护,8个人能干出12个人的活。"
    },
    {
        id: 10,
        question: "客户当众指责你的员工,虽然确实是员工的错,你应该?",
        options: [
            { text: "A. 当场道歉并教育员工", answer: false },
            { text: "B. 当众维护员工,回来后私下复盘", answer: true },
            { text: "C. 保持中立,让他们自己沟通", answer: false },
            { text: "D. 让员工自己道歉", answer: false }
        ],
        explanation: "对外袒护,对内要说清楚。在外面必须站在员工这边,回来后再复盘改进。"
    },
    {
        id: 11,
        question: "员工说'我5年后想创业',你应该?",
        options: [
            { text: "A. 有所保留,核心不教了", answer: false },
            { text: "B. 全力支持培养,资源随便用", answer: true },
            { text: "C. 劝他打消念头", answer: false },
            { text: "D. 立即让他离开", answer: false }
        ],
        explanation: "培养能离开但选择留下的人,而不是想走却走不了的人。全力支持他成长。"
    },
    {
        id: 12,
        question: "下属犯了低级错误(报表算错),你应该?",
        options: [
            { text: "A. 大发雷霆,让他记住", answer: false },
            { text: "B. 冷静指出,教他如何避免", answer: true },
            { text: "C. 不说什么,自己改了", answer: false },
            { text: "D. 当众批评,杀鸡儆猴", answer: false }
        ],
        explanation: "低级错误需要批评(冷静指出),不是发火。发火应该针对违反原则的行为。"
    },
    {
        id: 13,
        question: "8人团队效率低,最可能的原因是?",
        options: [
            { text: "A. 人员能力不足", answer: false },
            { text: "B. 性格类型搭配不合理", answer: true },
            { text: "C. 薪资激励不够", answer: false },
            { text: "D. 加班不够多", answer: false }
        ],
        explanation: "性格互补的团队,8人能产出12人成果。性格随机组合,10人只能产出6人成果。"
    },
    {
        id: 14,
        question: "远程办公管理的核心是?",
        options: [
            { text: "A. 安装监控软件,实时监督", answer: false },
            { text: "B. 要求随时秒回消息", answer: false },
            { text: "C. 看结果不看过程,任务切小切细", answer: true },
            { text: "D. 要求每天汇报工作时长", answer: false }
        ],
        explanation: "远程管理不是监控过程,是看结果。把任务切成2-3天一个节点,产出说话。"
    },
    {
        id: 15,
        question: "创始人面临重大决策,最好的做法是?",
        options: [
            { text: "A. 自己想清楚就行", answer: false },
            { text: "B. 写下最坏情况并找跨行业创始人交流", answer: true },
            { text: "C. 交给团队投票决定", answer: false },
            { text: "D. 找投资人决定", answer: false }
        ],
        explanation: "重大决策只能创始人拍板,但要写下最坏情况,并找'外脑'(跨行业创始人)交流。"
    },
    {
        id: 16,
        question: "下属说工资太少,你应该先?",
        options: [
            { text: "A. 反驳:公司给的不少了", answer: false },
            { text: "B. 教他算账:成本多少,需要创造多少价值", answer: true },
            { text: "C. 立即加薪安抚", answer: false },
            { text: "D. 建议他去外面看看行情", answer: false }
        ],
        explanation: "让他算清楚公司为他花了多少钱,他创造了多少价值,才能理性讨论薪资问题。"
    },
    {
        id: 17,
        question: "给团队定目标,但不教方法,结果会?",
        options: [
            { text: "A. 激发他们的创造力", answer: false },
            { text: "B. 团队执行力差,无法完成", answer: true },
            { text: "C. 锻炼他们的独立思考能力", answer: false },
            { text: "D. 让他们更有责任感", answer: false }
        ],
        explanation: "只喊口号不给方法,不是管理是传话。要把目标拆解成具体可执行的行动。"
    },
    {
        id: 18,
        question: "评价下属的最佳周期是?",
        options: [
            { text: "A. 1个月(及时反馈)", answer: false },
            { text: "B. 6个月(看得出趋势又来得及调整)", answer: true },
            { text: "C. 1年(年度考核)", answer: false },
            { text: "D. 随时评价", answer: false }
        ],
        explanation: "太短看不出趋势,太长来不及调整。6个月刚好,分3次面谈:定目标、中期纠偏、最终评价。"
    },
    {
        id: 19,
        question: "下属小张很拼但业绩上不去,最可能是?",
        options: [
            { text: "A. 能力不够,该换人了", answer: false },
            { text: "B. 缺了'应对中间事项的措施'", answer: true },
            { text: "C. 努力得还不够", answer: false },
            { text: "D. 运气不好", answer: false }
        ],
        explanation: "能力强+工作卖力≠好业绩。中间还有变量:市场环境、竞品促销等。创始人要帮下属看到盲区。"
    },
    {
        id: 20,
        question: "为什么要给团队讲'公司的意义'?",
        options: [
            { text: "A. 没必要,务实就好", answer: false },
            { text: "B. 让下属觉得工作有价值,而不只是打工", answer: true },
            { text: "C. 洗脑画饼,降低人力成本", answer: false },
            { text: "D. 只是形式主义", answer: false }
        ],
        explanation: "只关注数字,团队也只关注数字。讲清楚工作的意义,他们才会真正上心。"
    }
];

// ==================== 全局状态 ====================
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;

// ==================== 初始化测试 ====================
function startQuiz() {
    // 从题库中随机选择10道题
    currentQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();

    // 显示第一题
    showQuestion();
}

// ==================== 随机选择题目 ====================
function getRandomQuestions(count) {
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ==================== 显示题目 ====================
function showQuestion() {
    const container = document.getElementById('quizContent');
    const question = currentQuestions[currentQuestionIndex];

    container.innerHTML = `
        <div class="quiz-progress">
            第 ${currentQuestionIndex + 1} / ${currentQuestions.length} 题
        </div>

        <div class="question-card">
            <div class="question-title">
                ${question.question}
            </div>

            <ul class="options-list">
                ${question.options.map((option, index) => `
                    <li class="option-item">
                        <label class="option-label">
                            <input
                                type="radio"
                                name="answer"
                                value="${index}"
                                class="option-input"
                            >
                            ${option.text}
                        </label>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="quiz-actions">
            ${currentQuestionIndex > 0 ?
                '<button class="btn btn-secondary" onclick="previousQuestion()">上一题</button>' :
                '<div></div>'
            }
            <button class="btn" onclick="nextQuestion()">
                ${currentQuestionIndex < currentQuestions.length - 1 ? '下一题' : '提交答案'}
            </button>
        </div>
    `;
}

// ==================== 下一题 ====================
function nextQuestion() {
    // 获取选中的答案
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert('请选择一个答案');
        return;
    }

    // 保存答案
    userAnswers[currentQuestionIndex] = {
        questionId: currentQuestions[currentQuestionIndex].id,
        selectedIndex: parseInt(selected.value),
        isCorrect: currentQuestions[currentQuestionIndex].options[parseInt(selected.value)].answer
    };

    // 判断是继续还是结束
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();

        // 如果之前选过答案,自动选中
        if (userAnswers[currentQuestionIndex]) {
            setTimeout(() => {
                const prevAnswer = userAnswers[currentQuestionIndex].selectedIndex;
                document.querySelector(`input[value="${prevAnswer}"]`).checked = true;
            }, 100);
        }
    } else {
        showResult();
    }
}

// ==================== 上一题 ====================
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();

        // 自动选中之前的答案
        if (userAnswers[currentQuestionIndex]) {
            setTimeout(() => {
                const prevAnswer = userAnswers[currentQuestionIndex].selectedIndex;
                document.querySelector(`input[value="${prevAnswer}"]`).checked = true;
            }, 100);
        }
    }
}

// ==================== 显示结果 ====================
function showResult() {
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const totalCount = currentQuestions.length;
    const score = Math.round((correctCount / totalCount) * 100);
    const timeSpent = Math.round((Date.now() - quizStartTime) / 1000 / 60); // 分钟

    // 评价等级
    let level, message, advice;
    if (score >= 90) {
        level = "🏆 管理大师";
        message = "优秀!";
        advice = "您对团队管理有深刻的理解,继续保持!可以尝试将这些方法应用到实践中,并总结自己的经验。";
    } else if (score >= 75) {
        level = "⭐ 管理高手";
        message = "很好!";
        advice = "您已经掌握了大部分管理要点,继续深化理解,特别关注答错的题目对应的章节。";
    } else if (score >= 60) {
        level = "📚 正在进步";
        message = "不错!";
        advice = "您正在掌握管理的核心理念,建议重点学习答错题目对应的章节,多思考实际场景如何应用。";
    } else {
        level = "🌱 起步阶段";
        message = "加油!";
        advice = "建议您系统地学习完21讲内容,每一讲都认真思考'今天就做'的建议,并在实践中应用。";
    }

    const container = document.getElementById('quizContent');
    container.innerHTML = `
        <div class="result-card">
            <h2 style="color: var(--text-primary); margin-bottom: 1rem;">${level}</h2>
            <div class="result-score">${score}分</div>
            <div class="result-message">${message}</div>
            <div class="result-details">
                答对 ${correctCount} / ${totalCount} 题<br>
                用时约 ${timeSpent} 分钟
            </div>

            <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin: 2rem 0; text-align: left;">
                <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem; color: var(--text-primary);">
                    💡 建议
                </h3>
                <p style="line-height: 1.8; color: var(--text-secondary);">
                    ${advice}
                </p>
            </div>

            <div class="quiz-actions">
                <button class="btn" onclick="showDetailedResults()">查看详解</button>
                <button class="btn btn-secondary" onclick="location.reload()">重新测试</button>
                <button class="btn btn-secondary" onclick="location.href='../index.html'">返回首页</button>
            </div>
        </div>
    `;

    // 保存测试结果
    saveQuizResult(score, correctCount, totalCount);
}

// ==================== 显示详细结果 ====================
function showDetailedResults() {
    const container = document.getElementById('quizContent');

    let html = '<h2 style="text-align: center; margin-bottom: 2rem; color: var(--text-primary);">答题详解</h2>';

    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const selectedOption = question.options[userAnswer.selectedIndex];
        const correctOption = question.options.find(o => o.answer);

        html += `
            <div class="question-card" style="border-left: 4px solid ${userAnswer.isCorrect ? 'var(--primary-color)' : '#999'};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span style="color: var(--text-secondary);">第 ${index + 1} 题</span>
                    <span style="font-weight: 600; color: ${userAnswer.isCorrect ? 'var(--primary-color)' : '#999'};">
                        ${userAnswer.isCorrect ? '✓ 正确' : '✗ 错误'}
                    </span>
                </div>

                <div class="question-title" style="font-size: 1.125rem;">
                    ${question.question}
                </div>

                <div style="margin: 1.5rem 0;">
                    <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">
                        <strong>你的答案:</strong>
                        <span style="color: ${userAnswer.isCorrect ? 'var(--primary-color)' : '#999'};">
                            ${selectedOption.text}
                        </span>
                    </p>
                    ${!userAnswer.isCorrect ? `
                        <p style="color: var(--primary-color); margin-bottom: 0.5rem;">
                            <strong>正确答案:</strong> ${correctOption.text}
                        </p>
                    ` : ''}
                </div>

                <div style="background: var(--bg-color); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--primary-color);">
                    <strong style="color: var(--text-primary);">💡 解析:</strong>
                    <p style="margin-top: 0.5rem; color: var(--text-secondary); line-height: 1.8;">
                        ${question.explanation}
                    </p>
                </div>
            </div>
        `;
    });

    html += `
        <div class="quiz-actions" style="margin-top: 2rem;">
            <button class="btn btn-secondary" onclick="location.reload()">重新测试</button>
            <button class="btn" onclick="location.href='../index.html'">返回首页</button>
        </div>
    `;

    container.innerHTML = html;
    window.scrollTo(0, 0);
}

// ==================== 保存测试结果 ====================
function saveQuizResult(score, correct, total) {
    const results = JSON.parse(localStorage.getItem('quiz_results') || '[]');
    results.push({
        date: new Date().toISOString(),
        score: score,
        correct: correct,
        total: total
    });
    // 只保留最近10次记录
    if (results.length > 10) {
        results.shift();
    }
    localStorage.setItem('quiz_results', JSON.stringify(results));
}

// ==================== 页面加载完成后初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
});

// ==================== 导出到全局作用域 ====================
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.showDetailedResults = showDetailedResults;
