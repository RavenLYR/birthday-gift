// [2025-05-25] Integrated Logic for Toolbox App

// ================= 1. Navigation Logic =================
function switchTab(tabName) {
    // 1. Hide all views
    document.getElementById('view-health').style.display = 'none';
    document.getElementById('view-book').style.display = 'none';
    document.getElementById('view-chat').style.display = 'none';

    // 2. Show selected view
    document.getElementById('view-' + tabName).style.display = 'flex'; // flex for layout

    // 3. Update Nav Button Styles
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Select the button based on index (0:Health, 1:Book, 2:Chat)
    const map = { 'health': 0, 'book': 1, 'chat': 2 };
    navItems[map[tabName]].classList.add('active');
}


// ================= 2. Module: Health Assistant =================
const healthTips = [
    // --- 奇怪的生理知识 ---
    "💧 紧急注水：检测到你的大脑正在缩水，快喝口水让它膨胀回来！",
    "👀 手动模式：现在开始切换为【手动眨眼】模式。眨眼！眨眼！再眨眼！",
    "🧠 智商充值：深呼吸三次，试图从空气中提取一点智慧。",
    "🔋 电量预警：你的电量不足10%，请立刻闭眼5秒进入待机模式。",
    "🦴 体态警告：这里是驼背检查点，把你的腰板挺起来！",

    // --- 迷惑行为大赏 ---
    "🧟‍♀️ 丧尸模仿：现在站起来，像丧尸一样伸个懒腰，并且发出“呃啊啊”的怪叫。",
    "🦭 拟态训练：现在的任务是模仿一只海豹，拍手三下（鼓掌），三十下也可以。",
    "✍️ 颈椎写字：请用你的头在空中写一个“粪”字。",
    "👽 接收信号：举起双手，像天线一样指向天空，不为什么。",
    "😜 面部瑜伽：现在做一个最丑的鬼脸，自拍发给我。",
    "到底是怎么在代码里打出emoji的..不管了，请提肛！",

    // --- 一本正经的废话 ---
    "🌞 光合作用：去窗边晒晒太阳，虽然你不能产生叶绿素，但你可以把自己晒热乎。",
    "🥩 五花肉原理：今日建议像一块五花肉一样摊在椅子上，感受重力的爱抚。",
    "🍷 贵族体验：去接一杯白开水，然后假装它是82年的拉菲，优雅地品尝它。",
    "👀 眼球运动：翻个白眼。向左翻，向右翻，很好，这就叫【眼部保健操】。",
    "俯卧撑x1（注意安全）",
    "扎马步五秒！",
    "眺望远方绿树3min，红树也行",
    "💧 不紧急注水：检测到你的大脑没有任何变化，但你还是得去喝点水！",

    // --- 阴阳怪气式关怀 ---
    "📱 手机成瘾：别看手机了，手机有我好看吗？（虽然这里只有字）",
    "👄 嘴部运动：嘴角上扬45度。自拍发给我。",
    "🚶‍♀️ 步数挑战：去洗手间溜达一圈，假装自己在参加马拉松（的起点）。",
    "🛌 睡前仪式：向下一秒遇到的人大喊：我今晚一定不熬夜啦！"
];
function getHealthTip() {
    const display = document.getElementById('health-display');
    // Random selection
    const randomIndex = Math.floor(Math.random() * healthTips.length);
    display.innerText = healthTips[randomIndex];
    
    // Simple bounce animation effect
    const card = document.querySelector('.health-card');
    card.style.transform = 'scale(1.05)';
    setTimeout(() => card.style.transform = 'scale(1)', 200);
}


// ================= 3. Module: Book of Answers =================
const answers = [
    "是的，别犹豫。", "现在的时机刚刚好。", "你需要先休息一下。",
    "听从你的直觉。", "结果会比你想象的更好。", "也许你应该问问朋友。",
    "不要冲动，再等等。", "这件事可以试一试。", "专注于你自己。",
    "答案藏在你的心里。", "去吃顿好吃的，然后就有答案了。",
    "不管怎样，我都支持你。","玉玺不缘归日角，锦帆应是到天涯。",
    "此情不可道，此别何时遇。", "风月依然，万里江清", "我且为君锤碎黄鹤楼", 
    "水枕能令山俯仰，风船解与月裴回", "山月不知心里事", "何夜无月？何处无竹柏？",
    "有经验的都是放营地箱子里", "一物降一物啊", "但凡走对一步", "永恒的周六野",
    "烧烤掌中宝", "嗨嗨华宁，哦华宁甜心花放", "请多多开心吧！", "闪过一抹红蓝",
    "于是某吸血鬼总是不赞同", "这片大地广阔无物", "相信，需要天真和勇气。", 
    "把握好每一个时刻，它是什么样，我们就怎么活。", "动物是唯一真实存在的魔术师。", 
    "冬天快要结束的时候，我已经学会冷了就关上窗户，渴了就倒水喝。",
    "不正当的事就是不正当的事，悲伤的事就是悲伤的事，孤独的心就用孤独的心去感受。",
    "愿你们翼下的强风，能把你们带到所有太阳和月亮能照到的地方。",
    "世界还如此年轻，愿森林充满欢乐！", "不用怀疑它是否会来，你需要关心的是它会在何时降临。",
    "混乱是这个世界上唯一确定的事情，是所有人的统治者。", "世上没有阶梯。",
    "生长和腐烂互相依存", "每个统治者背后另有统治者。", "没什么恒久之物。",
    "人生得意须尽欢", "且放白鹿青崖间", "轻舟已过万重山", "物与我皆无尽也",
    "也无风雨也无晴", "春水碧于天",
    "营养不足比魔物还要可怕。", "尽管各自观点不同，但肚子一样会饿",
    "吃是生者的特权。", "营养均衡的饮食生活，,", "调整好生活的节奏,", "再加上适当的运动，",
    "只要注意这三点，自然会有强健的身体！"
];

function askBook() {
    const input = document.getElementById('question-input');
    if (!input.value.trim()) { alert("请先输入问题~"); return; }

    // UI Switch
    document.getElementById('book-input-area').style.display = 'none';
    document.getElementById('book-loading').style.display = 'block';

    setTimeout(() => {
        document.getElementById('book-loading').style.display = 'none';
        document.getElementById('book-result').style.display = 'block';
        
        // Fill Data
        document.getElementById('q-text').innerText = input.value;
        const randomAns = answers[Math.floor(Math.random() * answers.length)];
        document.getElementById('a-text').innerText = randomAns;
    }, 1500);
}

function resetBook() {
    document.getElementById('question-input').value = '';
    document.getElementById('book-result').style.display = 'none';
    document.getElementById('book-input-area').style.display = 'block';
}


// ================= 4. Module: Chat Blind Box =================
const topics = [
    // --- 📱 手机里的秘密 (查岗模式) ---
    "🎶 最近循环次数最多的一首歌是什么？分享给我听听。",
    "🤳 现在的手机相册里，倒数第三张照片是什么？发来看看！",
    "😂 最近最爱用的一个表情包是哪个？发给我，我也要偷。",
    "📱 截屏你现在的手机锁屏壁纸给我看。",
    "🛍️ 最近一笔网购订单买了什么？",
    "📊 敢不敢截屏今天的“屏幕使用时间”给我看？",

    // --- 🍱 吃喝玩乐 (种草模式) ---
    "🎬 最近看过最喜欢的电影/剧是什么？值得二刷吗？",
    "🍱 此时此刻，你的胃最想接纳什么食物？",
    "🥤 如果现在点奶茶，你会点哪一家？几分糖？",
    "✈️ 如果现在给你一张机票，你最想去哪里？",
    "🎁 今年收到最喜欢的礼物是啥？",
    "📢 最近有没有发现什么好用的APP或者博主？推荐一下。",

    // --- 🧠 脑洞大开 (假设模式) ---
    "🕰️ 如果能回到过去，你想回到几岁？去改变什么吗？",
    "💰 如果明天中了5000万，你做的第一件事是什么？",
    "🦸‍♀️ 如果能拥有一个超能力，你最想要什么？",
    "🧟‍♂️ 如果丧尸爆发，你觉得我们俩谁能活到最后？",
    "🔄 如果能和世界上任何人交换一天人生，你想变成谁？",
    "🐾 如果我变成了一只狗，你觉得我会是什么品种？",

    // --- 👯‍♀️ 友情专属 (走心模式) ---
    "🤔 说实话，你对我的第一印象是什么？和现在反差大吗？",
    "🌟 这一周发生的小确幸是什么？",
    "👯‍♀️ 你觉得我们两个最像的地方是什么？",
    "🤐 我身上有没有什么坏习惯是你一直想吐槽的？",
    "📸 我们合照里你最喜欢哪一张？发出来回忆杀一下。",
    "🎤 如果我们要一起去KTV，必点的合唱曲目是哪首？",

    // --- 🌙 深夜电台 (EMO模式) ---
    "💤 昨晚做梦了吗？梦到了什么？",
    "🥺 最近一次哭是因为什么？",
    "💌 如果可以给10年前的自己发一条短信，你会发什么？",
    "🚫 有没有什么事情是你绝对无法原谅的？",
    "🔮 你觉得现阶段最让你焦虑的一件事是什么？",
    "✨ 用三个词形容一下现在的自己。"
];

function drawTopic() {
    // Flip Effect
    document.getElementById('topic-cover').style.display = 'none';
    const contentCard = document.getElementById('topic-content');
    contentCard.style.display = 'flex';
    
    // Pick Logic
    const randomIndex = Math.floor(Math.random() * topics.length);
    document.getElementById('topic-id').innerText = randomIndex + 1;
    document.getElementById('topic-text').innerText = topics[randomIndex];
}

function resetTopic() {
    // Reset to cover
    document.getElementById('topic-content').style.display = 'none';
    document.getElementById('topic-cover').style.display = 'flex';
}