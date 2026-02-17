# User Management Application (React + TypeScript + Vite)

CRUD app to manage users using the public JSONPlaceholder API.

## Features

- **Fetch Users**: list users from JSONPlaceholder (`GET /users`)
- **Create User**: create form + `POST /users` (simulated)
- **Update User**: edit form + `PUT /users/:id` (simulated)
- **Delete User**: delete button + `DELETE /users/:id` (simulated)
- **Routing**: Home, Create, Edit, Details (React Router)
- **UX**: loading spinner + friendly error banners
- **Responsive UI**: table on desktop + card list on mobile

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy (bonus)

- **Vercel**: import the repo, framework preset “Vite”
- **Netlify**: build command `npm run build`, publish directory `dist`
