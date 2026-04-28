# 🎂 Birthday Reminder App

A simple full-stack application that collects users' birthdays and automatically sends them birthday wishes via email.

---

## 🚀 Features

- 📥 Collect user data (Username, Email, Date of Birth)
- 🔒 Enforce unique email addresses
- ⏰ Daily cron job (7AM) to check for birthdays
- 📧 Automated birthday emails using Nodemailer
- 🌐 Simple and clean user interface
- ☁️ Deployable on Render

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Email Service:** Nodemailer (Gmail SMTP)
- **Scheduler:** node-cron
- **Frontend:** HTML, CSS, Vanilla JavaScript

---

## 📁 Project Structure

```
birthdayReminder-app/
├── server.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── utils/
│   └── mailer.js
├── cron/
│   └── job.js
├── public/
│   └── index.html
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone <your-repo-url>
cd birthdayReminder-app
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL=yourgmail@gmail.com
APP_PASSWORD=your_gmail_app_password
```

---

## ▶️ Running the App

```
npm start
```

Visit:

```
http://localhost:5000
```

---

## ⏰ Cron Job

The app uses `node-cron` to run a scheduled task every day at **7:00 AM**:

```
0 7 * * *
```

It:

- Checks all users in the database
- Filters users whose birthday is today
- Sends them a birthday email 🎉

---

## 📧 Email Configuration

Uses Gmail SMTP via Nodemailer.

⚠️ Important:

- Enable **2-Factor Authentication**
- Generate an **App Password**
- Do NOT use your normal Gmail password

---

## 🧪 Testing the Cron Job

To test quickly, change the cron schedule in `cron/job.js`:

```
* * * * *
```

This runs every minute.

---

## ☁️ Deployment (Render)

1. Push your code to GitHub

2. Create a Web Service on Render

3. Set environment variables:
   - `MONGO_URI`
   - `EMAIL`
   - `APP_PASSWORD`
   - `PORT`

4. Deploy 🎉

⚠️ Note: Free tier may sleep, affecting cron jobs.

---

## 🔐 Environment Variables

Never commit your `.env` file. Use `.gitignore` to exclude:

```
node_modules/
.env
```

---

## 💡 Future Improvements

- 🎨 Improved UI with a modern framework (React/Tailwind)
- 📊 Admin dashboard to view users
- 🔔 Notification system
- 🌍 Timezone-aware scheduling
- 📨 Email templates with better design

---

## 👨‍💻 Author

Built as part of a backend engineering project.

---

## 🎉 Final Note

This project demonstrates:

- Backend API development
- Database integration
- Scheduled background jobs
- Email automation
- Basic frontend integration
