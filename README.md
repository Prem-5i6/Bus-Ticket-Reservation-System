# Bus-Ticket-Reservation-System
Wipro Capstone Project
🚌 Bus Reservation System

A RESTful Web Application for managing and booking bus journeys, built with Spring Boot, JPA, and MySQL. The system supports passenger & admin features, wallet payments, role-based access, and journey management—ensuring a smooth ticket booking experience.

✨ Features:

👨‍💻 User Management:

User Registration & Login (Admin, Passenger)

Role-based Access Control (secured with JWT)

🚍 Bus & Stop Management:

Add, List, Update, Delete Buses

Manage Bus Stops:

🗓️ Journey Scheduling -> Create, Read, Update, Delete Journeys

-> Define fares based on seat classes (Front, Middle, Back)

-> Search journeys by departure/arrival stop & time

-> Update journey status

🎟️ Booking System:

-> Book, cancel tickets with real-time seat availability

-> Booking status: Confirmed or Waiting Queue

-> Waiting queue auto-updates when confirmed seats are canceled

-> Download PDF e-tickets

💳 Wallet System:

-> Add money to wallet

-> Book journeys using wallet balance

-> Automatic refunds on cancellations

🛠️ Admin Panel:

-> Manage Users, Buses, Stops, and Journeys

-> Monitor all customer bookings

📑 API & Error Handling:

-> Swagger/OpenAPI documentation for all REST APIs

-> Centralized Exception Handling

-> Request validation & logging via interceptors

🏗️ Tech Stack:

-> Java 17

-> Spring Boot 3 (REST API)

-> Spring Data JPA + Hibernate (ORM)

-> MySQL (Database)

-> React JS (Frontend)

-> Maven (Build tool)

-> Lombok (Reduce boilerplate)

-> Bootstrap (Responsive UI)

-> Swagger/OpenAPI (API Documentation)

📂 Project Modules:

🔐 User Authentication Module:

-> Login, registration, and authorization for Admin / Passenger

🚌 Bus Stop & Bus Module:

-> Add / View Bus Stops

-> Add / View / Update / Delete Buses

🗓️ Journey Module:

-> Add, View, Search, Cancel, and Update Journeys

🎟️ Booking Module:

-> Book Journey Tickets

-> View Booking History

-> Cancel Tickets

-> Admin can view all customer bookings

-> PDF ticket download

⚙️ Getting Started:

1️⃣ Clone the Repository

bash

git clone https://github.com/Vyshnavi/Bus-Ticket-Reservation-System-CapstoneProject.git

cd bus-reservation-system

2️⃣ Configure MySQL Database

Create a database in MySQL:

sql CREATE DATABASE bus_reservation_system;

Update src/main/resources/application.properties:

text

spring.datasource.url=jdbc:mysql://localhost:3306/bus_reservation_system

spring.datasource.username=your_mysql_user

spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true

3️⃣ Build & Run Backend (Spring Boot)

bash

mvn clean install

mvn spring-boot:run

4️⃣ Run Frontend (ReactJS)

bash

cd frontend

npm install

npm start

🏃 How It Works?

Admins: Add buses, stops, and create journeys

Passengers: Sign up, search journeys, select seats, book tickets, and pay using wallet

System manages waiting queues, seat confirmations, and automatic refunds

Users can view booking history & download PDF tickets

Admins can view all bookings from the dashboard

💻 Software Used Backend IDE: Eclipse / Spring Tool Suite (STS) / IntelliJ

Frontend IDE: VS Code

Database Tool: MySQL Workbench

👥 User Roles

Administrator Module: Manage buses, stops, journeys, users, and monitor bookings

Customer Module: Search journeys, book/cancel tickets, manage wallet, download e-tickets

📖 API Documentation

The REST APIs are documented with Swagger. Once the backend is running, open:

text

http://localhost:8080/swagger-ui.html

🚀 Overview

The Bus Reservation System built with Spring Boot + ReactJS + MySQL provides:

A seamless booking experience for passengers

A powerful management dashboard for admins

Secure transactions with JWT & Wallet system

Automatic seat allocation with waiting queue management

🎨 Frontend (React JS):

The frontend of the Bus Reservation System is developed using React JS, providing a responsive and user-friendly interface for both passengers and administrators. The frontend works seamlessly with the Spring Boot backend through RESTful APIs to deliver a smooth booking and management experience.

Key Features:

User Authentication: Registration and login forms for Admin and Passenger with JWT token handling for secure access

Bus and Bus Stop Management: Admin interface to add, view, and manage buses and bus stops

Journey Display & Search: Search journeys by departure and arrival stops along with date filters

Seat Selection: Interactive seat map allowing users to select from Back, Middle, or Front seat classes per journey

Booking & Cancellation: Book confirmed seats, view booking history, cancel bookings with instant wallet balance updates

Wallet Integration: Add money to wallet and use balance to pay for bookings within the frontend

Download E-tickets: After booking, users can download their PDF tickets directly from the app

Admin Dashboard: View all customers, bookings, and manage journey statuses

Technology Stack:

React JS: For building dynamic, component-based UI

React Router: For frontend routing and navigation

Axios: For API communication with the backend

Bootstrap: For responsive styling and layout

JWT: For frontend token storage and authentication state management

Running the Frontend Locally

Navigate to the frontend directory inside the project:

bash

cd frontend

Install dependencies:

bash

npm install

Start the development server:

bash

npm start

The frontend will be accessible at:

text http://localhost:3000
