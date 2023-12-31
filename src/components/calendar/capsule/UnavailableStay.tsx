import React from 'react';
import moment from 'moment';
import styles from '@/styles/calendar/unavailableStay.module.scss';
// import TestPopover from '../TestPopover';
import UnavailableNights from '@/components/popover/UnavailableNights';
import CalendarPopover from '../CalendarPopover';

export default function UnavailableStay({ stay, date }: any) {
  const arriveDate = moment(new Date(stay.arriveDate), 'DD-MMMM-YYYY');
  const departDate = moment(stay.departDate, 'DD-MMMM-YYYY');

  const ammountOfStayDates = Math.abs(arriveDate.diff(departDate, 'days'));
  const stayWidth = ammountOfStayDates > 1 ? ammountOfStayDates * 80 - 20 : 70;
  return (
    <CalendarPopover
      ammountOfStayDates={ammountOfStayDates}
      component={<UnavailableNights />}
      id={date.format('DD-MMM-YYYY')}
    >
      <div className={styles.capsule__wrapper}>
        <div
          style={{
            width: `60px`,
            marginLeft: -stayWidth,
          }}
          className={styles.capsule}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M2 2L26 26"
              stroke="#DBE4EC"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M2 26L26 2"
              stroke="#DBE4EC"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </CalendarPopover>
  );
}
