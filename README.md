# PeopleDesk · Employee dashboard

A small, responsive React employee directory with an API-powered dashboard and a client-side employee form.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal. To make a production build, run `npm run build`.

## What’s inside

- Dashboard at `/` and `/employees`, loading names, email addresses, IDs, phone numbers, and company names from JSONPlaceholder.
- Search, alphabetical sorting, and pagination for the directory.
- Employee form at `/employees/new`. It validates the required fields and previews a local success message without posting or saving data.
- Responsive layout, built with React, React Router, Lucide icons, and custom CSS.

The employee form is intentionally frontend-only, as the brief requests.
