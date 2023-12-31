import React from 'react';

import { PopoverCardProps } from '@/types';
import { Cancel } from '@/icons';

// import CrossIconLight from '../Icon/CrossIconLight';

export default function PopoverCard({
  children,
  setIsPopoverOpen,
}: PopoverCardProps) {
  return (
    <div
      className="w-[317px] overflow-y-visible z-40 absolute flex flex-col rounded-2xl bg-white  "
      style={{
        boxShadow:
          '0px 18px 35px -4px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, 0.24)',
      }}
    >
      <button
        type="button"
        onClick={() => setIsPopoverOpen(false)}
        className="inline-flex items-center m-2 justify-center flex-shrink-0 w-8 h-8 hover:bg-gray-100 bg-white rounded-3xl p-1 "
      >
        {/* <CrossIconLight /> */}
        <Cancel />
      </button>
      <div className="flex flex-col items-center gap-3 p-6 pt-0">
        {children}
      </div>
    </div>
  );
}

PopoverCard.defaultProps = {
  setIsPopoverOpen: null,
};
