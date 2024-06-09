import { createFileRoute } from '@tanstack/react-router';
import Vehicles from 'containers/Vehicles';
import { Helmet } from 'react-helmet-async';
import { SwapiResponse } from 'types/swapi';
import { InferType, number, object, string } from 'yup';

const searchSchema = object().shape({
  page: number().optional(),
  search: string().optional(),
});

type SearchSchema = InferType<typeof searchSchema>;

export const Route = createFileRoute('/vehicles')({
  component: () => (
    <>
      <Helmet>
        <title>Imperial Destroyers Center - Vehicles</title>
      </Helmet>
      <Vehicles />
    </>
  ),
  loader: ({ deps }: { deps: SearchSchema }): Promise<SwapiResponse> =>
    fetch(
      `https://www.swapi.tech/api/vehicles/?limit=12${deps.search ? `&name=${deps.search}` : ''}&page=${deps.page ?? 1}`
    )
      .then((res) => res.json())
      .then((data) => data),
  loaderDeps: ({ search: { page, search } }): SearchSchema => ({ page, search }),
  validateSearch: (search: Record<string, unknown>): SearchSchema => searchSchema.cast(search),
});
