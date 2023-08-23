import React from 'react';

import { Heading4 } from '../Typography';
import { OutlineButton } from '../Buttons';
import { useMyContext } from '@/app.context';

export default function UnavailableNights({ arriveDate,
  departDate,
  dayIndex,
  spaceIndex, }) {

  const { bookingarry, setbookingarry, setButtonState,setAvailableStay } = useMyContext() 


  const makeAv = () => {
    const arrive = arriveDate?.format('DD-MMMM-YYYY')
    const depart = departDate?.format('DD-MMMM-YYYY')
    const targetedArray = bookingarry[spaceIndex]
    if (targetedArray) {
      const allStays = targetedArray.stays
      const filterStays = allStays.filter(f => f.arriveDate != arrive && f.departDate != depart)
      const othersData = bookingarry.filter((f, index) => index != spaceIndex)
      const newModifiedData = ({ ...targetedArray, stays: filterStays })
      othersData.splice(spaceIndex, 0, newModifiedData);
      setbookingarry(othersData)
      setButtonState(false)

      setAvailableStay({
        space: null,
        departDate: '',
        arriveDate: '',
      })

    }

  }


  return (
    <>
      <Heading4>Unavailable night</Heading4>

      <OutlineButton
        onClick={makeAv}
        className="w-full flex justify-center"
        text=" Make available"
      />
    </>
  );
}
