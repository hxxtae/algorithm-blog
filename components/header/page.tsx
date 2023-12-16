'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

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
        <Link className={styles.header_logo} href='/'>
          <ThemeLogo />
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // For hydration
  if (!mounted) return;

  return (
    <button className={styles.theme_button} type='button' onClick={toggleTheme}>
      <span data-theme={theme !== 'dark' ? 'show' : 'hidden'}><FontAwesomeIcon icon={faSun} size='1x' /></span>
      <span data-theme={theme === 'dark' ? 'show' : 'hidden'}><FontAwesomeIcon  icon={faMoon} size='1x' /></span>
    </button>
  )
}

// ⚠ Avoid Hydration Mismatch
// 서버(SSI)의 테마를 알 수 없기 때문에 useTheme에서 반환된 많은 값은 클라이언트에 마운트될(CSR) 때까지 정의되지 않습니다.
// 즉, 클라이언트에 탑재하기 전에 현재 테마를 기반으로 UI를 렌더링하려고 하면 수화(Hydration) 불일치 오류가 표시됩니다.
// ex) 기본 테마가 light인 경우 dark 모드에서 새로고침(서버 재접속)시 서버와 클라이언트의 theme가 불일치

// ✨ fix hydration of theme
// 이 문제를 해결하려면 페이지가 클라이언트(CSR)에 탑재될 때 현재 테마를 사용하는 UI만 렌더링해야 합니다.

function ThemeLogo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // For hydration
  if (!mounted) return;

  return (
    <>
      {theme === 'dark' ? (
        <Image
          className={styles.header_logo}
          src="/assets/header_logo_light.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      ) :
        <Image
          className={styles.header_logo}
          src="/assets/header_logo_dark.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />}
    </>
  )
}