import { createFileRoute } from '@tanstack/react-router';
import Starships from 'containers/Starships';
import { Helmet } from 'react-helmet-async';
import type { SwapiNormalizedResponse } from 'types/swapi';
import { normalizeSwapiResponse } from 'utils/normalizeSwapiResponse';
import { type InferType, number, object, string } from 'yup';

const searchSchema = object().shape({
  page: number().optional(),
  search: string().optional(),
});

type SearchSchema = InferType<typeof searchSchema>;

export const Route = createFileRoute('/starships')({
  component: () => (
    <>
      <Helmet>
        <title>Imperial Destroyers Center - Starships</title>
      </Helmet>
      <Starships />
    </>
  ),
  loader: ({ deps }: { deps: SearchSchema }): Promise<SwapiNormalizedResponse> =>
    fetch(
      `https://www.swapi.tech/api/starships/?limit=12${deps.search ? `&name=${deps.search}` : ''}&page=${deps.page ?? 1}`
    )
      .then((res) => res.json())
      .then((data) => normalizeSwapiResponse(data)),
  loaderDeps: ({ search: { page, search } }): SearchSchema => ({ page, search }),
  validateSearch: (search: Record<string, unknown>): SearchSchema => searchSchema.cast(search),
});
