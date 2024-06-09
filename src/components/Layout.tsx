import { Link, useLocation } from '@tanstack/react-router';
import { type ReactNode, useEffect, useRef, useState } from 'react';

import classes from './Layout.module.scss';

const phrases = [
  'Power and Order Prevail',
  'Strength Through Unity',
  'May the Empire Reign',
  'Unyielding Force, Unstoppable Might',
  'For the Glory of the Empire',
  'Dominion and Discipline',
  'Victory is Inevitable',
];

export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((index + 1) % phrases.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  useEffect(() => {
    contentRef.current?.scrollTo?.({ top: 0 });
  }, [pathname]);

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <span>Imperial Destroyers Center</span>
      </header>
      <aside className={classes.sidebar}>
        <Link to="/">
          Planets <span>•</span>
        </Link>
        <Link to="/starships">
          Starships <span>•</span>
        </Link>
        <Link to="/vehicles">
          Vehicles <span>•</span>
        </Link>
      </aside>
      <main className={classes.content} ref={contentRef}>
        <div className={classes.maxWidth}>{children}</div>
      </main>
      <footer className={classes.footer}>
        <span className={classes.footerText}>&quot;{phrases[index]}&quot;</span>
      </footer>
    </div>
  );
}

export interface LayoutProps {
  readonly children?: ReactNode;
}
