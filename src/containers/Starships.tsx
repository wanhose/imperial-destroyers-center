import { useLoaderData } from '@tanstack/react-router';
import { Search } from 'components/Search';

import classes from './common.module.scss';

export default function Starships(): JSX.Element {
  const data = useLoaderData({ from: '/starships' });

  return (
    <>
      <h1>Starships</h1>
      <div className={classes.container}>
        <Search placeholder="Search for a starship" />
        <div className={classes.grid}>{JSON.stringify(data)}</div>
      </div>
    </>
  );
}
