# 🏠 StayNest — NestScale Global Accommodation Ecosystem

> A scalable, secure, and high-performance online accommodation marketplace — similar to Airbnb — built with Django, React, and PostgreSQL.

[![Django](https://img.shields.io/badge/Backend-Django-092E20?logo=django&logoColor=white)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📖 Table of Contents

- [Objective](#-objective)
- [Solution Overview](#-solution-overview)
- [Scope of the Project](#-scope-of-the-project)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Why This System is Better](#-why-this-system-is-better)
- [Relevance in Information Technology](#-relevance-in-information-technology)
- [Expected Outcomes](#-expected-outcomes)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Objective

The objective of this project is to design and develop a **scalable, secure, and high-performance online accommodation marketplace** named **StayNest**.

The platform enables users to:

- 🏡 **List rental properties** (hosts)
- 🔍 **Search and book accommodations** (guests)
- 📅 **Manage bookings and payments**
- 🗺️ **View property locations** on interactive maps
- ⭐ **Rate and review properties**

With the rapid growth of digital marketplaces and sharing economy platforms, there is a strong need for reliable, secure, and scalable systems capable of handling **real-time bookings**, **concurrent users**, **secure transactions**, and **personalized recommendations**.

The proposed system implements an **enterprise-grade full-stack architecture** using **Django (Python)** for the backend, **React** for the frontend, and **PostgreSQL** for the database — ensuring high performance, security, and scalability.

---

## 💡 Solution Overview

The StayNest platform will:

1. Provide **secure user authentication** and **role-based access** (Host & Guest).
2. Allow hosts to **create, edit, and manage** property listings.
3. Enable guests to **search properties** by:
   - Location
   - Price range
   - Availability dates
   - Property type
4. Support a **real-time booking system** with availability validation.
5. Integrate **secure payment gateway** functionality (simulation or API-based).
6. Provide **rating and review** functionality.
7. Offer **wishlisting/bookmarking** feature.
8. Store structured relational data using **PostgreSQL**.
9. Implement **RESTful APIs** using Django REST Framework.
10. Deliver a **responsive UI** using React.

---

## 📐 Scope of the Project

The scope of this project includes:

| Area | Details |
|------|---------|
| **Full-Stack Development** | Complete marketplace application |
| **Authentication** | Role-based authentication using JWT |
| **Booking Logic** | Real-time booking with date validation and conflict prevention |
| **Search & Filter** | Advanced filtering and search system |
| **Media Storage** | Integration of cloud-based media storage |
| **Transactions** | Secure transaction simulation |
| **Database Design** | Scalable PostgreSQL with relational modeling |
| **Deployment** | Production-ready architecture |

> This project aims to simulate a **real-world marketplace system** used in the sharing economy domain.

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React.js** | UI framework |
| **Axios** | API communication |
| **Tailwind CSS / Material UI** | Styling & components |

### Backend
| Technology | Purpose |
|------------|---------|
| **Django** | Web framework |
| **Django REST Framework (DRF)** | RESTful API development |

### Authentication
| Technology | Purpose |
|------------|---------|
| **JWT (SimpleJWT)** | Token-based authentication |

### Database
| Technology | Purpose |
|------------|---------|
| **PostgreSQL** | Relational database |

### Additional Services
| Technology | Purpose |
|------------|---------|
| **Cloudinary / AWS S3** | Image storage |
| **Stripe** | Payment integration (optional) |
| **Mapbox / Google Maps** | Interactive maps |

---

## 🏗️ System Architecture

The system follows a **three-tier architecture**:

```
┌─────────────────────────────────────────────────┐
│           PRESENTATION LAYER (React)            │
│  • UI Rendering • API Requests • Client State   │
└──────────────────────┬──────────────────────────┘
                       │  REST API (JSON)
                       ▼
┌─────────────────────────────────────────────────┐
│          APPLICATION LAYER (Django)             │
│  • Business Logic   • Booking Validation        │
│  • Authentication   • API Endpoints             │
│  • Payment Processing                           │
└──────────────────────┬──────────────────────────┘
                       │  Django ORM
                       ▼
┌─────────────────────────────────────────────────┐
│           DATA LAYER (PostgreSQL)               │
│  • Users  • Properties  • Bookings              │
│  • Reviews  • Transactions                      │
└─────────────────────────────────────────────────┘
```

This architecture ensures:
- ✅ **Scalability**
- ✅ **Data Integrity**
- ✅ **Security**
- ✅ **Separation of Concerns**

---

## 🚀 Why This System is Better

This project is considered advanced due to:

1. **Real-time booking conflict resolution** — prevents double bookings using transactional validation.
2. **Relational database modeling** — with foreign key constraints and normalization.
3. **Secure JWT authentication** — token-based authorization for all protected routes.
4. **Production-ready RESTful API design** — clean, well-documented endpoints.
5. **Role-based access control** — distinct Host and Guest permissions.
6. **Payment workflow integration** — secure transaction processing.
7. **Scalable architecture** — using Django ORM and PostgreSQL indexing.
8. **Concurrent transaction handling** — built for real-world multi-user scenarios.

> Unlike simple CRUD projects, this system handles **complex marketplace logic** similar to enterprise-level applications.

---

## 🌐 Relevance in Information Technology

This project demonstrates:

- 🔧 Advanced **backend engineering** using Django
- 🌐 **REST API architecture** design
- 🗄️ **Database normalization** and relational modeling
- 🔐 Secure **authentication and authorization**
- 💰 **Transaction management** and concurrency control
- 🔗 **Frontend-backend integration**
- 📈 Real-world **system scalability**

It aligns with modern industry standards in:

| Domain | Application |
|--------|-------------|
| **E-commerce Platforms** | Online marketplaces |
| **SaaS Applications** | Cloud-based services |
| **Marketplace Systems** | Multi-vendor platforms |
| **Sharing Economy** | Peer-to-peer rental systems |

---

## ✅ Expected Outcomes

Upon completion, the system will:

- ✔️ Allow **seamless property listing and booking**
- ✔️ Ensure **secure transactions**
- ✔️ Prevent **double bookings** using transactional validation
- ✔️ Provide **scalable database performance**
- ✔️ Deliver **production-level user experience**

---

## 🏁 Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- PostgreSQL 14+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyanshupaikra/NestScale-Global-accommodation-ecosystem.git
   cd NestScale-Global-accommodation-ecosystem
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Environment Variables**

   Create a `.env` file in the backend directory:
   ```env
   SECRET_KEY=your-secret-key
   DEBUG=True
   DATABASE_URL=postgresql://user:password@localhost:5432/staynest
   CLOUDINARY_URL=your-cloudinary-url
   STRIPE_API_KEY=your-stripe-key
   ```

---

## 📁 Project Structure

```
NestScale-Global-accommodation-ecosystem/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── staynest/          # Django project settings
│   ├── users/             # User authentication & profiles
│   ├── properties/        # Property listings
│   ├── bookings/          # Booking management
│   ├── reviews/           # Ratings & reviews
│   └── payments/          # Payment processing
├── frontend/
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Route pages
│       ├── services/      # API service layer
│       └── App.js
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Priyanshu Paikra** — [@priyanshupaikra](https://github.com/priyanshupaikra)

Project Link: [https://github.com/priyanshupaikra/NestScale-Global-accommodation-ecosystem](https://github.com/priyanshupaikra/NestScale-Global-accommodation-ecosystem)

---

<p align="center">
  Made with ❤️ for the Sharing Economy
</p>
