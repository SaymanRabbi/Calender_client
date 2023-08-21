// import { Moment } from 'moment';
import React from 'react';
import moment from 'moment';
import StayNights from '@/components/popover/StayNights';
import AvailableStayCapsulHover from './AvailableStayCapsulHover';
import AvailableStayCapsule from './AvailableStayCapsule';
import CalendarPopover from '../../CalendarPopover';

// interface IProps {
//   date: Moment;
//   unavailableDate: (string | boolean)[];
//   spaceIndex: number;
//   availableStay: any;
//   setAvailableStay: any;
// }

export default function AvailableStay({
  date,
  unavailableDate,
  spaceIndex,
  availableStay,
  setAvailableStay,
}: any) {
  const handleAvailableStay = (directiontoLeft: boolean) => {
    if (directiontoLeft) {
      setAvailableStay({
        space: spaceIndex,
        arriveDate: date.clone().subtract(2, 'days'),
        departDate: date.clone(),
      });
    } else {
      setAvailableStay({
        space: spaceIndex,
        arriveDate: date.clone().subtract(1, 'days'),
        departDate: date.clone().add(1, 'days'),
      });
    }
  };

  const increaseCardWidthToLeft = (event: any) => {
    event.stopPropagation();
    const newDepartDate = availableStay.arriveDate
      .clone()
      .format('DD-MMMM-YYYY');

    if (!unavailableDate.includes(newDepartDate)) {
      setAvailableStay((prev: any) => ({
        ...prev,
        arriveDate: prev.arriveDate.clone().subtract(1, 'day'),
      }));
    }
  };

  const decreaseCardWidthToLeft = (event: any) => {
    event.stopPropagation();
    const newDepartDate = date.clone().add(1, 'day');

    if (!unavailableDate.includes(newDepartDate.format('DD-MMMM-YYYY'))) {
      setAvailableStay((prev: any) => ({
        ...prev,
        arriveDate: prev.arriveDate.clone().add(1, 'day'),
      }));
    }
  };

  const increaseCardWidthToRight = (event: any) => {
    event.stopPropagation();
    const newDepartDate = date.clone().add(1, 'day');

    if (!unavailableDate.includes(newDepartDate.format('DD-MMMM-YYYY'))) {
      setAvailableStay((prev: any) => ({
        ...prev,
        departDate: prev.departDate.clone().add(1, 'day'),
      }));
    }
  };

  const decreaseCardWidthToRight = (event: any) => {
    event.stopPropagation();
    const newArriveDate = date.clone().subtract(1, 'day');

    if (!unavailableDate.includes(newArriveDate.format('DD-MMMM-YYYY'))) {
      setAvailableStay((prev: any) => ({
        ...prev,
        departDate: prev.departDate.clone().subtract(1, 'day'),
      }));
    }
  };

  const resetAvailableStay = () => {
    setAvailableStay({
      space: null,
      departDate: '',
    });
  };

  return (
    <CalendarPopover
      ammountOfStayDates={Math.abs(
        moment(availableStay.arriveDate).diff(
          moment(availableStay.departDate),
          'days'
        )
      )}
      component={
        <StayNights
          spaceIndex={spaceIndex}
          arriveDate={moment(availableStay.arriveDate)}
          departDate={moment(availableStay.departDate)}
          ammountOfStayDates={Math.abs(
            moment(availableStay.arriveDate).diff(
              moment(availableStay.departDate),
              'days'
            )
          )}
        />
      }
      resetAvailableStay={resetAvailableStay}
      id={date.format('DD-MMM-YYYY')}
    >
      {availableStay.space === spaceIndex &&
        availableStay.departDate.format('DD-MMM-YYYY') ===
          date.format('DD-MMM-YYYY') && (
          <AvailableStayCapsule
            availableStay={availableStay}
            increaseCardWidthToLeft={increaseCardWidthToLeft}
            increaseCardWidthToRight={increaseCardWidthToRight}
            decreaseCardWidthToLeft={decreaseCardWidthToLeft}
            decreaseCardWidthToRight={decreaseCardWidthToRight}
            date={date}
          />
        )}

      {availableStay.space === null &&
        !unavailableDate.includes(date.format('DD-MMMM-YYYY')) && (
          <AvailableStayCapsulHover
            handleAvailableStay={handleAvailableStay}
            date={date}
          />
        )}
    </CalendarPopover>
  );
}
