# FarmExpress - Farming Machines Rental Platform

## Table of Contents

- [FarmExpress - Farming Machines Rental Platform](#farmexpress---farming-machines-rental-platform)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Folder Structure](#folder-structure)

## Description
FarmExpress is a platform designed for farmers to easily rent farming machines for their agricultural needs. Similar to the Ola app, FarmExpress allows users to sign up, log in, and browse a variety of farming machines available for rent. After selecting a machine, users can view information about the machine owner and proceed to make a booking. The application streamlines the process of connecting farmers with machine owners, making it convenient for users to find and rent the equipment they need.

## Features
- User authentication with signup and login functionality.
- Intuitive dashboard for users to browse and rent farming machines.
- Machine categories for easy navigation.
- Detailed information about each machine and its owner.
- Booking section to keep track of rented machines.

## Prerequisites
Ensure you have the following installed before running FarmExpress:
- Node.js
- MongoDB
- npm or yarn

## Installation
Follow these steps to set up FarmExpress on your local machine:
```bash
# Clone the repository
git clone https://github.com/your-username/farm-express.git

# Navigate to the app directory
cd farm-express/app

# Install dependencies
npm install

# Navigate to the server directory
cd farm-express/server

# Install dependencies
npm init
```
## Configuration
Set up the required environment variables by creating a `.env` file in the root of the server directory and app directory. Add the following variables to the file:

**For Server .env**
```
PORT=5000
CONNECTION_URL=mongodb+srv://ritesh01112000:Ritesh*2000@capstone.cbnfsxb.mongodb.net/?retryWrites=true&w=majority
```
**For app .env**
```
REACT_APP_SERVER_URL=http://localhost:5000
```
## Folder Structure
- `app`: Contains the React.js frontend application.
  - `public`: Static assets and the HTML entry point.
  - `src`: Source code for the React.js application.
  - `.env`: Server url

- `server`: Contains the Express.js backend application.
  - `routes`: Backend API routes.
  - `models`: MongoDB models.
  - `controllers`: Business logic controllers.
  - `index.js`: Entry point for the Express.js server.
  - `.env`: Configuration file for environment variables.