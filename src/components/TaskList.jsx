import TaskItem from './TaskItem.jsx'

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet. Add your first task!</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
