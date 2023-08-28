import { ReactNode, useEffect, useState } from 'react';

import { useMyContext } from '@/app.context';
import { createPopper } from '@popperjs/core';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import PopoverCard from '../popover';


interface IProps {
  children: ReactNode;
  id: any;
  component: ReactNode;
  resetAvailableStay?: any;
  ammountOfStayDates: number;
  isPopoverOpen: boolean;
  setIsPopoverOpen: Function;
  arriveDate?:any;
  departDate?:any;
  dayIndex?:any;
  spaceIndex?:any;
}

function CalendarPopover({
  children,
  id,
  component,
  resetAvailableStay,
  isPopoverOpen,
  setIsPopoverOpen,
  arriveDate,
  departDate,
  dayIndex,
  spaceIndex,
}: IProps) {

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const { pop, ammountOfStayDates } = useMyContext();
  
  const [cardPlace, setCardPlace] = useState(0)



  const { styles, attributes }: any = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'bottom',
      strategy: 'fixed',
    }
  );
  

  useEffect(() => {
    const cardValue = -(ammountOfStayDates * 20.6) - 160
    setCardPlace(cardValue)
    const destinationContainer = document.getElementById('destination');
    if (!destinationContainer) {
      const newContainer = document.createElement('div');
      newContainer.id = 'destination';
      document.body.appendChild(newContainer);
    }
    const dynamic = Number.isNaN(ammountOfStayDates) || ammountOfStayDates === undefined || ammountOfStayDates < 2 ? 0 : 33
    const dynamicTow = (Number.isNaN(ammountOfStayDates) || ammountOfStayDates === undefined) ? 0 : ammountOfStayDates
   
    if (referenceElement && popperElement) {
      createPopper(referenceElement, popperElement, {
        placement: 'bottom',
        strategy: 'absolute',
        modifiers: [
          {
            name: 'offset',
            options: {
              // 33 jodi 1 er besi r na hole 12
              // want to middle of the button
              // offset: [cardValue, 70],
              // (Number.isNaN(ammountOfStayDates) || ammountOfStayDates === undefined || ammountOfStayDates <2) ?12 : 33 * (Number.isNaN(ammountOfStayDates) || ammountOfStayDates === undefined) ?1 : ammountOfStayDates
              offset: [-160 - dynamic * dynamicTow, 70],
            },
          },
        ],
      });
    }
    // Add a click event listener to the document to close the popover when clicking outside
    const handleDocumentClick = (event: MouseEvent) => {
      if (popperElement && referenceElement) {
        const target = event.target as HTMLElement;
        if (
          !popperElement.contains(target) &&
          !referenceElement.contains(target)
        ) {
        
          setIsPopoverOpen(false);
          resetAvailableStay();
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // hello
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [popperElement, referenceElement, resetAvailableStay, ammountOfStayDates, isPopoverOpen, setIsPopoverOpen, arriveDate, departDate, dayIndex, spaceIndex]);

  const togglePopover = (event: any) => {
    // setIsPopoverOpen((prev) => !prev);
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    // setCardContext(rect)

    // const element = document.querySelector(".offsetValue");
    // const rect = element.getBoundingClientRect();
    // setCardContext(rect)



    // changed by asad
    setIsPopoverOpen(true)

    // end changed by asad

    if (isPopoverOpen) {
      // resetAvailableStay();
    }
  };

  // const closePopover = (value: boolean) => {
  //   setIsPopoverOpen(value);
  // };

  return (
    <>
      {/* eslint-disable */}
      <div className='offsetValue' ref={setReferenceElement} onClick={togglePopover}>
        {children}
      </div>
      {isPopoverOpen &&
        ReactDOM.createPortal(
          <div
            ref={setPopperElement}
            style={{ ...styles.popper, display: 'block' }}

            {...attributes.popper}
            id={id}
            className={`popover bg-red-400`}
          >
            <PopoverCard
              setIsPopoverOpen={setIsPopoverOpen}
            // cardPlace={cardPlace}
            >
              {component}
            </PopoverCard>
          </div>,
          document.querySelector('#destination')!
        )}

    </>
  );
}

CalendarPopover.defaultProps = {
  resetAvailableStay: () => { },
};

export default CalendarPopover;
