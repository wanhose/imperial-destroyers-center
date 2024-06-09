import { createLazyFileRoute } from '@tanstack/react-router';
import Vehicles from 'containers/Vehicles';
import { Helmet } from 'react-helmet-async';

export const Route = createLazyFileRoute('/vehicles')({
  component: () => (
    <>
      <Helmet>
        <title>Imperial Destroyers Center - Vehicles</title>
      </Helmet>
      <Vehicles />
    </>
  ),
});
