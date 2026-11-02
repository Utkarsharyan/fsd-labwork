import { useState } from 'react';

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <section className="page">
      <h1>Settings</h1>
      <p className="page-intro">Manage your application preferences.</p>
      <label className="preference">
        <input
          checked={notificationsEnabled}
          onChange={(event) => setNotificationsEnabled(event.target.checked)}
          type="checkbox"
        />
        Enable notifications
      </label>
    </section>
  );
}

export default Settings;