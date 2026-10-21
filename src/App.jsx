import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id),
    )
  }

  return (
    <main className="app">
      <section className="container" aria-labelledby="page-title">
        <h1 id="page-title">Student Task Manager</h1>
        <p className="subtitle">Manage your daily tasks easily</p>

        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </section>
    </main>
  )
}

export default App
