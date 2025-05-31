# BLOG APP

Born from the same **Chat App** starter, this capstone morphs the codebase into a full-featured publishing platform.  
Imagine “A Chiller Medium with comments that don’t stink” — a space where writers post, readers discuss, and everyone discovers new voices.

The default theme in the stub repo is **NYC Indie Game Spotlight** (each article highlights a local game dev). Feel free to keep that, pivot to *Panamanian street food*, *AI hot-takes*, or whatever lights you up.

---

### Core Features (MVP)

| Area | What the user can do |
|------|----------------------|
| **Accounts** | Sign-up / log-in / log-out (JWT stored in cookies or `localStorage`) |
| **Posts** | • CRUD: create, read, update, delete<br>• Rich-text or Markdown editor<br>• Upload a cover image |
| **Author Profiles** | Bio, avatar, social links, list of published posts |
| **Tags & Categories** | Filter articles by tag (*Unity3D*, *Personal Finance*, *Gluten-Free* …) |
| **Comments** | Threaded discussion, edit/delete your own comments |
| **Search** | Full-text search on title and body |
| **Likes / Bookmarks (stretch)** | Let readers applaud or save for later |
| **Dark Mode (stretch)** | Because our eyeballs deserve it |

Add, drop, or remix features — the spec is intentionally loose so you can own the build.

---

## Running the project locally

Repo layout: **/backend** (Express API) & **/frontend** (React + Vite). Run each in its own terminal.

### Prerequisites

* Node ≥ 18  
* PostgreSQL (or Docker)  
* `npm` or `yarn`

### Backend

```bash
cd backend
npm install
npm run dev          # nodemon on :5000
````

`src/index.js` mounts REST routes at `/api/*`.

#### Database

* **Connection** — `src/db/index.js` (Sequelize)
* **Config** — `src/db/config/config.json`
* **Models** — every file in `src/db/models` autoloads into `db`

```js
const { Post, User } = require('../db');
```

##### Migrations & seeders

```bash
npm run migrate      # up
npm run rollback     # down
npm run seed         # optional sample data
```

### Frontend (React 18 + Vite)

```bash
cd frontend
npm install
npm run dev          # hot-reloads on :3000
```
