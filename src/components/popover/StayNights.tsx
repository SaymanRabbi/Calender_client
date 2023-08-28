
import { useMyContext } from '@/app.context';
import { Moment } from 'moment';
import { useEffect, useState } from 'react';
import { GradientButton } from '../Buttons';
import { Heading4 } from '../Typography';

interface IProps {
  arriveDate?: Moment;
  departDate?: Moment;
  ammountOfStayDates?: number;
  spaceIndex?: number;
  date?: any;
}

export default function StayNights({
  arriveDate,
  departDate,
  ammountOfStayDates,
  spaceIndex,
  date,
}: IProps) {


  const { bookingarry, setbookingarry,
    setButtonState,setAvailableStay  } = useMyContext()
  const [dateCheck, setDateCheck] = useState(false)


  useEffect(() => {
    if (arriveDate?.format('DD-MMMM-YYYY') != "Invalid date" && departDate?.format('DD-MMMM-YYYY') != "Invalid date") {

      setDateCheck(false)
    }
    else { setDateCheck(true) }
  }, [arriveDate, departDate])



  const addBooking = () => {

    const newBooking = {
      user: {
        name: "Sayman",
        avatar: "/assets/test_stay.jpg"
      },
      arriveDate: dateCheck ? date.clone().subtract(1, 'day').format ('DD-MMMM-YYYY') : arriveDate?.format('DD-MMMM-YYYY'),
      departDate: dateCheck ? date.clone().subtract(0, 'day').format('DD-MMMM-YYYY') : departDate?.format('DD-MMMM-YYYY'),
      type: "mystay",
      comment: "Hey everyone, I’m bringing snacks and drinks! Could everyone pick a"


    }
    const othersData = bookingarry.filter((f:any, index:any) => index != spaceIndex)
    const targetedData = bookingarry.find((f:any, index:any) => index == spaceIndex)
    const newModifiedData = ({ ...targetedData, stays: [...targetedData.stays, newBooking] })
    othersData.splice(spaceIndex, 0, newModifiedData);

    setbookingarry(othersData)

    setAvailableStay({
      space: null,
      departDate: '',
      arriveDate: '',
    })

    setButtonState(false)
    // if(spaceIndex=== 0){
    //   setbookingarry({...bookingarry,stays:[...bookingarry.stays,newBooking]})
    //   setButtonState(false)
    // }
    // else{
    //   alert("this is under working")

    // }

  }
  
  // issue solved

  return (
    <>
      <div className="flex flex-col items-center py-3">
        <Heading4>
          {dateCheck ? 1 : Number.isNaN(ammountOfStayDates) ? 1 :ammountOfStayDates} Night
        </Heading4>

        <div className="flex gap-3">
          <Heading4>{dateCheck ? date.clone().subtract(1, 'day').format('DD-MMMM-YYYY') : arriveDate?.format('DD-MMMM-YYYY')}</Heading4>
          <Heading4>{'->'}</Heading4>
          <Heading4>{dateCheck ?
           date.clone().subtract(0, 'day').format('DD-MMMM-YYYY')
            : departDate?.format('DD-MMMM-YYYY')}</Heading4>
        </div>
      </div>

      <GradientButton
        onClick={addBooking}
        // onClick={() => {
        //   alert('working');
        // spacesX[spaceIndex].stays.push({
        //   user: {
        //     name: 'shamim Monster',
        //   },
        //   type: 'unavailable',
        //   arriveDate: arriveDate.format('DD-MMMM-YYYY'),
        //   departDate: departDate.format('DD-MMMM-YYYY'),
        // });
        // }}
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
