import React, { useState, useEffect, ReactNode } from 'react';

import { usePopper } from 'react-popper';
import { createPopper } from '@popperjs/core';
import ReactDOM from 'react-dom';
import PopoverCard from '../popover';

interface IProps {
  children: ReactNode;
  id: any;
  component: ReactNode;
  resetAvailableStay?: any;
  ammountOfStayDates: number;
}

function CalendarPopover({
  children,
  id,
  component,
  resetAvailableStay,
  ammountOfStayDates,
}: IProps) {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { styles, attributes }: any = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'bottom',
      strategy: 'fixed',
    }
  );

  useEffect(() => {
    const destinationContainer = document.getElementById('destination');
    if (!destinationContainer) {
      const newContainer = document.createElement('div');
      newContainer.id = 'destination';
      document.body.appendChild(newContainer);
    }

    if (referenceElement && popperElement) {
      createPopper(referenceElement, popperElement, {
        placement: 'bottom',
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [-160 - 20.6 * ammountOfStayDates, 70],
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

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [popperElement, referenceElement, resetAvailableStay]);

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);

    if (isPopoverOpen) {
      resetAvailableStay();
    }
  };

  //   const closePopover = (value: boolean) => {
  //     setIsPopoverOpen(value);
  //   };

  return (
    <>
      {/* eslint-disable */}
      <div ref={setReferenceElement} onClick={togglePopover}>
        {children}
      </div>
      {isPopoverOpen &&
        ReactDOM.createPortal(
          <div
            ref={setPopperElement}
            style={{ ...styles.popper, display: 'block' }}
            {...attributes.popper}
            id={id}
            className="popover"
          >
            <PopoverCard setIsPopoverOpen={setIsPopoverOpen}>
              {component}
            </PopoverCard>
          </div>,
          document.querySelector('#destination')!
        )}
    </>
  );
}

CalendarPopover.defaultProps = {
  resetAvailableStay: () => {},
};

export default CalendarPopover;
