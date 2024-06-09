import { type ImgHTMLAttributes, useCallback, useState } from 'react';

import classes from './Image.module.scss';

export default function Image(props: ImageProps): JSX.Element {
  const { alt = '', className = '', ...rest } = props;
  const [src, setSrc] = useState<string | undefined>(() => rest.src);

  const handleError = useCallback(() => {
    setSrc('https://placehold.co/400x400/554348/D4F5F5/png?text=This+isn%27t+the+dark+side');
  }, []);

  return (
    <div className={classes.container}>
      <img
        {...rest}
        alt={alt}
        className={`${classes.image} ${className}`}
        onError={handleError}
        src={src}
      />
    </div>
  );
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  readonly alt?: string;
  readonly src: string;
}
