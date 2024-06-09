import './Planets.mock';

import { screen, waitFor } from '@testing-library/react';
import { renderWithContext } from 'tests/utils';

import Planets from '../Planets';

describe('Planets', () => {
  it('must contain word', async () => {
    renderWithContext(() => <Planets />);

    await waitFor(() => expect(screen.getByText('Planets')).toBeInTheDocument());
  });
});
