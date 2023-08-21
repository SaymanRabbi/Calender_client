// import React from 'react';
// import PageTitle from '@/components/Dashboard/PageTitle';
// import H3 from '@/components/Typography/H3';
// import Text from '@/components/Typography/Text';
// import ThankYouFooter from '@/layout/ThankYouFooter';
// import Divider from '@/components/Divider';
// import SidebarInfoCard from '@/components/Cards/SidebarInfoCard';
// import { Check, Trash, Zzz } from '@/icons';
// import ActionCard from '@/components/Cards/ActionCard';
// import RequestCard from '@/components/Cards/RequestCard';
// import PropertyCard from '@/components/Cards/PropertyCard';
// import SettingsCard from '@/components/Cards/SettingsCard';
// import StayIndicator from '@/components/Dashboard/StayIndicator';
// import Modal from '@/components/modal/Modal';
// import Popover from '@/components/popover';
// import StayNights from '@/components/popover/StayNights';
// import StayOptions from '@/components/popover/StayOptions';
// import DashboardMenu from '@/components/Dialog/menu/DashboardMenu';
// import Avater from '@/components/Avater';
// import DashboardHeader from '@/layout/DashboardHeader';
// import H4 from '@/components/Typography/H4';
// import RadioButton from '@/components/form/RadioButton';
// import Checkbox from '@/components/form/Checkbox';
// import TooltipItem from '@/components/Tooltip';

// function Cards() {
//   return (
//     <div className="bg-Gray-background">
//       <DashboardHeader />
//       <div className="w-full flex items-center flex-col gap-[40px] py-[40px]">
//         Click to open Dashboard menu
//         <DashboardMenu>
//           <Avater />
//         </DashboardMenu>
//       </div>
//       <div>
//         <H3>Footer:</H3>
//         <ThankYouFooter />
//       </div>
//       <Divider />
//       <div className="w-full flex flex-col gap-[40px] py-[40px]">
//         <H3>Left column items:</H3>
//         <div className="w-full flex flex-col items-center gap-[40px] justify-center ">
//           <PageTitle title="Hi Shamim" info="Welcome back!" />
//           <SidebarInfoCard
//             title="Shamim"
//             icon={<Zzz />}
//             action={
//               <div className="flex items-center gap-6">
//                 <button className="font-normal text-Gray-dark btn-small-text">
//                   Action
//                 </button>
//                 <button className="btn-small btn-outline">Action</button>
//               </div>
//             }
//           >
//             <div className="flex gap-3 px-6 cursor-pointer group ">
//               <div className="px-6 pb-6">
//                 <Text>CONTENT</Text>
//               </div>
//             </div>
//           </SidebarInfoCard>
//         </div>
//       </div>
//       <Divider />
//       <div className="w-full flex flex-col gap-[40px] py-[40px]">
//         <H3>Right column items:</H3>
//         <div className="w-full flex flex-col items-center gap-[40px] justify-center ">
//           <ActionCard
//             title="Action item title"
//             action={
//               <>
//                 <button className="btn-primary">Button</button>
//                 <button className="btn-secondary">Button</button>
//                 <button className="btn-secondary">
//                   <Trash />
//                 </button>
//               </>
//             }
//           >
//             <Text>Action item content here, left side. </Text>
//           </ActionCard>
//           <RequestCard
//             title="Property access request"
//             user="[User Name]"
//             email="name@example-email.com"
//           />
//           <SettingsCard
//             title="Settings card title"
//             info="Settings card info"
//             action={
//               <>
//                 <button className="btn-primary" disabled>
//                   Disabled
//                 </button>
//                 <button className="btn-primary">Action</button>
//                 <button className="btn-secondary">Button</button>
//               </>
//             }
//           >
//             <Text>Content.</Text>
//           </SettingsCard>
//           <PropertyCard
//             id={'1'}
//             propertyName={'Property Name'}
//             propertyImage={''}
//             userName={'Owner Name'}
//             userAvater={''}
//           />
//           <div className="flex justify-center w-full">
//             <StayIndicator>Empty State Indicator</StayIndicator>
//           </div>
//         </div>
//       </div>
//       <div className="w-full flex flex-col gap-[40px] py-[40px]">
//         <H3>Modals:</H3>
//         <div className="w-full flex flex-col items-center gap-[40px] justify-center ">
//           <Modal
//             title="Modal Title"
//             action={
//               <>
//                 <button className="btn-primary">Modal Action Button</button>
//               </>
//             }
//           >
//             <Text>Modal content</Text>
//           </Modal>
//         </div>
//       </div>
//       <div className="w-full flex flex-col gap-[40px] py-[40px]">
//         <H3>Popover - Calendar</H3>
//         <div className="w-full flex flex-col items-center gap-[40px] justify-center ">
//           <Popover>
//             <StayNights />
//           </Popover>
//           <Popover>
//             <StayOptions />
//           </Popover>
//         </div>
//       </div>
//       <Divider />
//       <div className="w-full flex flex-col gap-[40px] py-[40px]">
//         <H3>Important User Action (Top center display, auto-dismiss)</H3>
//         <div className="w-full flex flex-col items-center gap-[40px] justify-center ">
//           <div
//             style={{
//               background: '#1B1D2C',
//               boxShadow:
//                 '0px 18px 35px -4px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, 0.24)',
//             }}
//             className="w-[288px] flex items-center p-3 rounded-[16px] gap-3"
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 width: '40px',
//                 height: '40px',
//                 padding: '8px',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: '12px',
//                 background: '#6E7989',
//               }}
//             >
//               <Check />
//             </div>
//             <h4 className="text-white">Text here</h4>
//           </div>
//         </div>
//       </div>
//       {/* card */}
//       <div className='flex w-[592px] flex-col items-start self-stretch gap-3 p-6 border rounded-lg bg-Gray-background border-Gray-light'>

//         <H4 >Guest role details</H4>
//         <H4 >New stays:</H4>
//         <div className='flex flex-col items-start self-stretch right-0 justify-between gap-1.5'>
//           <RadioButton id={'Instant scheduling.'} name={'Instant scheduling.'} value={'Instant scheduling.'} label={'Instant scheduling.'} />
//           <div className='w-full pl-6'>
//             <Checkbox id={'test'} label={'No back to back stays. Stays by the same guest within 30 days require approval.'} />
//           </div>
//           <RadioButton id={'Instantscheduling.'} name={'Instant scheduling.'} value={'Instant scheduling.'} label={'Stay scheduling must be individually approved.'} />
//         </div>
//         <Divider />
//         <H4>Canceling or changing stays:</H4>
//         <div className='flex flex-col items-start self-stretch right-0 justify-between gap-1.5'>
//           <RadioButton id={'Instantscheduling.'} name={'Instantscheduling.'} value={'Instantscheduling.'} label={'Guests can cancel their stay until 10 days before their arrival date.'} />
//           <RadioButton id={'Instantscheduling'} name={'Instantscheduling.'} value={'Instantscheduling'} label={'Canceling any stay must be individually approved.'} />
//         </div>
//       </div>
//       {/* <TooltipItem children={undefined} /> */}
//     </div>
//   );
// }

// export default Cards;

import React from 'react';

export default function Cards() {
  return <div>Cards</div>;
}
