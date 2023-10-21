# CodeCamp15 - Prapawin Terdsirote (Mai) - Personal Project

# Developer Tools Used

1. React

   - Vite.js
   - TailwindCSS
   - Axios
   - React-router-dom, react-toastify
   - Joi

2. Node.js/Express.js

   - CORS

3. Security & Authentication

   - JWT (Jason Web Token)
   - Authorization/ User roles (user and admin)
   - Bcrypt

4. Database

   - Prisma
   - MySQL Workbench

5. System function - CRUD (Create, Read, Update, Delete)
6. Completed user flow

---

Paw Shelter (Dog Adoption)

# Background and Significance

Pet ownership has numerous benefits for humans, and one of the most beloved pets is dogs. Many people often seek expensive dogs, believing that higher-priced dogs are of higher quality, beauty, and strength. However, there are numerous abandoned and homeless dogs in the world today. With proper care, attention, a home, and food, these dogs can be healthy, have beautiful fur, and, most importantly, possess intelligence no less than expensive dogs. They can bring happiness and brighten human lives just the same.

We want to provide opportunities for these homeless dogs to find homes and families through our website. Individuals interested in adopting dogs can register on our website, browse and select dogs they wish to adopt. If they meet the assessment criteria of our team, they can adopt a dog at no cost.

# System Scope and Operations

## 1. User

- Users must sign up or log in to access the website.
- Users cannot access admin paths (path protection both frontend and backend)

Sign Up

- Sign-up includes first name, last name, email, password, and password confirmation.

Log In

- Users can log in with their email and password to access the Home page.
- Users can view dogs that are in need of homes.
- Users can "like" dogs by clicking a heart symbol.
- Users can click "Adopt Me" if they are interested in adopting a dog (this button leads to the "How to Adopt" page, explaining the dog adoption process).
- Users can log out of the website (redirecting to the login page).

## 2. Admin

- Admins can log in and log out (using the same login page as users).
- Admins can perform CRUD (Create, Read, Update, Delete) operations on dog information, including dog images, names, gender, breed, and description.
- Admins will be redirected to Admin Main Page where they can perform CRUD
