import React, { useState } from 'react';

import { Disclosure } from '@headlessui/react';
import { ModalProps, DashboardModalType } from '@/types';
import { GradientButton } from '@/components/Buttons';
import { Body1, Heading4 } from '@/components/Typography';
import DashboardModalWrapper from '@/components/Wrappers/DashboardModalWrapper';
import Checkbox from '@/components/Checkbox';
import { DownArrow, UpperArrow } from '@/icons';
import Radio from '@/components/Radio';
import styles from '@/styles/components/Modals/GuestListSettingsModal.module.scss'
import Divider from '@/features/shared/components/Divider';

interface Props extends ModalProps {
  // eslint-disable-next-line react/no-unused-prop-types
  setModal: (_type: DashboardModalType) => void;
}
function GuestListSettingsModal({ bindings }: Props) {
  const [disabled] = useState(false);


  return (
    <DashboardModalWrapper
      className="!p-0"
      heading="Guest List Settings"
      bindings={bindings}
      preventClose={disabled}
      actions={<GradientButton text="Save Change" />}
    >
      <div className={styles.section}>
        <div>
          <Heading4>Managers</Heading4>
        </div>
        <div>
          <Checkbox label='Owner' name='owner' />
          <Body1 className="text-left">
            The person that set up the property. Payments go to this
            account if there are any. Owner stay scheduling costs are
            always set $0. Only the property owner can delete the
            property.
          </Body1>
        </div>
        <div>
          <Checkbox label='Manager' name="manager" />
          <Body1>
            Can edit calendar, property, and guest list settings. In
            addition to responding to guest stay or change requests.
          </Body1>
        </div>
        <Divider />

        <Heading4>Guest roles for your property</Heading4>

        {/* guest Disclosure */}
        <div className="w-full">
          <Disclosure>
            {({ open }) => (
              <div
                className={styles.section__disclosure}
              >
                <Disclosure.Button className={styles['section__disclosure--button']}>
                  <div className={styles['section__disclosure--container']}>
                    <div className="flex flex-col">
                      <Checkbox label='Guest' name="guest" />
                    </div>
                    <div className="flex items-center justify-between">
                      {open ? <UpperArrow /> : <DownArrow />}
                    </div>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col gap-6">
                  <Body1>Guest access. Can book or request stays.</Body1>
                  <div
                    className={styles['section__disclosure--Panel']}
                  >
                    <Heading4>Guest role details</Heading4>
                    <Heading4>New stays:</Heading4>
                    <div className="flex flex-col items-start self-stretch gap-1.5">
                      <Radio label='Instant scheduling.' id='dark' name='guest_stayy' value='instant_scheduling' />
                      <div className="pl-6">
                        <Checkbox label='No back to back stays. Stays by the same guest within 30 days require approval.' name='guest_no_back_to_back_stays' />

                      </div>
                      <Radio
                        id='individually_approved_guest'
                        name='guest_stayy'
                        value="individually_approved_guest"
                        label="Stay scheduling must be individually approved."
                      />
                    </div>
                    <Divider />
                    <Heading4>Canceling or changing stays:</Heading4>
                    <div className="flex flex-col items-start self-stretch gap-1.5">
                      <Radio
                        id='cancel_before_ten_days'
                        name='cancel_rule'
                        value="cancel_before_ten_days"
                        label="Guests can cancel their stay until 10 days before 
                              their arrival date."
                      />

                      <Radio
                        id='cancel_individually_approved'
                        name='cancel_rule'
                        value="cancel_individually_approved"
                        label="Canceling any stay must be individually approved."
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>

        <Divider />
        {/* family */}
        <div className="w-full">
          <Disclosure>
            {({ open }) => (
              <div
                className={styles.section__disclosure}
              >
                <Disclosure.Button className={styles['section__disclosure--button']}>
                  <div className={styles['section__disclosure--container']}>
                    <div className="flex flex-col">
                      <Checkbox
                        label='Family'
                        name="family"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      {open ? <UpperArrow /> : <DownArrow />}
                    </div>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col gap-6">
                  <Body1>
                    Just like guest access. Can book or request stays. Can
                    also have unique pricing separate from other roles.{' '}
                  </Body1>
                  <div
                    className={styles['section__disclosure--Panel']}
                  >
                    <Heading4>Family role details</Heading4>
                    <Heading4>New stays:</Heading4>
                    <div className="flex flex-col items-start self-stretch gap-1.5">
                      <Radio
                        id='Instant_scheduling_family'
                        name='schedule_family'
                        value='Instant_scheduling_family'
                        label='Instant scheduling.'
                      />
                      <div className="pl-6">
                        <Checkbox
                          label='No back to back stays. Stays by the same guest within 30 days require approval.'
                          name="no_back_to_back_stays"
                        />
                      </div>
                      <Radio
                        id='individually_approved_family'
                        name='schedule_family'
                        value='individually_approved_family'
                        label='Stay scheduling must be individually approved.'

                      />
                    </div>
                    <Divider />
                    <Heading4>Canceling or changing stays:</Heading4>
                    <div className="flex flex-col items-start self-stretch gap-1.5">
                      <Radio
                        id='cancel_stay_individually_approved'
                        name='cancel_stayy_family'
                        value="cancel_stay_individually_approved"
                        label="Family can cancel their stay until 10 days before 
                              their arrival date."
                      />
                      <Radio
                        id='cancel_stayy_individually_family'
                        name='cancel_stayy_family'
                        value="cancel_stayy_individually_family"
                        label="Canceling any stay must be individually approved."
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
        <Divider />

        {/* member */}
        <div className="w-full">
          <Disclosure>
            {({ open }) => (
              <div
                className={styles.section__disclosure}
              >
                <Disclosure.Button className={styles['section__disclosure--button']}>
                  <div className={styles['section__disclosure--container']}>
                    <div className="flex flex-col">
                      <Checkbox
                        label='Member'
                        name="member"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      {open ? <UpperArrow /> : <DownArrow />}
                    </div>
                  </div>
                </Disclosure.Button>
                <Divider />
                <Disclosure.Panel className='flex flex-col gap-6'>
                  {open && (
                    <Body1>
                      *Requires payments to be active. <br /> <br />
                      Paid membership access to your property, monthly
                      recurring payments or a one time price for the
                      duration of the members access.
                      <br /> <br />
                      Active members can schedule stays, and can invite
                      other guests if you choose to allow it. Guests
                      invited by members will have the role of “Guest” and
                      property access according to your settings for that
                      role.
                      <br /> <br />
                      Inactive members can view the property page and
                      renew their membership if allowed. Can not interact
                      with the calendar, schedule, or request stays while
                      inactive.
                    </Body1>
                  )}
                  <div
                    className={styles['section__disclosure--Panel']}
                  >
                    <Heading4>Member role details</Heading4>
                    <div className="flex flex-col items-start self-stretch">
                      <Checkbox
                        label='Members can invite guests. '
                        name="isMemberIntivetoGuest"
                      />
                      <Body1>
                        Member’s guests will lose access to the property
                        when the membership ends or is cancelled.
                      </Body1>
                    </div>
                    <Heading4>Member information:</Heading4>
                    {/* <MemberRoleBox /> */}
                    
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    </DashboardModalWrapper>
  );
}

export default GuestListSettingsModal;
