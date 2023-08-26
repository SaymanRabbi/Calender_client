import StayNights from '@/components/popover/StayNights';
import { CommentDark } from '@/icons';
import moment from 'moment';
import { useEffect, useState } from 'react';
import CalendarPopover from '../CalendarPopover';

export default function Stay({ stay, spaceIndex }: any) {
  const arriveDate = moment(new Date(stay.arriveDate), 'DD-MMMM-YYYY');
  const departDate = moment(stay.departDate, 'DD-MMMM-YYYY');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const ammountOfStayDates = Math.abs(arriveDate.diff(departDate, 'days'));
  const stayWidth = ammountOfStayDates > 1 ? ammountOfStayDates * 80 - 20 : 70;
  useEffect(() => {},[stayWidth] )
  return (
    <CalendarPopover
    isPopoverOpen={isPopoverOpen}
    setIsPopoverOpen={setIsPopoverOpen}
      ammountOfStayDates={ammountOfStayDates}
      component={
        <StayNights
          spaceIndex={spaceIndex}
          arriveDate={moment(arriveDate)}
          departDate={moment(departDate)}
          ammountOfStayDates={ammountOfStayDates}
        />
      }
      id="ss"
    >
      <div className="right-[10px] top-1/2 -translate-y-1/2"
       style={{
        position: 'absolute'
       }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg,#c345ff, #66f 41.06%)',
            width: `${stayWidth}px`,
          }}
          className={` gradient-info flex shadow-stay-shadow rounded-[20px] h-10 items-center gap-1.5 w-[${stayWidth}px] ${
            stay?.user?.avater ? 'pl-1 pr-3' : 'px-5'
          } `}
        >
          {stay?.user?.avater && (
            <img
              src={stay?.user?.avater}
              alt="cookie monster"
              className="w-8 h-8 rounded-[100px]"
            />
          )}
          {ammountOfStayDates > 1 ? (
            <>
              <p className="text-base not-italic font-medium text-white truncate">
                {stay?.user?.name}
              </p>
              {stay.comment && (
                <CommentDark className="fill-white" color="white" />
              )}
            </>
          ) : (
            <p className="text-base not-italic font-medium text-white">...</p>
          )}
        </div>
      </div>
    </CalendarPopover>
  );
}
