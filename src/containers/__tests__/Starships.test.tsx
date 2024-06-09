import './Starships.mock';

import { screen, waitFor } from '@testing-library/react';
import { renderWithContext } from 'tests/utils';

import Starships from '../Starships';

describe('Starships', () => {
  it('must contain word', async () => {
    renderWithContext(() => <Starships />);

    await waitFor(() => expect(screen.getByText('Starships')).toBeInTheDocument());
  });
});
