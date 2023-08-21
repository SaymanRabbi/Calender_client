import React from 'react';

import { DownArrow } from '@/icons';
import { ButtonSmall } from '@/components/Typography';
import styles from '@/styles/features/blogs/PaginationBar.module.scss';
import { IconButton } from '@/components/Buttons';

interface Props {
  currentPage?: number;
  totalPages: number;
  handleChangePage: (_pageNumber: number) => void;
}

export default function PaginationBar({
  totalPages,
  currentPage = 1,
  handleChangePage,
}: Props) {
  return (
    <nav className={styles.section}>
      <IconButton
        disabled={currentPage === 1}
        onClick={() =>
          currentPage >= totalPages && handleChangePage(currentPage - 1)
        }
        icon={
          <DownArrow
            className={`rotate-90  ${
              currentPage <= 1 ? 'fill-gray-200' : 'fill-gray-300'
            }`}
          />
        }
      />
      {Array(totalPages)
        .fill(1)
        .map((_, idx) => (
          <IconButton
            key={`button-${idx + 1}`}
            className={
              currentPage === idx + 1 ? 'bg-gray-200' : 'hover:bg-gray-100'
            }
            icon={<ButtonSmall>{idx + 1}</ButtonSmall>}
            onClick={() => handleChangePage(idx + 1)}
          />
        ))}
      <IconButton
        disabled={currentPage >= totalPages}
        onClick={() =>
          currentPage < totalPages && handleChangePage(currentPage + 1)
        }
        icon={
          <DownArrow
            className={`-rotate-90
              ${currentPage < totalPages ? 'fill-gray-400' : 'fill-gray-200'}`}
          />
        }
      />
    </nav>
  );
}

PaginationBar.defaultProps = {
  currentPage: 1,
};
