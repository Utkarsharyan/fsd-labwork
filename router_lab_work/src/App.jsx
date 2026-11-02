import { Link, Route, Routes } from 'react-router';
import './App.css';
import Navbar from './assets/Navbar';
import Dashboard from './Dashboard';
import Settings from './Settings';
import TaskDetails from './TaskDetails';

function NotFound() {
  return (
    <section className="page">
      <h1>Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Return to Dashboard</Link>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
