import React, { useState } from "react";
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from "react-icons/md";
import { clamp, range } from "../../utils";
import { Navigation, Controls, Button as DefaultButton } from "./elements";

type NavButton = React.FC<{
  disabled?: boolean;
  onClick: () => void;
}>;

interface PaginationProps {
  onChange?: (currentPage: number) => void;
  neighbors?: number;
  pages?: number;
  initial?: number;
  loop?: boolean;
  numbers?: boolean;
  noNextPrev?: boolean;
  noFirstLast?: boolean;
  Button?: React.ReactType;
  First?: NavButton;
  Previous?: NavButton;
  Next?: NavButton;
  Last?: NavButton;
  children?: (props: {
    page: number;
    pageNumbers: () => number[];
    toPage: (page: number) => void;
    toFirst: () => void;
    toPrevious: () => void;
    toNext: () => void;
    toLast: () => void;
  }) => React.ReactNode;
}

export const Pagination = ({
  onChange = () => {},
  neighbors = 2,
  pages = 1,
  initial = 1,
  loop = false,
  numbers = false,
  noNextPrev = false,
  noFirstLast = false,
  Button = DefaultButton,
  First = props => (
    <li>
      <Button {...props} aria-label="First">
        <MdFirstPage />
      </Button>
    </li>
  ),
  Previous = props => (
    <li>
      <Button {...props} aria-label="Previous">
        <MdChevronLeft />
      </Button>
    </li>
  ),
  Next = props => (
    <li>
      <Button {...props} aria-label="Next">
        <MdChevronRight />
      </Button>
    </li>
  ),
  Last = props => (
    <li>
      <Button {...props} aria-label="Last">
        <MdLastPage />
      </Button>
    </li>
  ),
  children,
  ...props
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initial);

  const fetchPageNumbers = () => {
    if (pages <= 0) {
      return [];
    }

    const middle = clamp(currentPage, neighbors + 1, pages - neighbors);
    const start = Math.max(1, middle - neighbors);
    const end = Math.min(pages, middle + neighbors);

    return range(end - start + 1, start);
  };

  const gotoPage = (page: number) => {
    const destination = Math.max(0, Math.min(page, pages));
    const loopDestination = page > pages ? 1 : page < 1 ? pages : destination;
    setCurrentPage(loop ? loopDestination : destination);
    onChange(loop ? loopDestination : destination);
  };

  const handleClick = (page: number) => () => {
    gotoPage(page);
  };

  const handleFirst = () => {
    gotoPage(1);
  };

  const handlePrevious = () => {
    gotoPage(currentPage - 1);
  };

  const handleNext = () => {
    gotoPage(currentPage + 1);
  };

  const handleLast = () => {
    gotoPage(pages);
  };

  return children ? (
    children({
      page: currentPage,
      pageNumbers: fetchPageNumbers,
      toPage: handleClick,
      toFirst: handleFirst,
      toPrevious: handlePrevious,
      toNext: handleNext,
      toLast: handleLast
    })
  ) : (
    <Navigation {...props}>
      <Controls>
        {noFirstLast ? <First disabled={currentPage === 1} onClick={handleFirst} /> : null}
        {noNextPrev ? <Previous disabled={currentPage === 1} onClick={handlePrevious} /> : null}
        {numbers
          ? fetchPageNumbers().map((page: number) => (
              <li key={page}>
                <Button active={currentPage === page} disabled={currentPage === page} onClick={handleClick(page)}>
                  {page}
                </Button>
              </li>
            ))
          : null}
        {noNextPrev ? <Next disabled={currentPage === pages} onClick={handleNext} /> : null}
        {noFirstLast ? <Last disabled={currentPage === pages} onClick={handleLast} /> : null}
      </Controls>
    </Navigation>
  );
};
