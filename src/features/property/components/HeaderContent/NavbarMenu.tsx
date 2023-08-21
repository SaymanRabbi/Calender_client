import React from 'react';
import { useRouter } from 'next/navigation';

import DropDown from '@/components/Listbox';
import { Pause, Users } from '@/icons';
import { OutlineButton } from '@/components/Buttons';
import useDashboardModals from '@/hooks/useDashboardModals';


const dropdownTopItems = [
    {
        text: 'Guest List',
        href: `/dashboard/guests`,
        icon: <Users className="fill-gray-300" />,
    },
    {
        text: 'Property Settings',
        href: '/dashboard/settings',
        icon: undefined,
    },
];



type Props = {
    trigger: JSX.Element;
};

export default function NavbarMenu({ trigger }: Props) {
    const router = useRouter();

    const redirectCB = (href: string) => () => router.push(href);


    const { setModal } = useDashboardModals()

    return (
        <DropDown trigger={trigger} className="w-[228px] p-6 py-6 gap-3">
            <DropDown.Item value="Paused" className="flex md:hidden">

                <OutlineButton
                    icon={<Pause />}
                    text='Paused'
                    onClick={() => setModal('status')}
                    className="justify-center w-full"
                />

            </DropDown.Item>
            {dropdownTopItems.map((val) => (
                <DropDown.Item
                    key={val.text}
                    value={val.text}
                    className="flex md:hidden"
                >
                    <OutlineButton
                        icon={val.icon}
                        text={val.text}
                        onClick={redirectCB(val.href)}
                        className="justify-center w-full"
                    />
                </DropDown.Item>
            ))}
        </DropDown>
    );
}
