'use client';

import { useEffect, useState } from 'react';
import styles from './mainContent.module.css';

const textContent = {
  title: "Welcome to Hxxtae's Algorithm blog.",
  desc1: "'BOJ' and 'Programmers' algorithm problems have been solved and organized.",
  desc2: "I solved this "
}

const textKinds = [
  'BFS Algorithm.',
  'DFS Algorithm.',
  'Dynamic-Programming Algorithm.',
  'Dykstra Algorithm.',
  'Floyd-Warshall Algorithm.',
  'Minimum Spanning Tree Algorithm.',
]

export default function MainContent() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const texts = onPrintTexts();
    let print = 0;

    window.setInterval(() => {
      setText(texts[print]);
      print++;
      if (print >= texts.length) {
        print = 0;
      }
    }, 100);
  }, [mounted]);

  return (
    <section className={styles.mainContent}>
      <div className={styles.contentBox}>
        <span className={styles.title}>{textContent.title}</span>
        <span className={styles.desc1}>{textContent.desc1}</span>
        <div>
          <span className={styles.desc2}>{textContent.desc2}</span>
          <span className={styles.desc2_1}>{text}</span>
        </div>
      </div>
    </section>
  )
}

const onPrintTexts = () => {
  const result: string[] = [];
  const len = textKinds.length;

  const delay = (time: number, str: string) => {
    for (let i = 1; i <= time; i++) {
      result.push(str);
    }
  }

  const printText = (str: string, idx: number, print: string) => {
    if (idx >= str.length) {
      delay(15, print);
      return;
    }
    
    result.push(print + str[idx]);
    printText(str, idx + 1, print + str[idx]);
    result.push(print);
  }

  for (let i = 0; i < len; i++) {
    printText(textKinds[i], 0, '');
  }
  
  return result;
}