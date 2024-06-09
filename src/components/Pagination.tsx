import { Link, useLocation, useSearch } from '@tanstack/react-router';

import classes from './Pagination.module.scss';

export function Pagination(props: PaginationProps): JSX.Element {
  const { totalRecords, itemType, totalPages } = props;
  const { page: currentPage = 1 } = useSearch({ strict: false });
  const location = useLocation();

  return (
    <div className={classes.container}>
      <Link
        aria-label="Previous"
        className="paginationButton"
        search={{
          ...location.search,
          ...(currentPage - 1 < 1 ? { page: 1 } : { page: currentPage - 1 }),
        }}>
        🞀
      </Link>
      &nbsp;
      {currentPage * 12 - 11}
      &nbsp;to&nbsp;
      {currentPage * 12}
      &nbsp;of&nbsp;
      {totalRecords}
      &nbsp;
      {itemType}s &nbsp;
      <Link
        aria-label="Next"
        className="paginationButton"
        search={{
          ...location.search,
          ...(currentPage + 1 > totalPages ? { page: totalPages } : { page: currentPage + 1 }),
        }}>
        🞂
      </Link>
    </div>
  );
}

export interface PaginationProps {
  readonly itemType: 'planet' | 'starship' | 'vehicle';
  readonly totalPages: number;
  readonly totalRecords: number;
}
