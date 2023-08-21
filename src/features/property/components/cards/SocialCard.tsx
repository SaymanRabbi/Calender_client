// import React from 'react';

// import { SocialCArdProps } from '@/types';

// import { CommentWhite } from '@/icons';
// import TextSmall from '@/components/Typography';

// export default function SocialCArd({ type }: SocialCArdProps) {
//   return (
//     <div className="flex flex-col items-start self-stretch gap-3 p-6 border rounded-lg bg-Gray-background border-Gray-light">
//       {type === 'social' ? (
//         <div className="gradient-info flex rounded-[20px] w-56 h-10 items-center gap-1.5 pl-1 pr-3">
//           <img
//             src="/assets/cookie-monster.webp"
//             alt="cookie monster"
//             className="w-8 h-8 rounded-[100px]"
//           />
//           <p className="text-base not-italic font-medium text-white">
//             Cookie Monster
//           </p>
//           <CommentWhite />
//         </div>
//       ) : (
//         <div className="gradient-info flex rounded-[20px] w-56 h-10 items-center gap-1.5 pl-5 pr-3">
//           <p className="text-base not-italic font-medium text-white">
//             Reserved
//           </p>
//         </div>
//       )}
//       <div className="flex flex-col items-start self-stretch gap-3">
//         <TextSmall>
//           Example: <br />
//           {type === 'type'
//             ? 'Show guest names & images.'
//             : 'Anonymized guests.'}
//         </TextSmall>
//         {type === 'social' ? (
//           <TextSmall>
//             Property owners & managers will see guest names and images
//             regardless of setting.
//           </TextSmall>
//         ) : (
//           <TextSmall>
//             This is how your guests will see other guest’s scheduled stays when
//             you select Anonymize.
//           </TextSmall>
//         )}
//       </div>
//     </div>
//   );
// }

// SocialCArd.defaultProps = {
//   type: null,
// };
