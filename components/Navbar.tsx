import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4 justify-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/future">Future Scope</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}