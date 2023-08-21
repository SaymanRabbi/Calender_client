import React from 'react';

import { Heading4 } from '../Typography';

export default function StayOptions() {
  return (
    <>
      <div className="flex flex-col items-center py-3">
        <Heading4>Stay options</Heading4>
      </div>
      <button type="button" className="w-full btn-primary">
        Add comment
      </button>
      <button type="button" className="w-full btn-secondary">
        Cancel Stay
      </button>
      <button type="button" className="w-full btn-secondary">
        Request Cancellation
      </button>
    </>
  );
}
