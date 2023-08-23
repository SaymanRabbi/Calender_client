import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';

import InputField from '@/components/InputField';
import { GradientButton } from '@/components/Buttons';
import { Body1 } from '@/components/Typography';
import SettingsCard from '@/features/stays/components/SettingsCard';

export default function AccountInformation() {
    const { register, handleSubmit } = useForm<FieldValues>();

    const onSubmit = (data: object) => {
        // eslint-disable-next-line no-console
    
    };
    return (
        <SettingsCard
            title="Account Information"
            action={
                <GradientButton type='submit' text='Save Changes' />
            }
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='w-full'>
                <Body1 className='mb-1.5 text-gray-400' >Name</Body1>
                <div className='flex flex-col w-full gap-6 md:flex-row'>
                    <div className='flex-1'>
                        <InputField
                            type="text"
                            placeholder="First name"
                            register={register('firstName')}
                            className='w-1/2'
                        />
                    </div>
                    <div className='flex-1'>
                        <InputField
                            type="text"
                            placeholder="Last name"
                            register={register('lastName')}
                        />
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <Body1 className='mb-1.5 text-gray-400'>Email</Body1>
                <InputField
                    type="email"
                    placeholder="Email address"
                    register={register('email')}
                />
            </div>

        </SettingsCard>
    );
}
