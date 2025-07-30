<h1>🎬 Media Tracker App</h1>

A full-stack application to manage and track movies and TV shows.
This project is built using <b>React (Vite) + TailwindCSS</b> for the frontend and<b> Express + Prisma + MySQL</b> for the backend.

<hr>
<h2>📂 Folder Structure</h2>
plaintext
Copy
Edit
<pre>
MEDIA-TRACKER-APP/
│── app/                     # Frontend (React + Vite)
│   ├── public/               # Static assets
│   ├── src/                  # React source files
│   │   ├── assets/           # Images and icons
│   │   ├── Components/       # Reusable UI components
│   │   ├── App.jsx           # Main React component
│   │   ├── index.css         # Tailwind styles
│   │   └── main.jsx          # Entry point
│   ├── index.html            # HTML template
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
│
│── server/                   # Backend (Node.js + Express + Prisma)
│   ├── prisma/               # Prisma schema and migrations
│   ├── src/
│   │   ├── controllers/      # Route controllers
│   │   │   └── mediaController.js
│   │   ├── routes/           # Express routes
│   │   │   └── mediaRoutes.js
│   │   ├── utils/            # Utility functions
│   │   └── index.js          # Server entry point
│   ├── data.json             # Sample data
│   ├── package.json          # Backend dependencies
│   └── .env                  # Environment variables
│
│── README.md                 # Project documentation
│── .gitignore                # Git ignore file
</pre>

<hr>

🚀 Getting Started
1️⃣ Clone the repository
<pre> git clone https://github.com/your-username/media-tracker-app.git cd media-tracker-app </pre>
⚛️ Frontend (React + Vite)
2️⃣ Create Vite React App
<pre> npm create vite@latest app cd app </pre>
Choose React and JavaScript when prompted.

3️⃣ Install Frontend Dependencies
<pre> npm install @ant-design/icons @tailwindcss/vite antd axios react react-dom react-hot-toast react-router-dom tailwindcss </pre>
4️⃣ Setup Tailwind CSS
<pre> npx tailwindcss init </pre>
Update tailwind.config.js:

js
Copy
Edit
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
Add Tailwind to src/index.css:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
<hr>
<h3>🛠️ Backend (Node.js + Prisma)</h3>
5️⃣ Initialize Node.js
<pre> mkdir server && cd server npm init -y </pre>
6️⃣ Install Backend Dependencies
<pre> npm install @prisma/client cors dotenv express mysql2 nodemon npm install prisma --save-dev </pre>
7️⃣ Setup Prisma
<pre> npx prisma init </pre>
Update .env with MySQL database URL:

Edit
Copy
Edit
DATABASE_URL="mysql://user:password@localhost:3306/mediadb"
Create your Prisma schema in prisma/schema.prisma:

prisma
Copy
Edit
model Media {
  id       Int     @id @default(autoincrement())
  title    String
  type     String
  image    String
  director String
  budget   Float
  location String
  duration Int
  year     Int
}
Run:

<pre> npx prisma migrate dev --name init </pre>
8️⃣ Run Backend
<pre> npm run dev </pre>
9️⃣ Run Frontend
<pre> cd app npm run dev </pre>

✅ Summary
Frontend: React (Vite) + Tailwind + Ant Design

Backend: Node.js + Express + Prisma + MySQL

Features: Movie & TV show tracking, editing, and updating
