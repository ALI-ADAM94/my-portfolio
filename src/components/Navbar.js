import Link from 'next/link';
import './style.css';
 function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <ol>
          <li><Link href="/">الرئيسية</Link></li>
          <li><Link href="/projects">المشاريع</Link></li>
          <li><Link href="/contact">تواصل معنا </Link></li>
        </ol>
      </div>
    </nav>
  );
}
export default Navbar;
