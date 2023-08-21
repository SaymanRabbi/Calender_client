import React from 'react';

import { Heading4 } from '../Typography';
import { OutlineButton } from '../Buttons';

export default function UnavailableNights() {
  return (
    <>
      <Heading4>Unavailable night</Heading4>

      <OutlineButton
        className="w-full flex justify-center"
        text=" Make available"
      />
    </>
  );
}
