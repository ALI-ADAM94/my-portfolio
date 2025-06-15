
import Navbar from '@/components/Navbar';
import React from 'react';
function Contact() {
  return (
    <>
      <Navbar/>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">تواصل معي</h2>
        <p>البريد الإلكتروني: ali@example.com</p>
        <p>رابط GitHub: github.com/aliadam</p>
      </main>
    </>
  );
}
export default  Contact;
