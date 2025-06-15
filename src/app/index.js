import Navbar from '@/components/Navbar';
import React from 'react';
  function Index(){
  return (
    <>
      <Navbar/>
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-4">مرحبًا، أنا علي</h2>
        <p className="text-lg">مطور واجهات أمامية ومهتم بتقنيات الويب الحديثة.</p>
      </main>
    </>
  );
}
export default Index;