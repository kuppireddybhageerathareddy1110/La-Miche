
# 🥐 La Miche — Premium Artisan Bakery E-Commerce Platform



<p align="center">
  <strong>Luxury Artisan Bakery • Full-Stack E-Commerce • Modern Web Experience</strong>
</p>

<p align="center">
  La Miche is a premium bakery e-commerce platform inspired by boutique European bakeries.  
  Designed with a refined artisan aesthetic, it delivers a seamless shopping experience, secure authentication, real-time order tracking, and a powerful administrative dashboard.
</p>

---

## 🌐 Live Demo

**Website:** https://la-miche.vercel.app/

---

## 📸 Preview

### 🏠 Home Experience
- Elegant artisan-inspired UI
- Premium bakery product showcase
- Smooth shopping interactions

### 🛒 Shopping Flow
- Dynamic cart experience
- Seamless checkout system
- Secure login authentication
- Order confirmation & tracking

### 🛡️ Admin Dashboard
- Product management
- Order monitoring
- User & role administration
- Analytics & revenue tracking

---

# ✨ Features

## 🛍️ Customer Experience

### 🥖 Artisan Product Catalog
Explore premium handcrafted bakery products categorized into:

- **Breads**
  - Sourdough
  - Baguettes
  - Rustic Loaves

- **Viennoiserie**
  - Croissants
  - Pain au Chocolat
  - Danish Pastries

- **Pâtisserie**
  - Cakes
  - Tarts
  - Premium Desserts

---

### 🛒 Dynamic Shopping Cart
A responsive slide-out cart system enables customers to:

- Add items instantly
- Modify quantities
- Remove products
- View real-time pricing updates
- Enjoy a seamless checkout flow

---

### 💳 Premium Checkout Experience
Multi-step checkout system featuring:

- Address confirmation
- Secure payment simulation
- Order review
- Purchase confirmation

---

### 📦 Real-Time Order Tracking
Customers can track their order status in real-time.

#### Order Timeline:
```text
Order Received
      ↓
Preparing Ingredients
      ↓
In The Oven 🔥
      ↓
Out For Delivery 🚚
      ↓
Delivered ✅
````

---

### 👤 Customer Dashboard

Users can:

* View order history
* Track active orders
* Re-order previous purchases
* Manage account activity

---

## 🛡️ Administrative Portal (`/admin`)

The application includes a powerful protected admin system.

### 📊 Dashboard Analytics

Administrators can monitor:

* Revenue statistics
* Order metrics
* Customer growth
* Sales performance
* Inventory overview

---

### 🍞 Product Management

Admins can:

* Add products
* Edit products
* Delete products
* Manage pricing
* Upload bakery details

---

### 📦 Order Management

Monitor customer orders in real time:

* Pending orders
* Baking stage
* Out for delivery
* Delivered orders
* Order status updates

---

### 👥 Team & User Management

Role-based authentication system:

#### Roles:

* **Admin**
* **Customer/User**

Features:

* Access management
* Role permissions
* Protected routes

---

### ⚙️ System Settings

Administrative configurations include:

* Store localization
* System preferences
* Database health monitoring
* Authentication management

---

# 🛠️ Tech Stack

| Category               | Technology              |
| ---------------------- | ----------------------- |
| **Framework**          | Next.js 14 (App Router) |
| **Frontend**           | React.js                |
| **Styling**            | Tailwind CSS            |
| **Authentication**     | NextAuth.js             |
| **Database**           | CockroachDB             |
| **ORM/Database Layer** | PostgreSQL Compatible   |
| **Icons**              | Lucide React            |
| **State Management**   | React Context API       |
| **Deployment**         | Vercel                  |

---

# 🏗️ Architecture Overview

La Miche follows a **modern full-stack architecture** using the **Next.js App Router**.

### Core Architecture:

```text
Frontend (Next.js + React)
            │
            ▼
Authentication Layer (NextAuth)
            │
            ▼
API / Server Actions
            │
            ▼
CockroachDB Database
```

---

# 📂 Project Structure

```text
La-Miche/
│── app/
│   ├── (admin)/              # Protected admin routes
│   ├── api/                  # API endpoints
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Auth, DB, constants
│   ├── login/                # Authentication pages
│   └── page.tsx              # Homepage
│
│── public/                   # Static assets
│── scripts/                  # Database scripts
│── middleware.ts             # Route protection
│── next.config.js
│── tailwind.config.js
│── package.json
│── README.md
```

---

# 🔐 Authentication System

La Miche uses **NextAuth.js** with **JWT authentication** and role-based authorization.

### Authentication Features

✅ Credential-based login
✅ JWT session strategy
✅ Role-based access control
✅ Protected admin routes
✅ Middleware authorization
✅ Fallback authentication system

---

## 👤 Test Credentials

### 🛡️ Admin Access

```text
Email: admin@lamiche.com
Password: Admin@1234
```

### 👤 User Access

```text
Email: user@lamiche.com
Password: User@1234
```

---

# 🚀 Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/your-username/La-Miche.git
cd La-Miche
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=your_cockroachdb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

---

## 4. Database Setup

Seed initial data:

```bash
node scripts/seed.js
```

---

## 5. Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🚀 Deployment

La Miche is deployed using **Vercel**.

### Production URL

https://la-miche.vercel.app/

### Build Command

```bash
npm run build
```

### Install Command

```bash
npm install
```

### Framework Preset

```text
Next.js
```

### Output Directory

```text
Leave Empty
```

---

# 🔒 Security Features

* JWT Authentication
* Protected Admin Routes
* Secure Credential Validation
* Password Hashing using bcrypt
* Middleware Route Protection
* Role-Based Authorization

---

# 🎨 Design Philosophy

La Miche embraces a **luxury artisan bakery identity**, combining:

* Elegant typography
* Warm bakery aesthetics
* Smooth interactions
* Minimal premium UI
* Responsive layouts

The interface is inspired by boutique French pâtisseries and modern luxury e-commerce experiences.

---

# 📈 Future Enhancements

* Online payment gateway integration
* Email notifications
* Wishlist functionality
* Product reviews & ratings
* Inventory management
* Multi-language support
* Advanced analytics dashboard

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.


<p align="center">
Made with ❤️ and passion for artisan baking & modern web experiences.
</p>
```
