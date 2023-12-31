import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { ModalProps, DashboardModalType } from '@/types';
import { GradientButton } from '@/components/Buttons';
import DashboardModalWrapper from '@/components/Wrappers/DashboardModalWrapper';
import InputField from '@/components/InputField';
import Dropdown from '@/components/Dropdown';


interface Props extends ModalProps {
    // eslint-disable-next-line react/no-unused-prop-types
    setModal: (_type: DashboardModalType) => void;
}


const role = [
    { name: 'Guest' },
    { name: 'Family' },
    { name: 'Member' },
]
function NewInviteModal({ bindings }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [disabled] = useState(false);
    const { handleSubmit } = useForm<FieldValues>();


    const onSubmit = () => {
        // console.log('guest list page');
    };
    return (
        <DashboardModalWrapper
            className="!p-0"
            heading="Property visibility"
            bindings={bindings}
            preventClose={disabled}
            actions={<GradientButton text="Save Change" />}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                <div className="flex flex-col gap-6 ">
                    <div className="w-full flex flex-col gap-2.5">
                        <InputField
                            id="email"
                            // register={register}
                            type="email"
                            placeholder="Email Address"
                        />
                        <Dropdown dropdownItems={role} />
                    </div>
                </div>
            </form>
        </DashboardModalWrapper>
    );
}

export default NewInviteModal;
