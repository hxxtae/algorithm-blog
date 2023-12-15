'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {

  useEffect(() => {
    let lastScrollY = 0;
    const header = document.querySelector<HTMLElement>('#header');
    const createrPr = document.querySelector<HTMLElement>('#creater_sticky');
    const createrCh = document.querySelector<HTMLElement>('#creater_height');
    if (!header) return;

    const scrollOfBody = () => {
      if (window.scrollY < 57) {
        return;
      }
      
      // Scroll Up
      if (lastScrollY > window.scrollY) {
        header.style.transform = 'translateY(0px)';
        if (createrPr && createrCh) {
          createrPr.style.top = '57px';
          createrCh.style.minHeight = 'calc(100vh - 57px)';
        }
      }
      // Scroll Down
      if (lastScrollY < window.scrollY) {
        header.style.transform = 'translateY(-57px)';
        if (createrPr && createrCh) {
          createrPr.style.top = '0px';
          createrCh.style.minHeight = 'calc(100vh - 0px)';
        }
      } 
      lastScrollY = window.scrollY;
    }
    window.addEventListener('scroll', scrollOfBody);

    return () => {
      window.removeEventListener('scroll', scrollOfBody);
    }
  }, []);

  return (
    <div className={styles.header} id='header'>
      <div className={styles.header_left}>
        <Link href='/'>
          <Image
            className={styles.header_logo}
            src="/assets/header_logo.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={'/boj'}>BOJ</Link>
        <Link href={'/programmers'}>Programmers</Link>
      </div>
      <div>
        <ThemeChanger />
      </div>
    </div>
  )
}

function ThemeChanger() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button type='button' onClick={toggleTheme}>
      <strong className="dark:hidden">Light</strong>
      <strong className="dark:block">Dark</strong>
    </button>
  )
}