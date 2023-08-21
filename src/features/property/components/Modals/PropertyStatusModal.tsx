import React, { useState } from 'react';

import { ModalProps } from '@/types';

import DashboardModalWrapper from '@/components/Wrappers/DashboardModalWrapper';
// import InputField from '@/components/InputField';
import { GradientButton, OutlineButton } from '@/components/Buttons';
import { Body2 } from '@/components/Typography';

import { Go, Hide, Pause } from '@/icons';

interface Props extends ModalProps {}
export default function PropertyStatusModal({ bindings }: Props) {
  const [disabled] = useState(false);

  return (
    <DashboardModalWrapper
      className="md:max-w-[736px] !p-0"
      heading="Property visibility"
      bindings={bindings}
      preventClose={disabled}
      actions={<GradientButton text="Save Change" />}
    >
      <div className="flex items-center self-stretch gap-6 px-6">
        <div className="flex flex-col flex-1 gap-6 text-Gray-dark">
          <div className="flex gap-6">
            <div className="flex max-md:flex-col max-md:items-center max-md:gap-6 w-full  px-[14px] justify-between rounded-[40px] py-[12px]">
              <div className="w-[160px] flex flex-col gap-[6px]">
                <GradientButton
                  className="flex justify-center gap-3"
                  text="Paused"
                  icon={<Go className="fill-white" />}
                />
                <Body2 className="text-gray-400 text-center">
                  Everything is ready for guests to stay!
                </Body2>
              </div>
              <div className="w-[160px] flex flex-col gap-[6px]">
                <OutlineButton
                  className="flex justify-center gap-3"
                  text="Paused"
                  icon={<Pause />}
                />
                <Body2 className="text-gray-400 text-center">
                  No new scheduling. Property is still visible to your guests.
                </Body2>
              </div>
              <div className="w-[160px] flex flex-col gap-[6px]">
                <OutlineButton
                  className="flex justify-center gap-3"
                  text="Inactive"
                  icon={<Hide />}
                />
                <Body2 className="text-gray-400 text-center">
                  Property is hidden from all guests.
                </Body2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardModalWrapper>
  );
}
