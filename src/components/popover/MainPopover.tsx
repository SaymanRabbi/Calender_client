// import React, { Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';

// function MainPopover({ modalOpen, setModalOpen, children, type }: any) {
//   return (
//     <>
//       {modalOpen && (
//         <Transition appear show={modalOpen} as={Fragment}>
//           <Dialog
//             as="div"
//             className="fixed inset-0 z-[999] overflow-y-auto text-center "
//             onClose={setModalOpen}
//           >
//             <div className="px-4">
//               <div className="fixed inset-0 overflow-y-auto">
//                 <div
//                   className={`flex mx-auto items-center justify-center min-h-full w-[90%] ${
//                     type !== 'pre-login' ? 'md:w-[560px]' : 'md:w-[640px]'
//                   } text-center`}
//                 >
//                   <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                   >
//                     {children}
//                   </Transition.Child>
//                 </div>
//               </div>
//             </div>
//           </Dialog>
//         </Transition>
//       )}
//     </>
//   );
// }

// export default React.memo(MainPopover);
