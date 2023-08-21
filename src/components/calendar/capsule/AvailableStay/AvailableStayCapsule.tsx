import React from 'react';

import { Go, GoLeft } from '@/icons';

export default function AvailableStayCapsule({
  availableStay,
  date,
  increaseCardWidthToLeft,
  increaseCardWidthToRight,
  decreaseCardWidthToLeft,
  decreaseCardWidthToRight,
}: any) {
  const ammountOfStayDates = Math.abs(
    availableStay.arriveDate.diff(availableStay.departDate, 'days')
  );
  const stayWidth = ammountOfStayDates > 1 ? ammountOfStayDates * 80 - 20 : 70;

  return (
    <div className="absolute right-[10px] top-1/2 -translate-y-1/2 ">
      <div
        style={{
          width: `${stayWidth}px`,
        }}
        id={`available-capsule-${date.format('DD-MMMM-YYYY')}`}
        className={` flex bg-green group-hover:stay-shadow rounded-[20px] h-10 items-center justify-between gap-1.5 px-1 `}
      >
        <div className="flex">
          <button onClick={increaseCardWidthToLeft}>
            <GoLeft className="fill-white" />
          </button>
          {ammountOfStayDates > 1 && (
            <button onClick={decreaseCardWidthToLeft}>
              <Go className="fill-white" />
            </button>
          )}
        </div>

        <div className="flex">
          {ammountOfStayDates > 1 && (
            <button onClick={decreaseCardWidthToRight}>
              <GoLeft className="fill-white" />
            </button>
          )}
          <button onClick={increaseCardWidthToRight}>
            <Go className="fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
