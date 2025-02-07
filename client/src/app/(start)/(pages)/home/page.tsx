'use client';

import { PageHeader, PrimaryButton } from '@/components/atoms';
import { useRouter } from 'next/navigation';
import { FaPlus } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className='flex justify-between w-full'>
        <PageHeader>
          Creature List
        </PageHeader>
        <PrimaryButton styles='px-8' onClick={() => router.push('/creatures/0')}>
          <FaPlus />
        </PrimaryButton>
      </div>
    </div>
  );
}
