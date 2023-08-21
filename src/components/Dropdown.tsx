import React, { Fragment, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react'
// import styles from '@/styles/components/Dropdown/Dropdown.module.scss'
import { DownArrow } from '@/icons';
import { Body1 } from './Typography';



interface DropdownProps {
    // eslint-disable-next-line react/no-unused-prop-types, no-unused-vars, react/require-default-props
    onItemSelect?: (selectedItem: string) => void;
    dropdownItems: {
        name: string;
    }[];
}



export default function Dropdown({ dropdownItems }: DropdownProps) {

    const [selectedValue, setSelectedValue] = useState(dropdownItems[0])

    return (
        <div className="w-full">
            <Listbox value={selectedValue} onChange={setSelectedValue}>
                <div className="relative mt-1 ">
                    <Listbox.Button className="relative w-full h-12 py-2 pl-3 pr-10 text-left bg-gray-100 border border-gray-200 rounded-lg cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <Body1 className="block truncate">{selectedValue.name}</Body1>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <DownArrow />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {dropdownItems.map((item) => (
                                <Listbox.Option
                                    key={Math.random()}
                                    className={({ active }) =>
                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-semibold' : 'font-normal'
                                                    }`}
                                            >
                                                <Body1>{item.name}</Body1>

                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}

                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}


