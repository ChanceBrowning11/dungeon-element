'use client';

import { TextButton } from '@/components/atoms';
import { ThemeToggle } from '@/components/molecules';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className='h-[90%] bg-accent rounded-lg flex flex-col p-4 w-full justify-between'>
      <div className="flex flex-col">
        <TextButton onClick={() => router.push('/home')}>Home</TextButton>
        <TextButton onClick={() => router.push('/')}>Enter</TextButton>
      </div>
      <ThemeToggle />
    </div>
  );
};
