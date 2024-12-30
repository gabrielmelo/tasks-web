# Task Web

`Task Web` is a **to-do list application** developed as part of the practical test for the **React Fundamentals module** by Rocketseat. This application provides basic task management features, allowing users to efficiently manage and track their tasks.

## About the Challenge

The goal of this challenge is to develop a simple **task control application** with the following features:

1. **Add a New Task**  
   Users can create and add new tasks to the list.

2. **Mark/Unmark a Task as Completed**  
   Toggle tasks between completed and uncompleted states.

3. **Remove a Task**  
   Remove tasks from the list when they are no longer needed.

4. **Show Completion Progress**  
   Display the percentage of completed tasks to help track progress.

---

## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **CSS Modules**: For styling components.
- **JavaScript (ES6+)**: Core programming language.
- **Vite**: Development environment for building React applications.

---

## Key Learnings

This project helped reinforce core concepts of React, including:

1. **State Management**  
   - Understanding how to use the `useState` hook to manage the application's state.  
   - Learning about the importance of keeping the state immutable to ensure predictable behavior.

2. **Immutability**  
   - Understanding how to update the state without mutating the original data using methods like `map`, `filter`, and the spread operator (`...`).  
   - Preserving immutability ensures that React can efficiently re-render components.

3. **Props (Properties)**  
   - Learning how to pass data from parent components to child components using props.  
   - Leveraging props to make components reusable and modular.

4. **Lists and Keys**  
   - Rendering dynamic lists using the `map` method.  
   - Adding unique keys to list items to improve rendering performance and avoid potential bugs.

5. **Componentization**  
   - Breaking the UI into small, reusable, and independent components.  
   - Understanding the benefits of separation of concerns, such as easier maintenance and scalability.  

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/task-web.git

2. Navigate to the project directory:
```bash
cd task-web
```

3. Install dependencies:
```bash
npm install
# or
pnpm
```

### Running the Application
1. Start the development server:

```bash 
npm run dev
# or
pnpm dev
```
Open your browser and navigate to http://localhost:5173.

### Application Features

- Dynamic Task Management: Easily add, complete, or remove tasks.
- Interactive UI: Smooth user experience with React components.
- Real-time Progress: Track completion rates as you manage tasks.

### Project Structure
```plaintext
task-web/
├── src/
│   ├── components/   # Reusable React components
│   ├── styles/       # CSS module files
│   ├── App.jsx       # Main application file
│   └── main.jsx      # Entry point
├── public/           # Static assets
├── package.json      # Project configuration
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```