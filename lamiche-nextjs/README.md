# 🥐 La Miche — Premium Artisan Bakery

La Miche is a high-end, full-stack e-commerce platform for a boutique bakery. Built with **Next.js 14**, it features a sophisticated artisan aesthetic, a robust authentication system, a real-time order tracking experience, and a comprehensive administrative management portal.

---

## ✨ Key Features

### 🛒 Customer Experience
- **Artisan Catalog**: A beautifully categorized menu featuring Breads, Viennoiserie, and Pâtisserie.
- **Dynamic Shopping Basket**: A slide-out cart for a seamless adding/removing experience.
- **Premium Checkout**: A secure, multi-step checkout flow with integrated payment simulation.
- **Real-time Order Tracking**: A live status timeline (Baking → Out for Delivery) with an "In the Oven" status indicator.
- **Order History**: Personal dashboard for customers to view past purchases and re-order.

### 🛡️ Administrative Portal (`/admin`)
- **Management Dashboard**: High-level statistics on revenue, orders, and customer growth.
- **Product Manager**: Add, edit, or delete items from the store catalog with ease.
- **Order Management**: Monitor and update the status of active customer requests.
- **Team & Users**: Manage administrative access and user roles.
- **System Settings**: Configure store localization and monitor database cluster health.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (JWT & Credentials)
- **Database**: [CockroachDB](https://www.cockroachlabs.com/) (PostgreSQL-compatible)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API (Cart & UI state)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.x or higher
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/lamiche-nextjs.git

# Navigate to the directory
cd lamiche-nextjs

# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
DATABASE_URL=your_cockroachdb_connection_string
NEXTAUTH_SECRET=your_random_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4. Database Setup
```bash
# Seed the database (if connection is active)
node scripts/seed.js
```

### 5. Run Locally
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

---

## 🔐 Testing Credentials

For development and testing purposes (or if the database is offline), the following **Fallback Credentials** are available:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@lamiche.com` | `Admin@1234` |
| **User** | `user@lamiche.com` | `User@1234` |

---

## 📂 Project Structure

- `app/`: Next.js App Router (Pages and API routes)
- `app/(admin)/`: Protected Administrative routes
- `app/components/`: Reusable UI components (Navbar, Cart, ProductCards)
- `app/lib/`: Core logic (Auth configuration, Database client, Data constants)
- `public/`: Static assets and brand imagery
- `scripts/`: Database seeding and maintenance scripts

---

## 🥐 Bon Appétit!
Developed with passion for the art of baking and modern web technology.
