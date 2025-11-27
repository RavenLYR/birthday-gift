// 这里存储365天的内容，目前先写几条测试
// 格式： "月-日": "内容"
const messages = {
    "11-27": "测试：今天是11月27日，这是为你准备的第一句话！", 
    "11-28": "测试：明天记得吃早饭哦。",
    "05-20": "我爱你！",
    "default": "今天好像没有特定的纸条，但希望你开心！"
};

function showDailyMessage() {
    const today = new Date();
    // 获取当前的 月-日 格式，例如 "11-27"
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;

    // 获取页面上的元素
    const messageElement = document.getElementById("message");
    const dateDisplay = document.getElementById("date-display");

    // 查找对应日期的内容
    if (messages[dateKey]) {
        messageElement.innerText = messages[dateKey];
    } else {
        messageElement.innerText = messages["default"];
    }
    
    // 显示日期
    dateDisplay.innerText = `今天是：${today.getFullYear()}年${month}月${day}日`;
    
    // 点击后禁用按钮，防止重复点（可选）
    // document.getElementById("btn").disabled = true;
    // document.getElementById("btn").innerText = "明天再来吧";
}