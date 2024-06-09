import { render, screen } from '@testing-library/react';

import Planets from '../Planets';

beforeEach(() => {
  render(<Planets />);
});

describe('Planets', () => {
  it('must contain word', () => {
    expect(screen.getByText('Planets')).toBeInTheDocument();
  });
});
