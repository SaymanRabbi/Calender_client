import React, { useState } from 'react';

import { ModalProps, DashboardModalType } from '@/types';
import { GradientButton, OutlineButton } from '@/components/Buttons';
import DashboardModalWrapper from '@/components/Wrappers/DashboardModalWrapper';
import { Body1 } from '@/components/Typography';
import SidebarInfoCard from '../SidebarInfoCard';


interface Props extends ModalProps {
    // eslint-disable-next-line react/no-unused-prop-types
    setModal: (_type: DashboardModalType) => void;
}


function InviteLink({ bindings }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [disabled] = useState(false);

    return (
        <DashboardModalWrapper
            className="!p-0"
            heading="Property visibility"
            bindings={bindings}
            preventClose={disabled}
            actions={<GradientButton text="Save Change" />}
        >
            <SidebarInfoCard
                title="Invite link"
                gradient
                className="hidden md:block "
                action={
                    <OutlineButton
                        className="[&>p]:!text-sm !py-1 !px-3"
                        text="Create Link"
                    />
                }
            >
                <div className="px-6 pb-6 flex flex-col gap-2.5">
                    <Body1 className="text-gray-400">
                        Create a unique link to easily share your property with
                        friends and family. Anyone that clicks through will be given
                        the option to request access to your property.
                    </Body1>
                </div>
            </SidebarInfoCard>
        </DashboardModalWrapper>
    );
}

export default InviteLink;
