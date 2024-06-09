import { Link } from '@tanstack/react-router';
import { type ReactNode, useEffect, useState } from 'react';

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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((index + 1) % phrases.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

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
      <main className={classes.content}>{children}</main>
      <footer className={classes.footer}>
        <span className={classes.footerText}>&quot;{phrases[index]}&quot;</span>
      </footer>
    </div>
  );
}

export interface LayoutProps {
  readonly children?: ReactNode;
}
