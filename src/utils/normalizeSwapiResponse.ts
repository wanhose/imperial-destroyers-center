import { SwapiNormalizedResponse, SwapiResponse } from 'types/swapi';

export function normalizeSwapiResponse(response: SwapiResponse): SwapiNormalizedResponse {
  if ('result' in response) {
    return {
      message: response.message,
      results:
        response.result?.map((item) => ({
          name: item.properties.name,
          uid: item.uid,
          url: item.properties.url,
        })) ?? [],
    };
  }

  return {
    ...response,
    results: response.results ?? [],
  };
}
