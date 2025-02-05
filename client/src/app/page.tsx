'use client'

import { useState } from 'react';

export default function Home() {
  const [responseMessage, setResponseMessage] = useState('');

  const sendWebhook = async () => {
    const res = await fetch('http://localhost:8000/api/webhook/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ example: 'Hello from Next.js!' }),
    });

    const data = await res.json();
    setResponseMessage(data.status || data.error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Next.js & Django Integration</h1>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={sendWebhook}
      >
        Send Webhook
      </button>
      {responseMessage && <p className="mt-4 text-xl">{responseMessage}</p>}
    </div>
  );
}
