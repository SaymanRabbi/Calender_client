import React, { useState, useEffect, ReactNode } from 'react';

import { usePopper } from 'react-popper';
import { createPopper } from '@popperjs/core';
import ReactDOM from 'react-dom';
import { useMyContext } from '@/app.context';
import PopoverCard from '../popover';


interface IProps {
  children: ReactNode;
  id: any;
  component: ReactNode;
  resetAvailableStay?: any;
  ammountOfStayDates: number;
  isPopoverOpen: boolean;
  setIsPopoverOpen: Function;
}

function CalendarPopover({
  children,
  id,
  component,
  resetAvailableStay,
  ammountOfStayDates,
  isPopoverOpen,
  setIsPopoverOpen,
}: IProps) {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const { pop, setPop, cardContext, setCardContext } = useMyContext();
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [cardPlace, setCardPlace] = useState(0)



  const { styles, attributes }: any = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'bottom',
      strategy: 'fixed',
    }
  );
  // console.log("card", cardContext);
  useEffect(() => {
    // console.log("pop", pop);
    if (pop) {
      // const buttonEm=document.querySelector(".targetedElement")
      // console.log("em", buttonEm) ;
      // buttonEm?.click()
    }
  }, [pop])

  useEffect(() => {
    const cardValue = -(ammountOfStayDates * 80 / 2) - 160
    console.log("ss", cardValue);
    setCardPlace(cardValue)
    const destinationContainer = document.getElementById('destination');
    if (!destinationContainer) {
      const newContainer = document.createElement('div');
      newContainer.id = 'destination';
      document.body.appendChild(newContainer);
    }

    if (referenceElement && popperElement) {
      createPopper(referenceElement, popperElement, {
        placement: 'bottom',
        strategy: 'absolute',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 70],
              // offset: [-160 - 20.6 * ammountOfStayDates, 70],
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
          // console.log("clicking");
          setIsPopoverOpen(false);
          resetAvailableStay();
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [popperElement, referenceElement, resetAvailableStay]);

  const togglePopover = (event) => {
    // setIsPopoverOpen((prev) => !prev);
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const offsetLeft = rect.left;
    const offsetTop = rect.top;
    const offsetWidth = rect.width;
    const offsetHeight = rect.height;
    // setCardContext(rect)

    console.log("Offset Left:", offsetLeft);
    console.log("Offset Top:", offsetTop);
    console.log("Offset Width:", offsetWidth);
    console.log("Offset Height:", offsetHeight);


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
              cardPlace={cardPlace} 
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
