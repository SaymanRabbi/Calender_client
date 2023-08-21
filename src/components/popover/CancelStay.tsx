// import { Fragment, ReactNode } from 'react';

// import { Popover, Transition } from '@headlessui/react';
// // import { openAddPropertyModal } from '@/store/sidebarConfigSlice';
// // import { useDispatch } from 'react-redux';

// import PopoverCard from '.';
// // import StayNights from './StayNights';
// import UnavailableNights from './UnavailableNights';

// export default function CancelStay({ children }: { children: ReactNode }) {
//     // const dispatch = useDispatch();
//     return (
//         <div>
//             <Popover className={' relative'}>
//                 {({ open }) => {
//                     return (
//                         <>
//                             <Popover.Button className={'focus:outline-none focus:ring-0'}>
//                                 {children}
//                             </Popover.Button>
//                             <Transition
//                                 as={Fragment}
//                                 enter="transition ease-out duration-100"
//                                 enterFrom="transform opacity-0 scale-95"
//                                 enterTo="transform opacity-100 scale-100"
//                                 leave="transition ease-in duration-75"
//                                 leaveFrom="transform opacity-100 scale-100"
//                                 leaveTo="transform opacity-0 scale-95"
//                             >
//                                 <Popover.Panel className="absolute z-10 max-w-sm px-4 mt-3 transform left-1/2 sm:px-0 lg:max-w-3xl">
//                                     <PopoverCard open={open}>
//                                         <UnavailableNights />
//                                     </PopoverCard>
//                                 </Popover.Panel>
//                             </Transition>
//                         </>
//                     );
//                 }}
//             </Popover>
//         </div>
//     );
// }
