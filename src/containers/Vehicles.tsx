import { useLoaderData } from '@tanstack/react-router';

import classes from './common.module.css';

export default function Vehicles(): JSX.Element {
  const data = useLoaderData({ from: '/vehicles' });

  return (
    <>
      <h1>Vehicles</h1>
      <div className={classes.grid}>{JSON.stringify(data)}</div>
    </>
  );
}
