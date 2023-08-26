import { Go, GoLeft } from '@/icons';
// import TestPopover from '../TestPopover';

export default function AvailableStayCapsulHover({
  date,
  handleAvailableStay,
}: any) {
  return (
    <div>
      <div className="absolute ml-[8.5px] group-hover:flex hidden z-[1] go-icon mx-auto top-1/2  translate-y-[-50%]">
        <div
          style={{
            width: `${60}px`,
          }}
          id={`available-capsule-${date.format('DD-MMMM-YYYY')}`}
          className={` flex bg-[#49CA21] group-hover:stay-shadow rounded-[20px] h-10 items-center justify-between gap-1.5 px-1 `}
        >
          <div className="flex">
            <button
              onClick={() => {
                handleAvailableStay(true);
              }}
            >
              <GoLeft className="fill-white" />
            </button>
          </div>

          <div className="flex">
            <button
              onClick={() => {
                handleAvailableStay(false);
              }}
            >
              <Go className="fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
