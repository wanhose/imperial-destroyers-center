import { createFileRoute } from '@tanstack/react-router';
import Planets from 'containers/Planets';
import { Helmet } from 'react-helmet-async';
import { SwapiResponse } from 'types/swapi';
import { InferType, number, object } from 'yup';

const searchSchema = object().shape({
  page: number().optional(),
});

type SearchSchema = InferType<typeof searchSchema>;

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Helmet>
        <title>Imperial Destroyers Center - Planets</title>
      </Helmet>
      <Planets />
    </>
  ),
  loader: ({ deps }: { deps: SearchSchema }): Promise<SwapiResponse> =>
    fetch(`https://www.swapi.tech/api/planets/?limit=12&page=${deps.page ?? 1}`)
      .then((res) => res.json())
      .then((data) => data),
  loaderDeps: ({ search: { page } }): SearchSchema => ({ page }),
  validateSearch: (search: Record<string, unknown>): SearchSchema => searchSchema.cast(search),
});
