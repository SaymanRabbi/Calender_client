// import { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useMyContext } from '@/app.context';
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
  const { buttonState,setButtonState,pop, setPop } = useMyContext();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);



  useEffect(() => {

    if(availableStay?.space != null ){
      if(!buttonState){
        setAvailableStay(prevState => ({ ...prevState, space: null }));
      }

    }
  }, [buttonState,availableStay.space,setAvailableStay]);


  const handleAvailableStay = (directiontoLeft: boolean) => {
    setButtonState(true)
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
  const openPop=()=>{
    setPop(true)
  }


  const increaseCardWidthToLeft = (event: any) => {
    console.log("left",isPopoverOpen);
    setIsPopoverOpen(true)
    event.stopPropagation();
    console.log("left 2",isPopoverOpen);
    setIsPopoverOpen(true)
    const newDepartDate = availableStay.arriveDate
      .clone()
      .format('DD-MMMM-YYYY');
      console.log("left 3",isPopoverOpen);

    if (!unavailableDate.includes(newDepartDate)) {
      setAvailableStay((prev: any) => ({
        ...prev,
        arriveDate: prev.arriveDate.clone().subtract(1, 'day'),
      }));
    }
    console.log("left 4",isPopoverOpen);
    openPop()
  };

  const decreaseCardWidthToLeft = (event: any) => {
    console.log("left d",isPopoverOpen);
    setIsPopoverOpen(true)
    event.stopPropagation();
    setIsPopoverOpen(true)
    const newDepartDate = date.clone().add(1, 'day');

    if (!unavailableDate.includes(newDepartDate.format('DD-MMMM-YYYY'))) {
      setAvailableStay((prev: any) => ({
        ...prev,
        arriveDate: prev.arriveDate.clone().add(1, 'day'),
      }));
    }
  };

  const increaseCardWidthToRight = (event: any) => {
    console.log("right",isPopoverOpen);
    setIsPopoverOpen(true)
    event.stopPropagation();
    setIsPopoverOpen(true)
    const newDepartDate = date.clone().add(1, 'day');

    if (!unavailableDate.includes(newDepartDate.format('DD-MMMM-YYYY'))) {
      setAvailableStay((prev: any) => ({
        ...prev,
        departDate: prev.departDate.clone().add(1, 'day'),
      }));
    }
  };

  const decreaseCardWidthToRight = (event: any) => {
    console.log("right d",isPopoverOpen);
    setIsPopoverOpen(true)
    event.stopPropagation();
    setIsPopoverOpen(true)
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
      isPopoverOpen={isPopoverOpen}
      setIsPopoverOpen={setIsPopoverOpen}
      
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
