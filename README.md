# ArifMenu

A role-based web application built with **Next.js**, **Tailwind CSS**, and **TypeScript**. It provides separate dashboards for **Merchants** and **Back Office/Admins**, with dynamic menus, user management, and permission handling.

---

## 📖 Overview

**ArifMenu** is designed as a modern, responsive dashboard system. It supports multiple user roles and delivers different navigation layouts depending on the role:

* **Merchants** get a top horizontal navigation dashboard with sales and QR scan stats.
* **Back Office/Admins** get a sidebar-driven dashboard for managing users, roles, and merchants.

This makes it ideal for systems where merchants need simple, streamlined access to sales data, while admins need deeper control and configuration tools.

---

## ✨ Features

### 🔐 Authentication & Role-based Access

* Users log in and are redirected to the correct dashboard depending on their role (Merchant or Back Office/Admin).
* Access control ensures users only see what they’re permitted to.

### 📊 Merchant Dashboard

* Horizontal navigation bar for simple access.
* **Stats cards** for total sales, QR scans, and daily changes.
* Tools to track merchant activity and orders.

### 🛠 Back Office Dashboard

* Sidebar navigation for easy switching between sections.
* **User management**: Create, edit, and delete users.
* **Role & permission management**: Assign and update permissions.
* **Merchant management**: Manage merchants and their data.

### 🎨 Modern UI/UX

* Responsive design (mobile + desktop support).
* Built with **Tailwind CSS** for consistent, utility-first styling.
* Reusable and modular UI components.

### ⚡ Developer Friendly

* **Next.js (App Router)** structure.
* **TypeScript** support for safer development.
* Organized folders (`components`, `hooks`, `lib`, etc.).
* Supports absolute imports with `@/` prefix.

---

## 🛠 Tech Stack

| Layer        | Technology              |
| ------------ | ----------------------- |
| Framework    | Next.js (App Router)    |
| Styling      | Tailwind CSS            |
| Language     | TypeScript + JavaScript |
| Package Mgmt | npm                     |
| Tooling      | PostCSS, ESLint         |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Muller1616/ArifMenu.git
cd ArifMenu
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open your browser at **[http://localhost:3000](http://localhost:3000)** to see the app.

The server will automatically reload when you make code changes.

---

## 📂 Project Structure

```
├── app/               # Next.js pages and layouts
├── components/        # Reusable UI components (Navbar, Sidebar, StatsCards, etc.)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── public/            # Static assets (icons, images, logos)
├── styles/            # Tailwind CSS / global styles
├── next.config.mjs    # Next.js configuration
├── tailwind.config.ts # Tailwind config
├── tsconfig.json      # TypeScript config
└── postcss.config.mjs # PostCSS configuration
```

---

## 🔧 Customization

* **Tailwind Theme** → modify `tailwind.config.ts` to adjust colors, fonts, and design system.
* **Components** → add or extend UI components in `components/`.
* **Routing** → Next.js App Router handles routing under the `app/` folder.
* **Imports** → use `@/` alias for cleaner imports (configured in `tsconfig.json`).

---

## 📌 Roadmap

* [ ] Authentication flow integration (e.g., NextAuth.js or custom auth)
* [ ] Database integration for merchants, users, and roles
* [ ] API routes for data fetching and management
* [ ] Improved mobile layouts for both dashboards
* [ ] Deployment on Vercel or similar hosting

---

## 📷 Screenshots (Optional)

> Add screenshots or GIFs of the Merchant and Back Office dashboards here to showcase UI/UX.

---

## 🙌 Acknowledgements

Built with ❤️ using **Next.js**, **Tailwind CSS**, and **TypeScript**.
