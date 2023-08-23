
import { useMyContext } from '@/app.context';
import { OutlineButton } from '../Buttons';
import { Heading4 } from '../Typography';
interface IProps {
  arriveDate: any;
  departDate: any;
  dayIndex: number;
  spaceIndex: number;
}

export default function UnavailableNights({ arriveDate,
  departDate,
  dayIndex,
  spaceIndex, }: IProps) {

  const { bookingarry, setbookingarry, setButtonState,setAvailableStay } = useMyContext() 


  const makeAv = () => {
    const arrive = arriveDate?.format('DD-MMMM-YYYY')
    const depart = departDate?.format('DD-MMMM-YYYY')
    const targetedArray = bookingarry[spaceIndex]
    if (targetedArray) {
      const allStays = targetedArray.stays
      const filterStays = allStays.filter((f:any) => f.arriveDate != arrive && f.departDate != depart)
      const othersData = bookingarry.filter((f:any, index:any) => index != spaceIndex)
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
