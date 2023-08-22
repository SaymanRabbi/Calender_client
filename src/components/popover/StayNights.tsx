
import { Moment } from 'moment';
import { GradientButton } from '../Buttons';
import { Heading4 } from '../Typography';
import { useMyContext } from '@/app.context';

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
  console.log("date",arriveDate, departDate, ammountOfStayDates,spaceIndex);


  const { bookingarry, setbookingarry, 
    setButtonState, } = useMyContext()





  const addBooking = () => {
    console.log("bo",bookingarry);
    const newBooking={
      user:{
        name:"Sayman",
        avatar:"/assets/test_stay.jpg"
      },
      arriveDate:arriveDate.format('DD-MMMM-YYYY'),
      departDate:departDate.format('DD-MMMM-YYYY'),
      type:"mystay",
      comment:"Hey everyone, I’m bringing snacks and drinks! Could everyone pick a"


    }
    if(spaceIndex=== 0){
      setbookingarry({...bookingarry,stays:[...bookingarry.stays,newBooking]})
      setButtonState(false)
    }
    else{
      alert("this is under working")

    }

  }

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
