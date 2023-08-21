import React, { Fragment, PropsWithChildren } from 'react';
import { Listbox, Transition } from '@headlessui/react';

interface Props extends PropsWithChildren {
  trigger: JSX.Element;
  className?: string;
}

export default function DropDown({ trigger, className, children }: Props) {
  return (
    <Listbox
      as="div"
      className="relative text-left focus:outline-none focus:ring-0"
    >
      <Listbox.Button>{trigger}</Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="absolute focus:outline-none focus:ring-0 right-0 w-[228px] flex flex-col items-end mt-2 z-30 origin-top-right shadow-card">
          <div className="bg-transparent inline-block pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 8L10.591 0.653454C9.71231 -0.217818 8.28769 -0.217818 7.40901 0.653454L0 8H18Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className={`bg-white py-3 flex flex-col gap-1 rounded-xl ${className}`}
          >
            {children}
          </div>
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

DropDown.Item = Listbox.Option;

DropDown.defaultProps = {
  className: '',
};
