import React from 'react';
import { Disclosure } from '@headlessui/react';

import { DownArrow, UpperArrow } from '@/icons';
import useDashboardModals from '@/hooks/useDashboardModals';
import { Body1, Body2 } from './Typography';
import Avatar from './Avatar';
import { OutlineButton } from './Buttons';
// import { OutlineButton, SmallButton } from '../Buttons';

type Guest = {
  name: string;
  id: number;
  email: string;
  date: string;
  status: string;
  role: string;
  inviteAccept: boolean;
  invitedBy?: string;
};

interface GuestListProps {
  guestData: Guest[];
}

export default function DisclosureItem({ guestData }: GuestListProps) {
  const { setModal } = useDashboardModals();
  return (
    <div className="w-full ">
      <div className="w-full rounded-b-2xl">
        {guestData.map((guest: any, index: number) => {
          const isLastElement = index === guestData.length - 1;
          return (
            <div
              key={Math.random()}
              className={`w-full ${isLastElement ? 'rounded-b-2xl overflow-hidden ' : ''
                }`}
            >
              <Disclosure key={guest.id}>
                {({ open }) => (
                  <div
                    className={`w-full flex flex-col justify-center ${open && 'bg-gray-100'
                      }`}
                  >
                    <Disclosure.Button className="flex h-[74px] justify-between w-full px-6 py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4">
                          <Avatar />
                          <div className="[&>p]:!font-normal">
                            <Body1 className="text-Black">
                              {guest.inviteAccept && guest.name}
                            </Body1>
                            <Body2 className="text-gray-400 ">
                              {guest.email}
                            </Body2>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex-col [&>p]:!font-normal [&>p]:!text-gray-400 items-end hidden lg:flex">
                            <Body1>
                              {guest.inviteAccept
                                ? 'Guest'
                                : 'Invited 2/29/2023'}
                            </Body1>
                            {guest.invitedBy && (
                              <Body2>Guest of {guest.invitedBy}</Body2>
                            )}
                          </span>
                          {open ? (
                            <div className="btn-small-icon">
                              <UpperArrow />
                            </div>
                          ) : (
                            <div className="btn-small-icon btn-small-icon-only">
                              <DownArrow className="fill-gray-300" />
                            </div>
                          )}
                        </div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full text-sm text-gray-500 bg-white rounded-b-2xl">
                      <div className="flex flex-col items-start justify-center w-full p-6 bg-gray-100 md:flex-row max-lg:gap-6 md:items-center md:justify-between ">
                        <div className="flex items-center gap-3 px-3 py-2 border border-gray-200 rounded-lg ">
                          <p className="text-gray-400">Family</p>
                          <OutlineButton
                            onClick={() => setModal('changeRole')}
                            className="[&>p]:!text-sm !py-1 !px-3 bg-white"
                            text="Change role"
                          />
                        </div>
                        <div>
                          <OutlineButton className='bg-white' onClick={() => setModal('removeGuest')} text="Remove this guest" />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <div
                className={`w-full h-px ${!isLastElement && 'bg-gray-200'}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
