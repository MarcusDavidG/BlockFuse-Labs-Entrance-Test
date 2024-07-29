Task Manager SPA:
This is a simple task management tool built with Vite, React, and TailwindCSS. The application allows users to create, update, delete, and list tasks with state persistence using local storage.

Features:
Create tasks with title and description.
Update existing tasks.
Delete tasks.
List all tasks.
State persistence with local storage.

Usage:
Open your browser and navigate to 
Use the application to manage your tasks.

Components
App.jsx: Main component that sets up routing and state management.
TaskList.jsx: Component to list all tasks.
AddTask.jsx: Component to add a new task.
EditTask.jsx: Component to edit an existing task.
State Management
State is managed using React’s useState and useEffect hooks.
Task data is persisted in local storage to retain state across page reloads.

Routing:
Routing is handled using react-router-dom.

Routes:
/: Task list view.
/add: Add task view.
/edit/:id: Edit task view.

Form Validation:
Form validation is implemented using formik and yup.
Error messages are displayed for invalid input.

