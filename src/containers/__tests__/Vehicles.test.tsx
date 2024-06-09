import { render, screen } from '@testing-library/react';

import Vehicles from '../Vehicles';

beforeEach(() => {
  render(<Vehicles />);
});

describe('Vehicles', () => {
  it('must contain word', () => {
    expect(screen.getByText('Vehicles')).toBeInTheDocument();
  });
});
