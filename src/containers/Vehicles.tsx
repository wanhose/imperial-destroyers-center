import { useLoaderData } from '@tanstack/react-router';
import { Card } from 'components/Card';
import { Search } from 'components/Search';

import classes from './common.module.scss';

export default function Vehicles(): JSX.Element {
  const data = useLoaderData({ from: '/vehicles' });

  return (
    <>
      <h1>Vehicles</h1>
      <div className={classes.container}>
        <Search placeholder="Search for a vehicle" />
        <div className={classes.grid}>
          {data.results.map((item) => (
            <Card imgUrl={`/vehicles/${item.uid}.png`} key={item.uid} title={item.name} />
          ))}
        </div>
      </div>
    </>
  );
}
