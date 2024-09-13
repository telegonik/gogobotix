const TelegramBot = require('node-telegram-bot-api');

// الحصول على التوكن من المتغيرات البيئية
const token = process.env.TELEGRAM_BOT_TOKEN;

// التحقق من وجود التوكن
if (!token) {
  console.error('Error: TELEGRAM_BOT_TOKEN is not defined.');
  process.exit(1); // إيقاف البرنامج إذا لم يتم العثور على التوكن
}

// إنشاء كائن البوت
const bot = new TelegramBot(token, { polling: true });

// الرد على رسالة /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'أهلاً بك! كيف يمكنني مساعدتك؟');
});

// الرد على أي رسالة نصية
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // إذا كتب المستخدم "مرحبا"
  if (messageText.toLowerCase() === 'مرحبا') {
    bot.sendMessage(chatId, 'أهلاً وسهلاً!');
  } else {
    bot.sendMessage(chatId, `لقد أرسلت: ${messageText}`);
  }
});
