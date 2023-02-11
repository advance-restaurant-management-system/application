# ✨ Application Features 
<!-- display image here from public folder cover.png -->
<img src="/public/cover.png" alt=“cover” height="500" width="700" style="border-radius:20px">

## 👱 Types of User

- [x] Admin
	- [x] Kitchen manager
	- [x] Deliver Boy
  - [x] Dynamic roles
- [x] Customer

----

## 👱 User Interface

 **Landing Page**
- [x] Ability to display all the food and services
- [x] Create account upon checkout
- [x] Login account

 **About us**
- [x] Contacts info

 **Customer Account**
- [x] List of product 
- Categories
- [x] Profile
- [x] My orders
- [x] My addresses
- [x] Ability to add orders
- COD
- Online Payment (GCASH)

**Admin Account**
- [x] Dashboard
	- [x] Summary (last 30 days)
	- [x] Overview charts
	- [x] Recent activity table
- [x] Categories ✅
	- [x] Create
	- [x] Read
	- [x] Update
	- [x] Delete
- [x] Products ✅
	- [x] Create
	- [x] Read
	- [x] Update
	- [x] Delete
- [x] Orders ✅
	- [x] Read
	- [x] Update
	- [x] Delete
- [x] users ✅
	- [x] Create
	- [x] Read
	- [x] Update
	- [x] Delete
- [x] roles ✅
	- [x] Create
	- [x] Read
	- [x] Update
	- [x] Delete
- [x] orders (status)
- New orders
- Under process orders
- Out to deliver orders
- Delivered orders
- Cancelled orders

**Delivery boy**
- Ability to view and manage delivery status

**Kitchen manager**
- Ability to view and manage delivery status
- Ability to manage all orders

---

## 🛠️ Settings

- [x] Profile
- [x] Address
- [x] Logout

---

## 👨‍🔬 Misc. Features

- [x] Realtime notification
- [x] Realtime events

----

## 🚀 Deployment

- `Domain name` - https://ronaldscatering.com/
- `Hosting platform` - [Laravel Forge](https://forge.laravel.com/)
- `Server platform` - [Digital Ocean](https://www.digitalocean.com/)

## ℹ️ Demo

<b>Links<b>
- `Admin` - https://ronaldscatering.com/admin
- `Customer` - https://ronaldscatering.com/

<b>Admin Credentials<b>

- `Email` - admin@test.com
- `Password` - password

## 🚧 Installation

- ```bash
  git clone https://github.com/Phojie/restaurant-management-system.git
  ```

- ```bash
  cd restaurant-management-system
  ```

- ```bash

  composer install
  ```

- ```bash 
  cp .env.example .env
  ```

- Fill in the credentials in the `.env` file that is generated

- ```bash
  php artisan key:generate && php artisan optimize
  ```

- ```bash
  php artisan migrate --seed
  ```

- ```bash
  php artisan storage:link
  ```

- ```bash
  php artisan serve
  ```

- ```bash
  yarn install && yarn dev
  ```


