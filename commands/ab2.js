/*CMD
  command: ab2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter amount to add/remove (use - for deduction)
  aliases: 
  group: 
CMD*/

if (user.telegramid !== 1076028197) {
  Bot.sendMessage("❌ Admin only command");
  return
}

let targetUserId = User.getProperty("adminTargetUser");
let amount = parseFloat(message);

if (isNaN(amount)) {
  Bot.sendMessage("Invalid amount");
  return
}

var balance = Libs.ResourcesLib.anotherUserRes("balance", targetUserId);
balance.add(amount);

Bot.sendMessage(
  `✅ Updated balance for ${targetUserId}\n` +
  `New balance: ${balance.value().toFixed(2)}`
); 