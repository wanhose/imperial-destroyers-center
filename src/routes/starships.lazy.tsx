import { createLazyFileRoute } from '@tanstack/react-router';
import Starships from 'containers/Starships';
import { Helmet } from 'react-helmet-async';

export const Route = createLazyFileRoute('/starships')({
  component: () => (
    <>
      <Helmet>
        <title>Imperial Destroyers Center - Starships</title>
      </Helmet>
      <Starships />
    </>
  ),
});
