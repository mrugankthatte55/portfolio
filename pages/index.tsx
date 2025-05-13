import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Mrugank Thatte - Portfolio</title>
      </Head>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Hi, I'm Mrugank</h1>
        <p className="mt-4 text-gray-400">A passionate software engineer with experience in full-stack development, AI, and data visualization.</p>
      </main>
    </div>
  );
}