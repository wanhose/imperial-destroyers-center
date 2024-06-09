import { createLazyFileRoute } from '@tanstack/react-router';
import Planets from 'containers/Planets';
import { Helmet } from 'react-helmet-async';

export const Route = createLazyFileRoute('/')({
  component: () => (
    <>
      <Helmet>
        <title>Imperial Destroyers Center - Planets</title>
      </Helmet>
      <Planets />
    </>
  ),
});
