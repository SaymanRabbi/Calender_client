import { usePathname, useRouter } from 'next/navigation';

import DropDown from '@/components/Listbox';
import ListItem from '@/components/Listbox/ListItem';
import { Pause, Users } from '@/icons';

type Props = {
    trigger: JSX.Element;
};

export default function PropertyMenu({ trigger }: Props) {
    const router = useRouter();
    const path = usePathname();

    const redirectCB = (href: string) => () => router.push(href);

    const dropdownTopItems = [
        {
            text: 'Paused',
            href: '/dashboard/stays',
            desktopVisible: false,
            icon: <Pause />
        },
        {
            text: 'Guest List',
            href: `/dashboard/guests`,
            desktopVisible: true,
            icon: <Users />
        },
        {
            text: 'Property Settings',
            href: '/dashboard/settings',
            desktopVisible: false,
            icon: true

        },
    ];

    return (
        <DropDown trigger={trigger} className="w-[228px]">
            {dropdownTopItems.map((val) => (
                <DropDown.Item
                    key={val.text}
                    value={val.text}
                    className={`mx-auto ${val.desktopVisible ? '' : 'flex md:hidden'}`}
                >
                    <ListItem
                        icon={val.icon}
                        text={val.text}
                        onClick={redirectCB(val.href)}
                        selected={path === val.href}

                    />
                </DropDown.Item>
            ))}
        </DropDown>
    );
}
