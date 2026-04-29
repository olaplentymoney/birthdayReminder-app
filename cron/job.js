const cron = require("node-cron");
const User = require("../models/User");
const sendBirthdayEmail = require("../utils/mailer");

cron.schedule("0 7 * * *", async () => {
  console.log("Checking birthdays...");

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();

  const users = await User.find();

  const celebrants = users.filter((user) => {
    const dob = new Date(user.dob);
    return dob.getDate() === day && dob.getMonth() === month;
  });

  for (const user of celebrants) {
    await sendBirthdayEmail(user);
  }
});
