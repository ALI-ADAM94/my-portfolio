
import Navbar from '@/components/Navbar';
import React from 'react';
import Link from 'next/link';
function Contact() {
  return (
    <>
      <Navbar/>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">تواصل معي</h2>
        <p>البريد الإلكتروني: aliadam081194@gmail.com</p>
        <p> رابط : <a href='https://github.com/ALI-ADAM94'>GitHub</a></p>
      </main>
    </>
  );
}
export default  Contact;
