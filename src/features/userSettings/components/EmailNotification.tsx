import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';

import { OutlineButton } from '@/components/Buttons';
import { Heading4 } from '@/components/Typography';
import SettingsCard from '@/features/stays/components/SettingsCard';
import Checkbox from '@/components/Checkbox';

export default function EmailNotification() {
    const { register, handleSubmit } = useForm<FieldValues>();

    const onSubmit = (data: object) => {
        // eslint-disable-next-line no-console
     
    };
    return (
        <SettingsCard
            title="Email Notifications"
            info="Some transactional notifications may also be sent depending on your usage of Stayy for payments."
            action={
                <OutlineButton type='submit' text='Save Changes' />
            }
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* <Divider /> */}
            <div className="flex flex-col items-start self-stretch gap-4">
                <Heading4>Stayy information:</Heading4>
                <Checkbox label='Stayy helpful tips and new features.' name='helpful_tips' register={register('helpful_tips')} />
            </div>
            {/* <Divider /> */}
            <div className="flex flex-col items-start self-stretch gap-4">
                <Heading4>Guest information:</Heading4>
                <div className="flex flex-col items-start">
                    <Checkbox label='Stay request approved' name='stay_request' register={register('stay_request')} />
                    <Checkbox label='Stay canceled / changed' name='guest_stay_change_cancel' register={register('guest_stay_change_cancel')} />
                    <Checkbox label='Stay reminder' name='stay_reminder' register={register('stay_reminder')} />
                    <Checkbox label='New property invite' name='new_property_invite' register={register('new_property_invite')} />
                </div>
            </div>
            {/* <Divider /> */}
            <div className="flex flex-col items-start self-stretch gap-4">
                <Heading4>Owner / Manager information:</Heading4>
                <div className="flex flex-col items-start">
                    <Checkbox label='Invite accepted' name='invite_accepted' register={register('invite_accepted')} />
                    <Checkbox label='New stay request' name='new_stay_request' register={register('new_stay_request')} />
                    <Checkbox label='New stay scheduled' name='new_stay_scheduled' register={register('new_stay_scheduled')} />
                    <Checkbox label='Stay canceled / changed' name='owner_stay_change_cancel' register={register('owner_stay_change_cancel')} />
                </div>
            </div>
        </SettingsCard>
    );
}
