// import CalendarBody from '@/components/sections/Dashboard/Calendar/CalendarBody';
// import CalendarFooter from '@/components/sections/Dashboard/Calendar/CalendarFooter';
// import CalendarHeader from '@/components/sections/Dashboard/Calendar/CalendarHeader';
// import React from 'react';
// import { H2 } from '@/components/Typography';
// import CalenderTest from '@/components/calendar/CalenderTest';
// import { Popover, Transition } from '@headlessui/react';
// import { Fragment } from 'react';

// const solutions = [
//   {
//     name: 'Insights',
//     description: 'Measure actions your users take',
//     href: '##',
//   },
//   {
//     name: 'Automations',
//     description: 'Create your own targeted content',
//     href: '##',
//   },
//   {
//     name: 'Reports',
//     description: 'Keep track of your growth',
//     href: '##',
//   },
// ];

// const calendar = () => {
//   return (
//     <div className="flex flex-col items-center w-full h-[200vh] gap-10 bg-Gray-background bg-Gray-backgound">
//       <h1 className="heading-h1">Calendar</h1>
//       <div className="flex justify-center w-full">
//         <div className="w-[1120px] bg-white card-shadow rounded-2xl">
//           <CalendarHeader />
//           <hr />
//           {/* <CalendarBody /> */}
//           <CalendarFooter />
//         </div>
//       </div>

//       <div className="cat-menu-scroll overflow-scroll w-max max-w-[100vw] px-6 py-2 mx-auto bg-white flex gap-3 overflow-x-auto scroll-smooth md:px-0 md:max-w-[calc(100vw-80px)] lg:max-w-[calc(100vw-120px)]">
//         <a href="/all">
//           <button
//             type="button"
//             className="button-pressable focus:outline-none py-[10px] px-3 rounded-xl bg-white hover:bg-gray-100 flex gap-3 items-center"
//           >
//             <p className="text-blue-300 body-1 whitespace-nowrap">
//               All Beverages
//             </p>
//           </button>
//         </a>

//         <a href="/water">
//           <button
//             type="button"
//             className="button-pressable focus:outline-none py-[10px] px-3 rounded-xl bg-white hover:bg-gray-100 flex gap-3 items-center"
//           >
//             <p className="text-blue-300 body-1 whitespace-nowrap">
//               Water
//             </p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               className="w-6 h-6 duration-150 ease-in rotate-0 transition-rotate stroke-blue-300"
//             >
//               <path
//                 stroke="inherit"
//                 strokeLinecap="round"
//                 strokeWidth="2"
//                 d="m7 10 4.293 4.293a1 1 0 0 0 1.414 0L17 10"
//               ></path>
//             </svg>
//           </button>
//         </a>

//         {/* Add the other menu items here */}
//         {/* ... */}
//         <Popover>
//           {({ open }) => (
//             <>
//               <Popover.Button
//                 className={`
//                 ${open ? '' : 'text-opacity-90'}
//                 group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
//               >
//                 <span>Solutions</span>
//               </Popover.Button>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
//                   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-dark ring-opacity-5">
//                     <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
//                       {solutions.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                         >
//                           <div className="flex items-center justify-center w-10 h-10 text-white shrink-0 sm:h-12 sm:w-12">
//                             {/* <item.icon aria-hidden="true" /> */}
//                           </div>
//                           <div className="ml-4">
//                             <p className="text-sm font-medium text-gray-900">
//                               {item.name}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                               {item.description}
//                             </p>
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                     <div className="p-4 bg-gray-50">
//                       <a
//                         href="##"
//                         className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                       >
//                         <span className="flex items-center">
//                           <span className="text-sm font-medium text-gray-900">
//                             Documentation
//                           </span>
//                         </span>
//                         <span className="block text-sm text-gray-500">
//                           Start integrating products and tools
//                         </span>
//                       </a>
//                     </div>
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>

//       <H2>calendar v2</H2>
//       <div className="w-full max-w-sm px-4 top-16">
//         <Popover className="relative">
//           {({ open }) => (
//             <>
//               <Popover.Button
//                 className={`
//                 ${open ? '' : 'text-opacity-90'}
//                 group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
//               >
//                 <span>Solutions</span>
//               </Popover.Button>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
//                   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-dark ring-opacity-5">
//                     <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
//                       {solutions.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                         >
//                           <div className="flex items-center justify-center w-10 h-10 text-white shrink-0 sm:h-12 sm:w-12">
//                             {/* <item.icon aria-hidden="true" /> */}
//                           </div>
//                           <div className="ml-4">
//                             <p className="text-sm font-medium text-gray-900">
//                               {item.name}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                               {item.description}
//                             </p>
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                     <div className="p-4 bg-gray-50">
//                       <a
//                         href="##"
//                         className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                       >
//                         <span className="flex items-center">
//                           <span className="text-sm font-medium text-gray-900">
//                             Documentation
//                           </span>
//                         </span>
//                         <span className="block text-sm text-gray-500">
//                           Start integrating products and tools
//                         </span>
//                       </a>
//                     </div>
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>
//       <div className="w-full">
//         <CalenderTest />
//       </div>
//     </div>
//   );
// };

// export default calendar;

import React from 'react';

export default function Calendar() {
  return <div>Calendar</div>;
}
