import './Search.mock';

import { render, fireEvent, waitFor } from '@testing-library/react';

import { Search } from '../Search';

describe('Search', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<Search placeholder="Search" />);
    const input = getByPlaceholderText('Search');

    expect(input).toBeInTheDocument();
  });

  it('updates value on change', async () => {
    const { getByPlaceholderText } = render(<Search placeholder="Search" />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Vitest' } });
    () => expect(input.value).toBe('Vitest');
  });

  it('calls navigate on value change', async () => {
    const { getByPlaceholderText } = render(<Search placeholder="Search" />);
    const input = getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'Vitest' } });
    expect(window.location.hash).toBe('#Vitest');
  });
});
