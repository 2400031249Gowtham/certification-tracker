import React from 'react';

const Sidebar = () => (
  <aside style={{ width: 200, background: '#fafafa', padding: 16 }}>
    {/* Add sidebar links if needed */}
    <div>Menu</div>
    <div><a href="/">Home</a></div>
    <div><a href="/dashboard">Dashboard</a></div>
    <div><a href="/certifications">Certifications</a></div>
  </aside>
);

export default Sidebar;
