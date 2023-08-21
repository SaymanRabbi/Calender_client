import React from 'react';

import { Moment } from 'moment';
import { Heading4 } from '../Typography';
import { GradientButton } from '../Buttons';

interface IProps {
  arriveDate: Moment;
  departDate: Moment;
  ammountOfStayDates: number;
  spaceIndex: number;
}

export default function StayNights({
  arriveDate,
  departDate,
  ammountOfStayDates,
  spaceIndex,
}: IProps) {
  return (
    <>
      <div className="flex flex-col items-center py-3">
        <Heading4>
          {ammountOfStayDates} night {spaceIndex}
        </Heading4>

        <div className="flex gap-3">
          <Heading4>{arriveDate.format('ddd MMM. DD')}</Heading4>
          <Heading4>{'->'}</Heading4>
          <Heading4>{departDate.format('ddd MMM. DD')}</Heading4>
        </div>
      </div>

      <GradientButton
        onClick={() => {
          alert('working');
          // spacesX[spaceIndex].stays.push({
          //   user: {
          //     name: 'shamim Monster',
          //   },
          //   type: 'unavailable',
          //   arriveDate: arriveDate.format('DD-MMMM-YYYY'),
          //   departDate: departDate.format('DD-MMMM-YYYY'),
          // });
        }}
        className="w-full"
        text="Schedule My Stay"
      />
      {/* <GradientButton text="Schedule My Stay" />

      <Caption className="text-pink">Warning/ Error</Caption>
      <OutlineButton text=" Set as unavailable" />
      <OutlineButton text="Add comment" />
      <OutlineButton text="Cancel Stay" />
      <OutlineButton text="Request Cancellation" /> */}
    </>
  );
}
