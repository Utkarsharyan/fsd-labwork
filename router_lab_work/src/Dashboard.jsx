import { Link } from 'react-router';
import tasks from './tasks';

function Dashboard() {
  return (
    <section className="page">
      <h1>Dashboard</h1>
      <p className="page-intro">Welcome to your Task Manager.</p>

      <h2>Your Tasks</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Dashboard;
