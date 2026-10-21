import { useState } from 'react'

function TaskForm({ addTask }) {
  const [task, setTask] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const taskText = task.trim()
    if (!taskText) {
      return
    }

    addTask(taskText)
    setTask('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="new-task">
        New task
      </label>
      <input
        id="new-task"
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
