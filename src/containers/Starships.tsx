import { useLoaderData } from '@tanstack/react-router';
import { Card } from 'components/Card';
import { Search } from 'components/Search';

import classes from './common.module.scss';

export default function Starships(): JSX.Element {
  const data = useLoaderData({ from: '/starships' });

  return (
    <>
      <h1>Starships</h1>
      <div className={classes.container}>
        <Search placeholder="Search for a starship" />
        <div className={classes.grid}>
          {data.results.map((item) => (
            <Card imgUrl={`/starships/${item.uid}.png`} key={item.uid} title={item.name} />
          ))}
        </div>
      </div>
    </>
  );
}
