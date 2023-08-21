import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

import DropDown from '@/components/Listbox';
import ListItem from '@/components/Listbox/ListItem';
import { Body2, Heading4 } from '@/components/Typography';
import useAuth from '@/hooks/useAuth';
import useDashboardModals from '@/hooks/useDashboardModals';
import Rule from '@/features/shared/components/Rule';

type Props = {
  trigger: JSX.Element;
};



export default function DashboardMenu({ trigger }: Props) {
  const router = useRouter();
  const path = usePathname();
  const { user, signOut } = useAuth();

  const redirectCB = (href: string) => () => router.push(href);

  const dropdownTopItems = [
    {
      text: 'Dashboard',
      href: '/dashboard',
      desktopVisible: true,
    },
    {
      text: 'Stays',
      href: '/dashboard/stays',
      desktopVisible: false,
    },
    {
      text: 'Guests',
      href: '/dashboard/guests',
      desktopVisible: false,
    },
    {
      text: 'Acount Settings',
      href: '/dashboard/settings',
      desktopVisible: true,
    },
    {
      text: 'Payments',
      href: '/dashboard/payments',
      desktopVisible: true,
    },
  ];

  const dropdownBottomItems = [
    {
      text: 'Help & Feedback',
      onClick: redirectCB('/dashboard/feedback'),
    },
    {
      text: 'Log Out',
      onClick: signOut,
    },
  ];
  const { setModal } = useDashboardModals();
  return (
    <DropDown trigger={trigger} className="w-[228px]">
      <div className="px-6">
        <Heading4 className="truncate">
          {`${user?.name.first} ${user?.name.last}`}
        </Heading4>
        <Body2 className="text-gray-400 truncate">{user?.email}</Body2>
      </div>
      <Rule />
      {dropdownTopItems.map((val) => (
        <DropDown.Item
          key={val.text}
          value={val.text}
          className={`mx-auto ${val.desktopVisible ? '' : 'flex md:hidden'}`}
        >
          <ListItem
            text={val.text}
            onClick={redirectCB(val.href)}
            selected={path === val.href}
          />
        </DropDown.Item>
      ))}
      <Rule />
      <DropDown.Item value="Add Property" className="mx-auto">
        {({ selected }) => (
          <ListItem
            text="Add Property"
            onClick={() => setModal('addProperty')}
            selected={selected}
          />
        )}
      </DropDown.Item>
      <Rule />
      {dropdownBottomItems.map((val) => (
        <DropDown.Item key={val.text} value={val.text} className="mx-auto">
          {({ selected }) => (
            <ListItem
              text={val.text}
              onClick={val.onClick}
              selected={selected}
            />
          )}
        </DropDown.Item>
      ))}
    </DropDown>
    // <Menu
    //   as="div"
    //   className="relative text-left focus:outline-none focus:ring-0"
    // >
    //   <div className="flex items-center focus:outline-none focus:ring-0">
    //     <Menu.Button className={'focus:outline-none focus:ring-0'}>
    //       {children}
    //     </Menu.Button>
    //   </div>
    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //   >
    //     <Menu.Items
    //       style={{
    //         boxShadow: '0px 20px 40px -4px rgba(145, 158, 171, 0.16)',
    //       }}
    //       className="absolute focus:outline-none focus:ring-0 right-0 w-[228px] flex flex-col items-end  mt-2 z-30 origin-top-right  "
    //     >
    //       <div className="bg-transparent inline-block pr-[20px]">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="18"
    //           height="8"
    //           viewBox="0 0 18 8"
    //           fill="none"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M18 8L10.591 0.653454C9.71231 -0.217818 8.28769 -0.217818 7.40901 0.653454L0 8H18Z"
    //             fill="white"
    //           />
    //         </svg>
    //       </div>
    //       <div className="bg-white flex w-[228px] flex-col items-start rounded-xl">
    // <div className="px-[24px] w-[228px] py-3 ">
    //   <h4 className="heading-h4">User Name</h4>
    //   <p className="stay-text-sm">users@emailaddress.com</p>
    // </div>
    //         <div className="h-[1px] self-stretch bg-Gray-light"></div>

    //         <div className="flex flex-col justify-start gap-1 p-3">
    // <Menu.Item>
    //   <MenuLink href="/dashboard">Dashboard</MenuLink>
    // </Menu.Item>
    // <Menu.Item>
    //   <MenuLink href="/dashboard/settings">Account Settings</MenuLink>
    // </Menu.Item>
    // <Menu.Item>
    //   <MenuLink href="/dashboard/payments">Payments</MenuLink>
    // </Menu.Item>
    //           <Menu.Item>
    //             <button
    //               onClick={() => {
    //                 dispatch(openAddPropertyModal());
    //               }}
    //               className="menu-item "
    //             >
    //               Add Property
    //             </button>
    //           </Menu.Item>
    //           <Menu.Item>
    //             <MenuLink href="/dashboard/feedback">Help & Feedback</MenuLink>
    //           </Menu.Item>
    //           <Menu.Item>
    //             <button className="menu-item ">Log Out</button>
    //           </Menu.Item>
    //         </div>

    //         <div className="xl:hidden h-[1px] self-stretch bg-Gray-light"></div>
    //         <div className="flex flex-col justify-start gap-1 p-3 lg:hidden">
    //           <Menu.Item>
    //             <MenuLink href="/dashboard/stays">Stays</MenuLink>
    //           </Menu.Item>
    //           <Menu.Item>
    //             <MenuLink href="/dashboard/guests">Guests</MenuLink>
    //           </Menu.Item>
    //         </div>
    //       </div>
    //     </Menu.Items>
    //   </Transition>
    // </Menu>
  );
}
