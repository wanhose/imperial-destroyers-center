import { screen, waitFor } from '@testing-library/react';
import { renderWithContext } from 'tests/utils';
import Layout from '../Layout';

test('renders content, footer, header and sidebar', async () => {
  renderWithContext(() => (
    <Layout>
      <div>Vitest</div>
    </Layout>
  ));

  await waitFor(() => expect(screen.getByText('Imperial Destroyers Center')).toBeInTheDocument());

  expect(screen.getByText('Imperial Destroyers Center')).toBeInTheDocument();
  expect(screen.getByText('Vitest')).toBeInTheDocument();
  expect(
    screen.getByText(
      /Power and Order Prevail|Strength Through Unity|May the Empire Reign|Unyielding Force, Unstoppable Might|For the Glory of the Empire|Dominion and Discipline|Victory is Inevitable/
    )
  ).toBeInTheDocument();
});
