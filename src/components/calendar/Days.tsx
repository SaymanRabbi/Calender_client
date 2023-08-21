import React, { useState, Fragment } from 'react';
import moment from 'moment';
import { VariableSizeGrid as Grid } from 'react-window';

import Day from './Day';
// import Text from '../Typography/Text';
// import { Popover, Transition } from '@headlessui/react';

// import PopoverCard from '../popover';
// import StayOptions from '../popover/StayOptions';
// import DashboardMenu from '../Dialog/menu/DashboardMenu';
// import CancelStay from '../popover/CancelStay';
// import UnavailableNights from '../popover/UnavailableNights';
// import AvailableStayCapsule from './AvailableStay/AvailableStayCapsule';
// import TestPopover from './TestPopover';
// import AvailableStayCapsulHover from './AvailableStay/AvailableStayCapsulHover';
import AvailableStay from './capsule/AvailableStay';
import { Body1, Body2 } from '../Typography';
import Stay from './capsule/Stay';
import UnavailableStay from './capsule/UnavailableStay';

// interface MonthProps {
//   dates: Moment[];

//   spaces: any;

//   containerRef: React.RefObject<any>;
//   onItemsRendered: any;

//   availableStay: any;
//   setAvailableStay: any;
// }

function Days({
  spaces,

  dates,
  containerRef,
  onItemsRendered,

  availableStay,
  setAvailableStay,
}: any) {
  const [today] = useState(moment());

  const renderDay = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }) => {
    const date = dates[columnIndex];

    const isToday = date.isSame(today, 'day');
    const isWeekend = date.day() === 0 || date.day() === 6;

    let dayClass = '';

    if (isToday) {
      dayClass = 'bg-[#E2F8FF] current-date';
    } else if (isWeekend) {
      dayClass = 'bg-gray-100';
    }

    return (
      <div key={rowIndex} style={style}>
        {columnIndex === dates.length - 1 ? (
          <div className="h-full flex flex-col">
            <div className="h-20">{ }</div>
            <div className="w-[280px] flex justify-center items-center h-full  cursor-pointer border-y border-l border-gray-200">
              <Body2 className="text-gray-400">
                End of calendar availability.
              </Body2>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-end justify-center h-8">
              {date.date() === 1 ? (
                <Body1>{date.format('MMMM')}</Body1>
              ) : (
                <span className="h-8" />
              )}
            </div>
            <div className="flex">
              <Day date={date} />
            </div>
            <div>
              {spaces.map((space: any, index: number) => {
                let isBetweenDates = false;
                const unavailableDate: string[] = [];

                return (
                  <div
                    key={`space-${index + 1}`}
                    className={`${dayClass} w-20 h-20 cursor-pointer border-y border-l border-gray-200`}
                  >
                    <div className="relative w-20 h-20 group -left-1/2">
                      {space?.stays?.map((stay: any, stayIndex: number) => {
                        const arriveDate = moment(
                          new Date(stay.arriveDate),
                          'DD-MMMM-YYYY'
                        );
                        const departDate = moment(
                          stay.departDate,
                          'DD-MMMM-YYYY'
                        );
                        isBetweenDates = date.isBetween(
                          arriveDate,
                          departDate,
                          undefined,
                          '(]'
                        );
                        if (isBetweenDates) {
                          unavailableDate.push(date.format('DD-MMMM-YYYY'));
                          date.format('DD-MMMM-YYYY');
                        }

                        if (
                          stay.type === 'mystay' &&
                          (date.format('DD-MMMM-YYYY') === stay.departDate ||
                            date.format('D-MMMM-YYYY') === stay.departDate)
                        ) {
                          return (
                            <Stay
                              spaceIndex={index}
                              key={`stay-${stayIndex + 1}`}
                              stay={stay}
                            />
                          );
                        }
                        if (
                          stay.type === 'unavailable' &&
                          (date.format('DD-MMMM-YYYY') === stay.departDate ||
                            date.format('D-MMMM-YYYY') === stay.departDate)
                        ) {
                          return (
                            <UnavailableStay
                              key={`stay-${stayIndex + 1}`}
                              stay={stay}
                              date={date}
                            />
                          );
                        }
                        return null;
                      })}

                      <AvailableStay
                        date={date}
                        unavailableDate={unavailableDate}
                        spaceIndex={index}
                        availableStay={availableStay}
                        setAvailableStay={setAvailableStay}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Grid
        height={(spaces.length - 1) * 82 + 159}
        style={{ overflowY: 'hidden' }}
        width={1120}
        ref={containerRef}
        columnCount={dates.length}
        columnWidth={() => 80}
        rowCount={1}
        onItemsRendered={onItemsRendered}
        rowHeight={(_) => (spaces.length - 1) * 82 + 159}
      >
        {renderDay}
      </Grid>{' '}
    </>
  );
}

export default Days;
