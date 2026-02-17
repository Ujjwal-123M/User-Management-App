# User Management Application (React + TypeScript + Vite)

A fully functional CRUD application built with **React, TypeScript, Vite, Axios, and React Router**, using the public JSONPlaceholder API.

🔗 **Live Demo:**  
https://user-management-app-woad-sigma.vercel.app

---

## 🚀 Features

- **Fetch Users** — Display users from JSONPlaceholder (`GET /users`)
- **Create User** — Form submission using `POST /users` (simulated)
- **Update User** — Edit existing user using `PUT /users/:id` (simulated)
- **Delete User** — Remove user using `DELETE /users/:id` (simulated)
- **Client-side Routing** — Home, Create, Edit, and Details pages (React Router)
- **Local Persistence Layer** — Overlay system using localStorage to simulate real backend persistence
- **Loading States** — Spinner while API requests are in progress
- **Error Handling** — User-friendly error banners
- **Responsive Design** — Table layout (desktop) and card layout (mobile)
- **Type Safety** — Fully typed using TypeScript

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- Axios
- React Router
- Vercel (Deployment)

---

## 💻 Run Locally

```bash
npm install
npm run dev
