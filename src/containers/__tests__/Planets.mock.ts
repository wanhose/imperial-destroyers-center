vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');

  return {
    ...actual,
    useLoaderData: () => ({
      message: 'ok',
      total_records: 60,
      total_pages: 5,
      previous: null,
      next: 'https://www.swapi.tech/api/planets?page=2&limit=12',
      results: [
        {
          uid: '1',
          name: 'Tatooine',
          url: 'https://www.swapi.tech/api/planets/1',
        },
        {
          uid: '2',
          name: 'Alderaan',
          url: 'https://www.swapi.tech/api/planets/2',
        },
        {
          uid: '3',
          name: 'Yavin IV',
          url: 'https://www.swapi.tech/api/planets/3',
        },
        {
          uid: '4',
          name: 'Hoth',
          url: 'https://www.swapi.tech/api/planets/4',
        },
        {
          uid: '5',
          name: 'Dagobah',
          url: 'https://www.swapi.tech/api/planets/5',
        },
        {
          uid: '6',
          name: 'Bespin',
          url: 'https://www.swapi.tech/api/planets/6',
        },
        {
          uid: '7',
          name: 'Endor',
          url: 'https://www.swapi.tech/api/planets/7',
        },
        {
          uid: '8',
          name: 'Naboo',
          url: 'https://www.swapi.tech/api/planets/8',
        },
        {
          uid: '9',
          name: 'Coruscant',
          url: 'https://www.swapi.tech/api/planets/9',
        },
        {
          uid: '10',
          name: 'Kamino',
          url: 'https://www.swapi.tech/api/planets/10',
        },
        {
          uid: '11',
          name: 'Geonosis',
          url: 'https://www.swapi.tech/api/planets/11',
        },
        {
          uid: '12',
          name: 'Utapau',
          url: 'https://www.swapi.tech/api/planets/12',
        },
      ],
    }),
  };
});
