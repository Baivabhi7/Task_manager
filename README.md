# Simple Task Manager

A simple task management application built using the **MERN stack** (MongoDB, Express, React, Node.js). This application allows users to manage tasks by adding, editing,and deleting based on priority and completion status. It features a user-friendly interface and uses local storage to persist task data.

## Project Overview

The **Simple Task Manager** application is designed to help users keep track of their tasks with the following functionalities:

- **Dashboard View**: A dashboard that displays all tasks, categorized by upcoming, overdue, and completed tasks.
- **Task Management**: Users can add, edit, and delete tasks. Each task includes:
  - Title
  - Description
  - Due date
  - Priority level (High, Medium, Low)
  - Completion status

The project is divided into two main parts:
- **Backend**: An Express.js server connected to MongoDB, which provides API endpoints for task management.
- **Frontend**: A React.js application that communicates with the backend to display and manage tasks.

## Technologies Used

- **MongoDB**: Database to store tasks persistently.
- **Express.js**: Backend framework to handle API requests.
- **React.js**: Frontend library to create a responsive and interactive UI.
- **Node.js**: Runtime for executing backend JavaScript code.

## Features

- **Add, Edit, Delete Tasks**: Full CRUD functionality.
- **Task Categorization**: Categorizes tasks by upcoming, overdue, and completed status.
- **Priority Levels**: Users can set and update the priority (High, Medium, Low) of each task.

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

1. Open a terminal and clone the repository:
   ```bash
   git clone <repository-url>
   
   Replace <repository-url> with the actual URL of the GitHub repository.
   
2. Navigate into the project directory
   cd <repository-name>

### 2. Backend Setup

1. Navigate to the backend directory:

```bash
cd backend

2. Install backend dependencies:

```bash
npm install

3. Start the Backend Server:

```bash
node server.js

### 3. Frontend Setup
1. Open a new terminal (or a new tab in the existing terminal).

2. Navigate to the frontend directory:

cd frontend

3. Install frontend dependencies:
npm install

4. Start the Frontend Server:
npm start




