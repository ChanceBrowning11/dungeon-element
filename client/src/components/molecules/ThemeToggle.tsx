'use client'

import { useEffect, useState } from 'react';

const divClass = `
  relative w-11 h-6 bg-gray-200 rounded-full peer
  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700
  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
  peer-checked:after:border-white peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600
  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
`;

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    const preference = localStorage.getItem('darkMode');
    if (preference !== null) {
      setIsDark(preference === 'true');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  return (
    <>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isDark}
          onChange={() => setIsDark((current) => !current)}
          className='sr-only'
        />
        <span className='flex items-center text-foreground font-medium text-black'>
          Light
        </span>
        <span
          className={`
            mx-4 flex h-8 w-[60px] p-1 duration-200 items-center
            rounded-full shadow-md shadow-primary bg-accent
          `}
        >
          <span
            className={`h-6 w-6 rounded-full bg-primary duration-200 ${
              isDark ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='flex items-center text-foreground font-medium text-black'>
          Dark
        </span>
      </label>
    </>
  )
};
