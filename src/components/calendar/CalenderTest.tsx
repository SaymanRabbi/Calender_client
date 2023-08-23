import moment, { Moment } from 'moment';
import React,  { useEffect, useRef, useState } from 'react';
// import { usePopper } from 'react-popper';
import { CalendarLayer } from '@/icons';
import Days from './Days';
import MonthIndicator from './MonthIndicator';

import { useMyContext } from '@/app.context';
import { TodayButton } from '../Buttons';
import { Body1, Body2, Heading3 } from '../Typography';


// import PopoverCard from '../popover';
// import StayOptions from '../popover/StayOptions';
// import CancelStay from '../popover/CancelStay';

// import UnavailableNights from '../popover/UnavailableNights';
// import TestPopover from './TestPopover';

// const solutions = [
//   {
//     name: 'Insights',
//     description: 'Measure actions your users take',
//     href: '##',
//   },
//   {
//     name: 'Automations',
//     description: 'Create your own targeted content',
//     href: '##',
//   },
//   {
//     name: 'Reports',
//     description: 'Keep track of your growth',
//     href: '##',
//   },
// ];

const stays1 = {
  property: 'Bedroom 1',
  guestLimit: '4',
  type: 'sleeping space',
  stays: [
    {
      user: {
        name: ';Cookie Monster l',
      },
      type: 'mystay',
      arriveDate: '16-August-2023',
      departDate: '18-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
        avater: '/assets/cookie-monster.webp',
      },
      type: 'mystay',
      comment:
        'Hey everyone, I’m bringing snacks and drinks! Could everyone pick a day and plan a for dinner for everyone that evening? ',
      arriveDate: '18-August-2023',
      departDate: '19-August-2023',
    },
    {
      user: {
        name: 'Ducky',
        avater: '/assets/duckey.jpg',
      },
      type: 'mystay',
      arriveDate: '19-August-2023',
      departDate: '20-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'mystay',
      arriveDate: '21-August-2023',
      departDate: '24-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'unavailable',
      arriveDate: '25-August-2023',
      departDate: '26-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'unavailable',
      arriveDate: '26-August-2023',
      departDate: '27-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'unavailable',
      arriveDate: '27-August-2023',
      departDate: '28-August-2023',
    },
    {
      user: {
        name: 'Shamim',
        avater: '/assets/dogu.jpg',
      },
      type: 'mystay',
      comment:
        'Hey everyone, I’m bringing snacks and drinks! Could everyone pick a day and plan a for dinner for everyone that evening? ',

      arriveDate: '29-August-2023',
      departDate: '01-September-2023',
    },
    {
      user: {
        name: 'TEST',
        avater: '/assets/test_stay.jpg',
      },
      type: 'mystay',
      comment:
        'Hey everyone, I’m bringing snacks and drinks! Could everyone pick a day and plan a for dinner for everyone that evening? ',

      arriveDate: '06-August-2023',
      departDate: '08-August-2023',
    },
  ], 
};
const stays2 = {
  property: 'Bedroom 1',
  guestLimit: '4',
  type: 'sleeping space',
  stays: [
    {
      user: {
        name: ';Cookie Monster l',
      },
      type: 'mystay',
      arriveDate: '16-August-2023',
      departDate: '18-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
        avater: '/assets/cookie-monster.webp',
      },
      type: 'mystay',
      comment:
        'Hey everyone, I’m bringing snacks and drinks! Could everyone pick a day and plan a for dinner for everyone that evening? ',
      arriveDate: '18-August-2023',
      departDate: '19-August-2023',
    },
    {
      user: {
        name: 'Ducky',
        avater: '/assets/duckey.jpg',
      },
      type: 'mystay',
      arriveDate: '19-August-2023',
      departDate: '20-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'mystay',
      arriveDate: '21-August-2023',
      departDate: '24-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'unavailable',
      arriveDate: '25-August-2023',
      departDate: '26-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'unavailable',
      arriveDate: '26-August-2023',
      departDate: '27-August-2023',
    },
    {
      user: {
        name: 'Cookie Monster',
      },
      type: 'unavailable',
      arriveDate: '27-August-2023',
      departDate: '28-August-2023',
    },
    {
      user: {
        name: 'Shamim',
        avater: '/assets/dogu.jpg',
      },
      type: 'mystay',
      comment:
        'Hey everyone, I’m bringing snacks and drinks! Could everyone pick a day and plan a for dinner for everyone that evening? ',

      arriveDate: '29-August-2023',
      departDate: '01-September-2023',
    },
    {
      user: {
        name: 'TEST',
        avater: '/assets/test_stay.jpg',
      },
      type: 'mystay',
      comment:
        'Hey everyone, I’m bringing snacks and drinks! Could everyone pick a day and plan a for dinner for everyone that evening? ',

      arriveDate: '06-August-2023',
      departDate: '08-August-2023',
    },
  ],
};




// const spacesY = [stays1, stays2];

function CalenderTest() {

  const { bookingarry, setbookingarry } = useMyContext()
  const [spaces, setSpaces] = useState([]);

    useEffect(() => {
      const allArr=[stays1, stays2, stays2]
      setbookingarry(allArr)
  }, [stays1, stays2]);

    useEffect(() => {
      setSpaces(bookingarry)
  }, [bookingarry]);


  // const spacesX = [stays1, stays2, stays2];

  //   const [isUpdate, setIsUpdate] = useState<Boolean>(true);

  const containerRef = useRef<any>(null);

  // useEffect(() => {
  //   setSpaces(spacesX);
  // }, [spacesX]);


  // const {file}=useContext(CalenderProvider)
  // console.log("file", file );

  const [dates, setDates] = useState<Moment[]>([]);

  const [inViewDateIndex, setInViewDateIndex] = useState(0);
  const { getMonth, setGetMonth,availableStay,setAvailableStay} = useMyContext();

  const [currentMonth, setCurrentMonth] = useState<Moment>(moment());
  // setGetMonth(currentMonth.format('MMMM'))
  const [scrollIndex, setScrollIndex] = useState<any>(null);

  // const [availableStay, setAvailableStay] = useState<any>({
  //   space: null,
  //   departDate: '',
  //   arriveDate: '',
  // });

  useEffect(() => {
    const daysArray: Moment[] = [];
    [...Array(5)].forEach((_, index) => {
      const monthDate = moment()
        .subtract(3, 'month')
        .startOf('month')
        .add(index, 'month');

      const lastDayOfMonth = moment(monthDate).endOf('month');
      const daysInMonth = lastDayOfMonth.date();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = moment(monthDate).date(day);
        daysArray.push(date);
      }
    });
    setDates(daysArray);
  }, []);



  const setDateToToday = () => {
    const month = moment();
    const todayIndex = dates.findIndex(
      (date) => date.format('DD-MMMM-YYYY') === month.format('DD-MMMM-YYYY')
    );
    if (todayIndex !== -1) {
      // Determine the target scroll index based on the current inViewDateIndex
      const targetScrollIndex =
        inViewDateIndex > todayIndex ? todayIndex - 3 : todayIndex + 10;

      if (containerRef.current) {
        containerRef.current.scrollToItem({
          columnIndex: targetScrollIndex,
        });
      }
    }
  };

  useEffect(() => {
    setDateToToday();
  }, [dates]);

  useEffect(() => {
    if (dates) setCurrentMonth(dates[inViewDateIndex]);
  }, [inViewDateIndex, dates]);

  // this is for scrolling to a specific date index
  useEffect(() => {
    containerRef?.current?.scrollToItem({
      columnIndex: scrollIndex,
    });
  }, [scrollIndex]);

  // this function for handling previous month button click
  const previousMonth = () => {
    const firstDayOfPrevMonth = currentMonth.subtract(1, 'month').date(1);
    const targetIndex = dates.findIndex(
      (date) =>
        date.format('DD-MMMM-YYYY') ===
        firstDayOfPrevMonth.format('DD-MMMM-YYYY')
    );

    if (targetIndex !== -1) {
      // console.log("it is ok");
      setScrollIndex(targetIndex + 1  - 1);
    }
    else {
      // console.log("error getting");
    }
  };

  // this function for handling next month button click
  const nextMonth = () => {
    const firstDayOfPrevMonth = currentMonth.clone().add(1, 'month').date(1);
    const targetIndex = dates.findIndex(
      (date) =>
        date.format('DD-MMMM-YYYY') ===
        firstDayOfPrevMonth.format('DD-MMMM-YYYY')
    );

    if (targetIndex !== -1) {
      setScrollIndex(targetIndex + 13);
    }
  };

  // this function for handling today button click

  const onItemsRendered = ({ visibleColumnStartIndex }: any) => {
    setInViewDateIndex(visibleColumnStartIndex);
  };



  return (
    <>

      <div className="flex flex-col items-center justify-center w-full mx-auto my-6 bg-white card-shadow rounded-2xl">
        <div className="flex items-center justify-between w-full gap-3 p-5 max-md:flex-col-reverse">
          <MonthIndicator
            currentMonth={currentMonth}
            onPreviousMonth={previousMonth}
            onNextMonth={nextMonth}
          />
          <div className="flex items-center justify-center gap-3">
            <TodayButton
              text="Today"
              onClick={() => {
                setDateToToday();
              }}
            />

            <button className="flex items-center justify-center w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0008 2C10.6876 2 9.38726 2.25866 8.17401 2.7612C6.96075 3.26375 5.85836 4.00035 4.92977 4.92893C3.05441 6.8043 2.00084 9.34784 2.00084 12C1.9921 14.3091 2.79164 16.5485 4.26084 18.33L2.26084 20.33C2.12208 20.4706 2.02809 20.6492 1.99071 20.8432C1.95334 21.0372 1.97426 21.2379 2.05084 21.42C2.1339 21.5999 2.26855 21.7511 2.43769 21.8544C2.60683 21.9577 2.80284 22.0083 3.00084 22H12.0008C14.653 22 17.1965 20.9464 19.0719 19.0711C20.9473 17.1957 22.0008 14.6522 22.0008 12C22.0008 9.34784 20.9473 6.8043 19.0719 4.92893C17.1965 3.05357 14.653 2 12.0008 2ZM12.0008 20H5.41084L6.34084 19.07C6.52709 18.8826 6.63164 18.6292 6.63164 18.365C6.63164 18.1008 6.52709 17.8474 6.34084 17.66C5.03143 16.352 4.21602 14.6305 4.03353 12.7888C3.85105 10.947 4.31279 9.09901 5.34007 7.55952C6.36735 6.02004 7.89663 4.88436 9.66736 4.34597C11.4381 3.80759 13.3407 3.8998 15.0511 4.60691C16.7614 5.31402 18.1737 6.59227 19.0473 8.22389C19.9209 9.85551 20.2017 11.7395 19.842 13.555C19.4822 15.3705 18.5042 17.005 17.0744 18.1802C15.6446 19.3554 13.8516 19.9985 12.0008 20Z"
                  fill="url(#paint0_linear_2713_2408)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2713_2408"
                    x1="1.97266"
                    y1="2"
                    x2="23.492"
                    y2="3.75908"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C345FF" />
                    <stop offset="0.410575" stopColor="#6666FF" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-grow flex-shrink-0 flex-nowrap scroll-smooth">
            <div className="relative flex w-full border-blue-200 ">
            <div className=' absolute  top-[5px] left-[200px] z-[999999] font-semibold'> {currentMonth?.format('MMMM')}</div>
              <div className="w-[180px] max-md:mt-16 max-md:absolute left-0 max-md:z-10">
                <div>
                  <div className=" md:flex hidden bg-transparent md:bg-white flex-col justify-center flex-shrink-0 w-[180px] items-start h-16 px-3 " />
                </div>
                {spaces.map((space, index) => (
                  <div key={`space-${index + 1}`} className="max-md:relative">
                    <div className="flex flex-col justify-center  w-[180px] items-start h-20 px-3 md:bg-white md:border border-l-0 md:border-Gray-light">
                      <div className="w-[180px] md:hidden overflow-hidden absolute top-0 left-0">
                        <CalendarLayer />
                      </div>
                      <Body1 className="max-md:absolute max-md:text-xs max-md:top-[1px] max-md:left-3 max-md:text-black text-gray-400">
                        {space?.property}
                      </Body1>

                      <Body2 className="hidden text-gray-400 md:flex">
                        {space?.guestLimit} guest max
                      </Body2>
                    </div>
                  </div>
                ))}
              </div>
              <Days
                spaces={spaces}
                dates={dates}
                containerRef={containerRef}
                onItemsRendered={onItemsRendered}
                availableStay={availableStay}
                setAvailableStay={setAvailableStay}
              />
            </div>
          </div>
        </div>
        <div className="flex bg-[#F4A407] rounded-b-2xl w-full flex-col justify-center items-center py-3 px-6">
          <Heading3 className="text-white">Stay scheduling is paused.</Heading3>
        </div>
      </div>

      {/* <div className="fixed  top-5 left-1/2 translate-x-[-50%]">
        <PopoverCard>
          <StayOptions />
        </PopoverCard>
      </div> */}

    </>
  );
}

export default CalenderTest;
