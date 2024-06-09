vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');

  return {
    ...actual,
    useSearch: () => ({
      // @ts-expect-error - TypeScript doesn't know about the actual type
      ...actual.useSearch,
      search: window.location.hash.replace('#', ''),
    }),
    useRouter: () => ({
      // @ts-expect-error - TypeScript doesn't know about the actual type
      ...actual.useRouter,
      navigate: vi.fn((to) => {
        window.location.hash = to.search.search || '';
      }),
    }),
  };
});
