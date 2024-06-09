vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');

  return {
    ...actual,
    useLoaderData: () => ({
      message: 'ok',
      total_records: 39,
      total_pages: 4,
      previous: null,
      next: 'https://www.swapi.tech/api/vehicles?page=2&limit=12',
      results: [
        {
          uid: '4',
          name: 'Sand Crawler',
          url: 'https://www.swapi.tech/api/vehicles/4',
        },
        {
          uid: '7',
          name: 'X-34 landspeeder',
          url: 'https://www.swapi.tech/api/vehicles/7',
        },
        {
          uid: '6',
          name: 'T-16 skyhopper',
          url: 'https://www.swapi.tech/api/vehicles/6',
        },
        {
          uid: '8',
          name: 'TIE/LN starfighter',
          url: 'https://www.swapi.tech/api/vehicles/8',
        },
        {
          uid: '14',
          name: 'Snowspeeder',
          url: 'https://www.swapi.tech/api/vehicles/14',
        },
        {
          uid: '18',
          name: 'AT-AT',
          url: 'https://www.swapi.tech/api/vehicles/18',
        },
        {
          uid: '16',
          name: 'TIE bomber',
          url: 'https://www.swapi.tech/api/vehicles/16',
        },
        {
          uid: '19',
          name: 'AT-ST',
          url: 'https://www.swapi.tech/api/vehicles/19',
        },
        {
          uid: '20',
          name: 'Storm IV Twin-Pod cloud car',
          url: 'https://www.swapi.tech/api/vehicles/20',
        },
        {
          uid: '24',
          name: 'Sail barge',
          url: 'https://www.swapi.tech/api/vehicles/24',
        },
        {
          uid: '25',
          name: 'Bantha-II cargo skiff',
          url: 'https://www.swapi.tech/api/vehicles/25',
        },
        {
          uid: '30',
          name: 'Imperial Speeder Bike',
          url: 'https://www.swapi.tech/api/vehicles/30',
        },
      ],
    }),
  };
});
