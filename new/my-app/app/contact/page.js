// pages/contact.js

import Head from 'next/head';

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Contact Us - Next.js</title>
        <meta name="description" content="Contact Shri Vishnu Engineering College For Women." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center flex-grow">
        <div className="bg-white p-20 rounded-lg shadow-lg max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-lg mb-6">Have any questions or concerns? Feel free to reach out to us using the contact information below:</p>
          <div className="text-lg">
            <p><strong>Email:</strong> info@svecw.edu.in</p>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Address:</strong> Shri Vishnu Engineering College For Women, Vishnupur, Bhimavaram, Andhra Pradesh, India - 534202</p>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-center text-gray-500">
        
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
