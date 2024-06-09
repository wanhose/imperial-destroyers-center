import { useLoaderData } from '@tanstack/react-router';
import { Search } from 'components/Search';

import classes from './common.module.scss';

export default function Planets(): JSX.Element {
  const data = useLoaderData({ from: '/' });

  return (
    <>
      <h1>Planets</h1>
      <div className={classes.container}>
        <Search placeholder="Search for a planet" />
        <div className={classes.grid}>{JSON.stringify(data)}</div>
      </div>
    </>
  );
}
