import { render, screen } from '@testing-library/react';

import Starships from '../Starships';

beforeEach(() => {
  render(<Starships />);
});

describe('Starships', () => {
  it('must contain word', () => {
    expect(screen.getByText('Starships')).toBeInTheDocument();
  });
});
