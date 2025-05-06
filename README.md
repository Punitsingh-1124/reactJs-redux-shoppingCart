# 🛒 Simple React Shopping Cart App

This is a beginner-friendly shopping cart web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. It allows users to view products, add them to a cart, adjust quantities, and view totals — all with a smooth UI and component-based structure.

---

## 🚀 Features

- Browse product listings
- View product details by URL slug
- Add items to cart
- Increase/decrease item quantity
- Remove item from cart automatically if quantity = 0
- Toggle cart panel with animation

---

## 🧠 What I Learned

This project helped in understanding:

### ✅ React Hooks
- `useState` – manage component-level state
- `useEffect` – handle side effects like filtering product detail
- `useDispatch` – dispatch actions to Redux store
- `useSelector` – select state data from the Redux store
- `useParams` – get dynamic URL values using React Router

### ✅ Redux Toolkit
- Creating a **slice** (`createSlice`)
- Managing global state for cart items and toggle status
- Using **actions** (`addToCart`, `changeQuantity`, `toggleStatusTab`)
- Reading and updating the store using Redux hooks



## 🖼️ Screenshots

### 🏠 Home Page
![image](https://github.com/user-attachments/assets/eaf9c510-f692-403e-a372-69c4dd0ba9bf)

### 🛒 Details Panel
![image](https://github.com/user-attachments/assets/22f3cb73-6ab3-450f-9897-693dadfb6a13)

### 🛒 Cart Panel
![image](https://github.com/user-attachments/assets/9692f455-4f93-4aaa-a560-43acc8ae143a)


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-shopping-cart.git
   cd react-shopping-cart
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Or if you're using plain React:

   ```bash
   npm start
   ```

4. **Open in browser**

   ```
   http://localhost:5173/   // (or http://localhost:3000/)
   ```

---

## 📁 Tech Stack

* React
* React Router
* Redux Toolkit
* Tailwind CSS
* Vite (or Create React App depending on setup)

