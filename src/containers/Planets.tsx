import { useLoaderData } from '@tanstack/react-router';
import { Card } from 'components/Card';
import { Pagination } from 'components/Pagination';
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
        {data.total_pages && data.total_records ? (
          <Pagination
            itemType="planet"
            totalPages={data.total_pages}
            totalRecords={data.total_records}
          />
        ) : null}
      </div>
    </>
  );
}
