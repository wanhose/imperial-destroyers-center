import { useLoaderData } from '@tanstack/react-router';
import { Card } from 'components/Card';
import { Search } from 'components/Search';

import classes from './common.module.scss';

export default function Planets(): JSX.Element {
  const data = useLoaderData({ from: '/' });

  return (
    <>
      <h1>Planets</h1>
      <div className={classes.container}>
        <Search placeholder="Search for a planet" />
        <div className={classes.grid}>
          {data.results.map((item) => (
            <Card imgUrl={`/planets/${item.uid}.png`} key={item.uid} title={item.name} />
          ))}
        </div>
      </div>
    </>
  );
}
