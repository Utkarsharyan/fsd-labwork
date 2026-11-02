import { Link, useParams } from 'react-router';
import tasks from './tasks';

function TaskDetails() {
  const { taskId } = useParams();
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return (
      <section className="page">
        <h1>Task Not Found</h1>
        <p>No task matches ID {taskId}.</p>
        <Link to="/">Return to Dashboard</Link>
      </section>
    );
  }

  return (
    <section className="page">
      <Link to="/">← Back to Dashboard</Link>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p><strong>Task ID:</strong> {task.id}</p>
    </section>
  );
}

export default TaskDetails;