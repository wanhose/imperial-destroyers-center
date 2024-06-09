import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router';
import { render } from '@testing-library/react';

function createTestRouter(component: () => JSX.Element) {
  const rootRoute = createRootRoute({
    component: Outlet,
  });

  const planetsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component,
  });

  const starshipsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/starships',
    component,
  });

  const vehiclesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/vehicles',
    component,
  });

  const router = createRouter({
    history: createMemoryHistory(),
    routeTree: rootRoute.addChildren([planetsRoute, starshipsRoute, vehiclesRoute]),
  });

  return router;
}

export function renderWithContext(component: () => JSX.Element) {
  const router = createTestRouter(component);

  // @ts-expect-error - Router type is not valid in this context
  return render(<RouterProvider router={router} />);
}
