import React from 'react';
import { Moment } from 'moment';
import { Go, GoLeft } from '@/icons';
import { Heading4 } from '../Typography';

interface MonthIndicatorProps {
  currentMonth: Moment;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

function MonthIndicator({
  currentMonth,
  onPreviousMonth,
  onNextMonth,
}: MonthIndicatorProps) {
  return (
    <div className="flex justify-center items-center gap-1.5">
      <button onClick={onPreviousMonth}>
        <GoLeft className="fill-gray-400" />{' '}
      </button>
      <Heading4>{currentMonth?.format('MMMM-YYYY')}</Heading4>
      <button onClick={onNextMonth}>
        <Go className="fill-gray-400" />
      </button>
    </div>
  );
}

export default MonthIndicator;
