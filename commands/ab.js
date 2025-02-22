/*CMD
  command: ab
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter user ID to adjust balance
  aliases: 
  group: 
CMD*/

// Only allow admin (replace 1076028197 with actual admin ID)
if (user.telegramid !== 1076028197) {
  Bot.sendMessage("❌ Admin only command");
  return
}

User.setProperty("adminTargetUser", message, "integer");
Bot.runCommand("ab2"); 