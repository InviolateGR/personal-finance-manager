💰 Personal Finance Manager – Full Stack Web App

A full-stack personal finance management web application that helps users track income and expenses, visualize spending patterns, and manage budgets securely.

This project is built as a software engineering portfolio project, demonstrating real-world full-stack development using modern web technologies.

🚀 Features
🔐 Authentication

User registration & login

Secure JWT-based authentication

Protected routes for authenticated users

💳 Transaction Management

Add income and expense transactions

Categorize transactions (Food, Rent, Salary, etc.)

Delete transactions

View recent transactions in a table

📊 Dashboard & Analytics

Monthly income & expense summary

Savings calculation

Interactive charts for visual insights

Real-time data updates

🎯 Budgeting (Planned / In Progress)

Set monthly budget goals

Track spending against budget

Visual budget alerts (coming soon)

🧑‍💻 Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

Axios

Recharts / Chart.js

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Tools

Git & GitHub

VS Code

Postman (API testing)

📁 Project Structure
Backend (/backend)
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── transactionController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Transaction.js
│   └── Budget.js
├── routes/
│   ├── authRoutes.js
│   ├── transactionRoutes.js
│   └── budgetRoutes.js
├── .env
├── server.js
└── package.json

Frontend (/frontend)
frontend/
├── src/
│   ├── components/
│   │   ├── ProtectedRoute.jsx
│   │   ├── TransactionForm.jsx
│   │   └── TransactionChart.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── package.json

⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key

🧪 API Testing

APIs were tested using Postman:

POST /api/auth/register

POST /api/auth/login

GET /api/transactions

POST /api/transactions

DELETE /api/transactions/:id

🛠️ Setup & Run Locally
Backend
cd backend
npm install
npm start

Frontend
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost:5000

🌐 Deployment

Backend deployed on Render

Frontend deployed on Vercel

MongoDB hosted on MongoDB Atlas

(Deployment instructions will be added after final release.)

📌 Current Status

✅ Authentication (Register / Login)
✅ Dashboard UI with Tailwind CSS
✅ Transaction CRUD
✅ Charts integration
🟡 Budget feature (in progress)
🟡 Final deployment polish

📚 Learning Outcomes

Full-stack application architecture

Secure authentication using JWT

REST API design

MongoDB schema modeling

Frontend–backend integration

Deployment & environment management

Git-based version control

🙋‍♂️ Author

Gowshick Raja
Final-year Engineering Student
Aspiring Full-Stack / Software Engineer

🔗 Portfolio: https://inviolategr.github.io/gowshick-portfolio/

🔗 GitHub: https://github.com/inviolategr

⭐ Acknowledgements

This project was built as part of a self-driven learning journey with a focus on industry-ready full-stack development.
