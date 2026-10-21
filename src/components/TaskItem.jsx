function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <span className={task.completed ? 'task-text completed' : 'task-text'}>
        {task.text}
      </span>

      <div className="task-actions">
        <button
          className="complete-btn"
          type="button"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
