import React, { useState } from 'react';

import { ModalProps, DashboardModalType } from '@/types';
import { GradientButton } from '@/components/Buttons';
import DashboardModalWrapper from '@/components/Wrappers/DashboardModalWrapper';
import Radio from '@/components/Radio';


interface Props extends ModalProps {
    // eslint-disable-next-line react/no-unused-prop-types
    setModal: (_type: DashboardModalType) => void;
}
function changeRole({ bindings }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [disabled] = useState(false);


    return (
        <DashboardModalWrapper
            className="!p-0"
            heading="Change guest role"
            bindings={bindings}
            preventClose={disabled}
            actions={<GradientButton text="Save Change" />}
        >
            <div>
                <Radio
                    id='manager'
                    name='role'
                    value="manager"
                    label="Manager"
                />
                <Radio
                    id='guest'
                    name='role'
                    value="guest"
                    label="Guest"
                />
                <Radio
                    id='family'
                    name='role'
                    value="family"
                    label="Family"
                />
                <Radio
                    id='member'
                    name='role'
                    value="member"
                    label="Member"
                />
            </div>
        </DashboardModalWrapper>
    );
}

export default changeRole;
