'use client';

import { PrimaryButton } from '@/components/atoms';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const sendWebhook = async () => {
    // const res = await fetch('http://localhost:8000/api/webhook/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ example: 'Hello from Next.js!' }),
    // });

    // const data = await res.json();
    router.push('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Dungeon Element</h1>
      <PrimaryButton onClick={sendWebhook}>
        Enter
      </PrimaryButton>
    </div>
  );
}
