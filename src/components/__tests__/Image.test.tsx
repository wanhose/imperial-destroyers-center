import { render, fireEvent } from '@testing-library/react';
import Image, { ImageProps } from '../Image';

describe('Image', () => {
  const defaultProps: ImageProps = {
    alt: 'Test image',
    src: 'https://example.com/test-image.jpg',
  };

  it('renders the image with the provided src and alt', () => {
    const { getByAltText } = render(<Image {...defaultProps} />);
    const img = getByAltText(defaultProps.alt as string);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', defaultProps.src);
  });

  it('renders the placeholder image when the image fails to load', () => {
    const { getByAltText } = render(<Image {...defaultProps} />);
    const img = getByAltText(defaultProps.alt as string);

    fireEvent.error(img);
    expect(img).toHaveAttribute(
      'src',
      'https://placehold.co/400x400/554348/D4F5F5/png?text=This+isn%27t+the+dark+side'
    );
  });
});
