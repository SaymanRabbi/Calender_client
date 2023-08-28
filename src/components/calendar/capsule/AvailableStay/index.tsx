// import { Moment } from 'moment';
import { useMyContext } from '@/app.context';
import StayNights from '@/components/popover/StayNights';
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import CalendarPopover from '../../CalendarPopover';
import AvailableStayCapsulHover from './AvailableStayCapsulHover';
import AvailableStayCapsule from './AvailableStayCapsule';
interface IProps {
  date: Moment;
  unavailableDate: (string | boolean)[];
  spaceIndex: number;
  availableStay: any;
  setAvailableStay: any;
}

export default function AvailableStay({
  date,
  unavailableDate,
  spaceIndex,
  availableStay,
  setAvailableStay,
}: any) {
  
  const { buttonState,setButtonState, setPop,bookingarry} = useMyContext();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  useEffect(() => {
    if(availableStay?.space != null ){
      if(!buttonState){
        setAvailableStay((prevState:any) => ({ ...prevState, space: null }));
      }

    }
  }, [buttonState,availableStay.space,setAvailableStay]);


// all booked date getting


const [allDates, setAllDates] = useState([]);

// useEffect(() => {
//   const stays = bookingarry[spaceIndex]?.stays
// const formatDate = (date) => {
//   const day = date.getDate();
//   const month = date.toLocaleString('default', { month: 'long' });
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// };

// const getDatesBetween = (startDate, endDate) => {
//   const dates = [];
//   const currentDate = new Date(startDate);
//   endDate = new Date(endDate);

//   while (currentDate <= endDate) {
//     dates.push(formatDate(currentDate));
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

//   const dates = stays?.reduce((acc, stay) => {
//     if (stay.arriveDate && stay.departDate) {
//       const stayDates = getDatesBetween(stay.arriveDate, stay.departDate);
//       return [...acc, ...stayDates];
//     }
//     return acc;
//   }, []);
//   const uniqueDates = [...new Set(dates)]; // Remove duplicates using Set

//   setAllDates(uniqueDates);

//   // setAllDates(dates);
// }, [bookingarry,spaceIndex ])

// getting dates

const getDates=(spaceI:any)=>{
  const stays = bookingarry[spaceI]?.stays
const formatDate = (date:any) => {
  // const day = date.getDate();
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const getDatesBetween = (startDate:any, endDate:any) => {
  const dates = [];
  const currentDate = new Date(startDate);
  endDate = new Date(endDate);

  while (currentDate <= endDate) {
    dates.push(formatDate(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

  const dates = stays?.reduce((acc:any, stay:any) => {
    if (stay.arriveDate && stay.departDate) {
      const stayDates = getDatesBetween(stay.arriveDate, stay.departDate);
      return [...acc, ...stayDates];
    }
    return acc;
  }, []);
  const uniqueDates = [...new Set(dates)]; // Remove duplicates using Set



 return uniqueDates
}
  const openPop=()=>{
    setPop(true)
  }

  const handleAvailableStay = (directiontoLeft: boolean) => {

    setButtonState(true)
    if (directiontoLeft) {
      const leftDate=date.clone().subtract(1, 'days').format('DD-MMMM-YYYY');
      if(!getDates(spaceIndex).includes(leftDate)) {
      setAvailableStay({
        space: spaceIndex,
        arriveDate: date.clone().subtract(2, 'days'),
        departDate: date.clone(),
      });
      }
      else {
        alert("Date not available");
      }
    } else {
      const rightDate=date.clone().add(0, 'day').format('DD-MMMM-YYYY');
      if(!getDates(spaceIndex).includes(rightDate)) {
        setAvailableStay({
          space: spaceIndex,
          arriveDate: date.clone().subtract(1, 'days'),
          departDate: date.clone().add(1, 'days'),
        });
        }
        else {
          alert("Date not available");
        }
    }
  };
  const increaseCardWidthToLeft = (event: any) => {
    event.stopPropagation();
    const newDepartDate = availableStay.arriveDate
      .clone().subtract(0, 'day')
      .format('DD-MMMM-YYYY');


    if (!unavailableDate.includes(newDepartDate ) && !getDates(spaceIndex).includes(newDepartDate)) {
      setAvailableStay((prev: any) => ({
        ...prev,
        arriveDate: prev.arriveDate.clone().subtract(1, 'day'),
      }));
    }
    else {
      alert("Date not available")
    }

    openPop()
  };

  const decreaseCardWidthToLeft = (event: any) => {
    event.stopPropagation();
    const newDepartDate = date.clone().add(1, 'day')
    if (!unavailableDate.includes(newDepartDate.format('DD-MMMM-YYYY'))) {
      setAvailableStay((prev: any) => ({
        ...prev,
        arriveDate: prev.arriveDate.clone().add(1, 'day'),
      }));
    }
  };

  const increaseCardWidthToRight = (event: any) => {
    event.stopPropagation();
    const newDepartDate = date.clone().add(0, 'day')
    if (!unavailableDate.includes(newDepartDate.format('DD-MMMM-YYYY')) &&
    !getDates(spaceIndex).includes(newDepartDate)) {
      setAvailableStay((prev: any) => ({
        ...prev,
        departDate: prev.departDate.clone().add(1, 'day'),
      }));
    }
    else {
      alert("Date not available")
    }
  };

  const decreaseCardWidthToRight = (event: any) => {
    event.stopPropagation();
    const newArriveDate = date.clone().subtract(1, 'day')
    if (!unavailableDate.includes(newArriveDate).format('DD-MMMM-YYYY')) {
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
        date={date}
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