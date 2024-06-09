import { useLoaderData } from '@tanstack/react-router';

import classes from './common.module.scss';

export default function Planets(): JSX.Element {
  const data = useLoaderData({ from: '/' });

  return (
    <>
      <h1>Planets</h1>
      <div className={classes.grid}>{JSON.stringify(data)}</div>
    </>
  );
}
