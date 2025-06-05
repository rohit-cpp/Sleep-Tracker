# 💤 Sleep Tracker App

A full-stack **Sleep Tracking** application built with modern technologies to help users track and visualize their sleep patterns effectively.

## 📌 Overview

Sleep Tracker is a Next.js 15-based application where users can:

* 📝 Add daily sleep records
* 🔥 View best and worst sleep durations
* 📊 Visualize their sleep data through interactive charts
* 🗑️ Delete or manage existing records
* 🔐 Access their data securely using Clerk authentication

This app empowers users to understand their sleeping habits and mood impact with a sleek UI and data-driven insights.

---

## 🚀 Features

* ✅ User Authentication with **Clerk**
* ✅ Add / View / Delete Sleep Records
* ✅ Get **Best** and **Worst** Sleep Days
* ✅ Mood Tracking After Sleep
* ✅ Charts and Visualizations with **react-chartjs-2**
* ✅ Data persistence using **Neon DB (PostgreSQL)**
* ✅ ORM with **Prisma**
* ✅ API Routes with **Next.js App Router**
* ✅ Fully typed with **TypeScript**

---

## 🛠️ Tech Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| **Next.js 15**   | Frontend & Backend framework      |
| **TypeScript**   | Type safety                       |
| **Neon DB**      | Serverless PostgreSQL database    |
| **Prisma**       | ORM to interact with the database |
| **Clerk**        | User authentication               |
| **Chart.js**     | Data visualization                |
| **Tailwind CSS** | Styling the UI                    |

---

## 📷 Screenshots

![Screenshot 2025-06-05 162449](https://github.com/user-attachments/assets/d3410fa9-ab87-4e8b-b360-2429bc229a07)
![Screenshot 2025-06-05 214146](https://github.com/user-attachments/assets/0cc37c12-4d5f-4f05-8200-4d0acc112332)

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/sleep-tracker.git
cd sleep-tracker
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file with the following:

```env
DATABASE_URL=your_neon_db_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

4. **Push Prisma schema and seed DB**

```bash
npx prisma db push
```

5. **Run the app**

```bash
npm run dev
```

---

## 🐛 Known Issues / Debug Notes

* ❗ While setting up Clerk, importing from `@clerk/nextjs` in client components can throw:

  ```
  'server-only' cannot be imported from a Client Component module.
  ```

  🔧 **Fix:** Ensure that only server code uses server-only modules and isolate logic accordingly.

* ❗ When integrating Framer Motion or other libraries with `export *` in Next.js 15 app router, you might hit:

  ```
  It's currently unsupported to use "export *" in a client boundary.
  ```

  🔧 **Fix:** Use named exports instead of wildcard exports in components.

---

## 📈 Sleep Charting

Using `react-chartjs-2`, the app renders:

* 📅 Daily sleep hours bar chart
* 😊 Mood vs Sleep correlation chart

Users can track patterns and understand how well-rested they feel over time.

---

## 🧑‍💻 Author

Made with ❤️ by [Rohit Gawande](https://github.com/rohit-cpp)

---

## 📃 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Let me know if you want this converted into a downloadable file or want to add deployment links (e.g., Vercel) or live demo badges.
