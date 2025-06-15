

import Navbar from '@/components/Navbar';
import React from 'react';
function Projects() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">مشاريعي</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded">💼 مشروع 1 - وصف بسيط</li>
          <li className="border p-4 rounded">💼 مشروع 2 - وصف بسيط</li>
        </ul>
      </main>
    </>
  );
}

export default  Projects;
