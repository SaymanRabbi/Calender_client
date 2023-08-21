// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/layout/DashboardLayout';
// import Nav from '@/components/Dashboard/Nav';
// import PageTitle from '@/components/Dashboard/PageTitle';
// import Card from '@/components/Dashboard/Card';
// import H4 from '@/components/Typography/H4';
// import Text from '@/components/Typography/Text';
// import Avater from '@/components/Avater';

// import ThankYouFooter from '@/layout/ThankYouFooter';
// import H3 from '@/components/Typography/H3';
// import { useRouter } from 'next/router';
// import Checkbox from '@/components/form/Checkbox';
// import SettingsCard from '@/components/Cards/SettingsCard';
// import InputFeild from '@/components/form/InputFeild';
// import PropertyInfo from '@/components/sections/property/settings/PropertyInfo';
// import PropertyPhotos from '@/components/sections/property/settings/PropertyPhotos';
// import GettingPaid from '@/components/sections/property/settings/GettingPaid';
// import PropertyDetails from '@/components/sections/property/settings/PropertyDetails';
// import GuestRuls from '@/components/sections/property/settings/GuestRuls';
// import StayInstructions from '@/components/sections/property/settings/StayInstructions';
// import SocialOrAnonymous from '@/components/sections/property/settings/SocialOrAnonymous';
// import DeleteProperty from '@/components/sections/property/settings/DeleteProperty';
// import Amenities from '@/components/sections/property/settings/Amenities';
// import KidAmenities from '@/components/sections/property/settings/KidAmenities';
// import StaySchedulingSetting from '@/components/sections/property/settings/StaySchedulingSetting';
// import EditEntireSpaceModal from '@/components/Dialog/EditEntireSpaceModal';
// import EditSleepingSpaceModal from '@/components/Dialog/EditSleepingSpaceModal';
// import AdvanceCanStay from '@/components/sections/property/settings/AdvanceCanStay';
// import MainDrawer from '@/components/drawer/MainDrawer';
// import { Dialog } from '@headlessui/react';

// export default function Settings() {
//   const [openEntireSpaceModal, setOpenEntireSpaceModal] = useState(false);
//   const [openSleepingSpaceModal, setOpenSleepingSpaceModal] = useState(false);
//   const [sleepingSpacData, setSleepingSpaceData] = useState({});
//   const router = useRouter();

//   const [selectedMenuItem, setSelectedMenuItem] = useState('');
//   const [openDrawer, setOpenDrawer] = useState(false);

//   // useEffect(() => {
//   //   if (!openDrawer) {
//   //     document.body.style.overflow = 'auto';
//   //     document.body.classList.remove('no-scrollbar');
//   //   }
//   // }, [openDrawer]);

//   const handleMenuItemClick = (menuItem: string) => {
//     setSelectedMenuItem(menuItem);
//   };

//   const handleEntireSpaceModal = () => {
//     setOpenEntireSpaceModal(true);
//   };
//   const handleSleepingSpaceModal = (space: object) => {
//     setOpenSleepingSpaceModal(true);
//     setSleepingSpaceData(space);
//   };

//   const handleDrawerTitle = (value: string) => {
//     setOpenDrawer(true);
//     if (window.innerWidth <= 1024) {
//       document.body.style.overflow = 'hidden';
//       //   document.body.classList.add('no-scrollbar');
//     }
//     handleMenuItemClick(value);
//   };

//   return (
//     <DashboardLayout>
//       <EditEntireSpaceModal
//         isOpen={openEntireSpaceModal}
//         setIsOpen={setOpenEntireSpaceModal}
//       />
//       <EditSleepingSpaceModal
//         sleepingSpacData={sleepingSpacData}
//         isOpen={openSleepingSpaceModal}
//         setIsOpen={setOpenSleepingSpaceModal}
//       />
//       <div className="flex overflow-y-hidden lg:w-[736px] xl:w-full mx-auto flex-col max-lg:px-3 gap-6">
//         <Nav href={`/dashboard/property/${router.query.slug}`}>
//           {' '}
//           [property name]{' '}
//         </Nav>

//         <div className="flex items-start gap-10 max-xl:flex-col">
//           <div className="flex flex-col gap-6 max-xl:w-full">
//             <PageTitle title="Property Settings" info="[Property Name]" />
//             <div
//               className="w-full xl:w-[344px] rounded-2xl flex flex-col gap-4 p-6 bg-white"
//               style={{
//                 boxShadow:
//                   '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)',
//               }}
//             >
//               {/* <button
//                 onClick={() => handleDrawerTitle('Property Information')}
//                 className={`menu-item px-5 py-3 w-full md:${selectedMenuItem === 'Property Information' && 'active'
//                   } lg:${(selectedMenuItem === '') || (selectedMenuItem === 'Property Information') ? 'active' : ''}`}
//               >
//                 Property Information
//               </button> */}
//               <button
//                 onClick={() => handleDrawerTitle('Property Information')}
//                 className={`menu-item px-5 py-3 w-full ${selectedMenuItem === 'Property Information' && 'max-lg:active'} ${selectedMenuItem === '' || selectedMenuItem === 'Property Information' ? 'lg:active' : ''} `}
//               >
//                 Property Information
//               </button>
//               <p className="sub-menu px-7">Property photos</p>

//               <button
//                 onClick={() => handleDrawerTitle('Getting Paid')}
//                 className={`menu-item px-5 py-3 w-full ${selectedMenuItem === 'Getting Paid' && 'active'
//                   }`}
//               >
//                 Getting Paid
//               </button>
//               <button
//                 onClick={() => handleDrawerTitle('Property Details')}
//                 className={`menu-item px-5 py-3 w-full ${selectedMenuItem === 'Property Details' && 'active'
//                   }`}
//               >
//                 Property Details
//               </button>
//               <p className="sub-menu px-7">House Rules</p>
//               <p className="sub-menu px-7">Stay Instructions</p>

//               <button
//                 onClick={() => handleDrawerTitle('Stay Scheduling')}
//                 className={`menu-item px-5 py-3 w-full ${selectedMenuItem === 'Stay Scheduling' && 'active'
//                   }`}
//               >
//                 Stay Scheduling
//               </button>
//               <p className="sub-menu px-7">Scheduling calendar</p>
//               <p className="sub-menu px-7">Costs</p>
//               <p className="sub-menu px-7">Social options</p>

//               <button
//                 onClick={() => handleDrawerTitle('Amenities List')}
//                 className={`menu-item px-5 py-3 w-full ${selectedMenuItem === 'Amenities List' && 'active'
//                   }`}
//               >
//                 Amenities List
//               </button>
//               <button
//                 onClick={() => handleDrawerTitle('Delete Property')}
//                 className={`menu-item px-5 py-3 w-full ${selectedMenuItem === 'Delete Property' && 'active'
//                   }`}
//               >
//                 Delete Property
//               </button>
//             </div>
//           </div>

//           <MainDrawer
//             navTitle={selectedMenuItem}
//             setOpen={setOpenDrawer}
//             open={openDrawer}
//           >
//             <div className="w-full lg:w-[736px] mx-auto gap-6 flex flex-col items-start">
//               <div className="flex flex-col gap-6 max-xl:mx-auto max-xl:w-full">
//                 {(selectedMenuItem === 'Property Information' ||
//                   selectedMenuItem === '') && (
//                     <>
//                       <PropertyInfo />
//                       <PropertyPhotos />
//                     </>
//                   )}
//                 {selectedMenuItem === 'Getting Paid' && (
//                   <>
//                     <GettingPaid />
//                   </>
//                 )}
//                 {selectedMenuItem === 'Property Details' && (
//                   <>
//                     <PropertyDetails />
//                     <GuestRuls />
//                     <StayInstructions />
//                   </>
//                 )}
//                 {selectedMenuItem === 'Stay Scheduling' && (
//                   <>
//                     <StaySchedulingSetting
//                       handleEntireSpaceModal={handleEntireSpaceModal}
//                       handleSleepingSpaceModal={handleSleepingSpaceModal}
//                     />
//                     <AdvanceCanStay />
//                     <SocialOrAnonymous />
//                   </>
//                 )}
//                 {selectedMenuItem === 'Delete Property' && (
//                   <>
//                     <DeleteProperty />
//                   </>
//                 )}
//                 {selectedMenuItem === 'Amenities List' && (
//                   <>
//                     <Amenities />
//                     <KidAmenities />
//                   </>
//                 )}
//               </div>
//             </div>
//           </MainDrawer>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }

import React from 'react';

export default function Settings() {
  return <div>Settings</div>;
}
