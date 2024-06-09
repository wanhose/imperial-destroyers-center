vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');

  return {
    ...actual,
    useLoaderData: () => ({
      message: 'ok',
      total_records: 36,
      total_pages: 3,
      previous: null,
      next: 'https://www.swapi.tech/api/starships?page=2&limit=12',
      results: [
        {
          uid: '2',
          name: 'CR90 corvette',
          url: 'https://www.swapi.tech/api/starships/2',
        },
        {
          uid: '3',
          name: 'Star Destroyer',
          url: 'https://www.swapi.tech/api/starships/3',
        },
        {
          uid: '5',
          name: 'Sentinel-class landing craft',
          url: 'https://www.swapi.tech/api/starships/5',
        },
        {
          uid: '9',
          name: 'Death Star',
          url: 'https://www.swapi.tech/api/starships/9',
        },
        {
          uid: '11',
          name: 'Y-wing',
          url: 'https://www.swapi.tech/api/starships/11',
        },
        {
          uid: '10',
          name: 'Millennium Falcon',
          url: 'https://www.swapi.tech/api/starships/10',
        },
        {
          uid: '13',
          name: 'TIE Advanced x1',
          url: 'https://www.swapi.tech/api/starships/13',
        },
        {
          uid: '15',
          name: 'Executor',
          url: 'https://www.swapi.tech/api/starships/15',
        },
        {
          uid: '12',
          name: 'X-wing',
          url: 'https://www.swapi.tech/api/starships/12',
        },
        {
          uid: '17',
          name: 'Rebel transport',
          url: 'https://www.swapi.tech/api/starships/17',
        },
        {
          uid: '21',
          name: 'Slave 1',
          url: 'https://www.swapi.tech/api/starships/21',
        },
        {
          uid: '22',
          name: 'Imperial shuttle',
          url: 'https://www.swapi.tech/api/starships/22',
        },
      ],
    }),
  };
});
