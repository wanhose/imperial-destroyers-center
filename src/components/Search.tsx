import { useRouter, useSearch } from '@tanstack/react-router';
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

import classes from './Search.module.scss';

export function Search(props: SearchProps): JSX.Element {
  const { className = '', ...rest } = props;
  const { search, ...restSearch } = useSearch({ strict: false });
  const [value, setValue] = useState<string | undefined>(() => search);
  const router = useRouter();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value || undefined;

    setValue(value);
  }, []);

  useEffect(() => {
    router.navigate({
      search: {
        ...restSearch,
        search: value,
      },
    });
  }, [value]);

  return (
    <input
      {...rest}
      className={`${classes.input} ${className}`}
      onChange={handleChange}
      value={value || ''}
    />
  );
}

export type SearchProps = InputHTMLAttributes<HTMLInputElement>;
