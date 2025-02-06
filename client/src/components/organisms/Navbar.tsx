'use client';

import { TextButton } from '@/components/atoms/buttons';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="p-4 flex flex-col">
      <TextButton onClick={() => router.push('/home')}>Home</TextButton>
      <TextButton onClick={() => router.push('/')}>Enter</TextButton>
    </div>
  );
};
