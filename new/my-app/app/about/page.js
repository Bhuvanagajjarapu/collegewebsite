// pages/about.js

import Head from 'next/head';

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>About SVECW - Next.js</title>
        <meta name="description" content="Learn more about Shri Vishnu Engineering College For Women." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">About SVECW</h1>
        <p className="text-lg mb-6">Empowering women through knowledge and action, Shri Vishnu Engineering College For Women (SVECW) is located in Bhimavaram – the central part of Coastal Andhra. The area, generally known for its commercial activities, has recently established itself as a Center for Academics.</p>
        <p className="text-lg mb-6">The campus is located in Vishnupur, just 3 km from Bhimavaram on the Tadepalligudem Road. Spread over 100 acres of landscape, the campus is known for its salubrious climate and congenial atmosphere for higher studies.</p>
        <p className="text-lg mb-6">Our infrastructure is vibrant, constantly evolving to keep pace with development. Equipped with well-equipped laboratories, lecture halls, drawing and seminar halls, the college provides a conducive environment for learning.</p>
        <p className="text-lg mb-6">We also offer adequate infrastructural support for sports activities, fostering physical fitness, personality development, sportsmanship, team spirit, leadership, and talent among our students.</p>
      </main>

      <footer className="mt-8 text-center text-gray-500">
       
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          
        </a>
      </footer>
    </div>
  )
}
