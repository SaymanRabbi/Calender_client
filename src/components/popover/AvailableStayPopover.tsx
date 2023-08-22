import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { createPopper } from '@popperjs/core';

import StayNights from './StayNights';
import PopoverCard from '.';
import { useMyContext } from '@/app.context';

function AvailableStayPopover({ children, resetAvailableStay, id }: any) {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  // const { isPopoverOpen, setIsPopoverOpen } = useMyContext();
  // console.log("is", isPopoverOpen );


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
              offset: [-199, 70],
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
    // setIsPopoverOpen(!isPopoverOpen);

    if (isPopoverOpen) {
      resetAvailableStay();
    }
  };

  const closePopover = (value: boolean) => {
    setIsPopoverOpen(value);
  };

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
            <PopoverCard
             setIsPopoverOpen={closePopover}
             >
              <StayNights />
            </PopoverCard>
          </div>,
          document.querySelector('#destination')!
        )}
    </>
  );
}

export default AvailableStayPopover;
