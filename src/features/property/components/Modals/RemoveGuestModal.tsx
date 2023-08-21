import React, { useState } from 'react';

import { ModalProps, DashboardModalType } from '@/types';
import { GradientButton } from '@/components/Buttons';
import DashboardModalWrapper from '@/components/Wrappers/DashboardModalWrapper';
import { Body1 } from '@/components/Typography';


interface Props extends ModalProps {
    // eslint-disable-next-line react/no-unused-prop-types
    setModal: (_type: DashboardModalType) => void;
}
function RemoveGuestModal({ bindings }: Props) {

    const [disabled] = useState(false);


    return (
        <DashboardModalWrapper
            className="!p-0"
            heading="Confirm guest removal"
            bindings={bindings}
            preventClose={disabled}
            actions={<GradientButton text="YES, REMOVE" />}
        >
            <Body1 className='text-gray-400'>This person will no longer have access to your property page.</Body1>
        </DashboardModalWrapper>
    );
}

export default RemoveGuestModal;
