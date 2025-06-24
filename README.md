# MEDIUM

A full-stack blogging application built with modern web technologies, designed for performance, scalability, and developer experience.

---

## 🚀 Tech Stack

### Frontend
- **React** — UI library for building interactive interfaces
- **TypeScript** — Static typing for better developer tooling
- **Zod** — Schema validation and type inference for form data

### Backend
- **Cloudflare Workers** — Serverless compute platform for lightning-fast backend APIs
- **Prisma** — Type-safe ORM with connection pooling
- **PostgreSQL** — Robust and scalable relational database

---

## 🔧 Features

- ✍️ Authenticated users can create, edit, and delete blog posts  
- 📜 All blog posts are public and paginated for browsing  
- 🔐 Secure authentication and form validation using Zod  
- ⚡ Fast serverless backend via Cloudflare Workers  
- 🧠 Fully typed codebase with shared types between frontend and backend  
- 📈 Optimized PostgreSQL access via Prisma  

---

## 📂 Project Structure

```
├── frontend/         # React app (Vite + TypeScript)
├── backend/          # Cloudflare Worker API routes
├── common/           # contains common files for both frontend and backend
└── README.md         # This file
```

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/mangit955/Medium.git
cd blogging-app

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Install backend dependencies
cd ../backend
npm install

# 4. Generate Prisma client
npx prisma generate

# 5. Start the development servers
# Run this in separate terminals
cd frontend && npm run dev
cd backend && npm run dev
```

---

## 🛠️ Environment Variables

Create a `.env` file in both `frontend/` and `backend/` folders. Example for the backend:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
```

---

## 🧪 Testing

- Frontend: Uses React Testing Library (optional)  
- Backend: Unit tests (if implemented)  
- Use `npm test` in respective folders

---

## 📤 Deployment

- **Frontend:** Can be deployed on Vercel/Netlify  
- **Backend:** Deploy Cloudflare Workers using `wrangler`

```bash
# Build and deploy backend
npm run build
npx wrangler publish
```

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).
