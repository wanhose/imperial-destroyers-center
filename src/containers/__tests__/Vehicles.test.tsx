import './Vehicles.mock';

import { screen, waitFor } from '@testing-library/react';
import { renderWithContext } from 'tests/utils';

import Vehicles from '../Vehicles';

describe('Vehicles', () => {
  it('must contain word', async () => {
    renderWithContext(() => <Vehicles />);

    await waitFor(() => expect(screen.getByText('Vehicles')).toBeInTheDocument());
  });
});
