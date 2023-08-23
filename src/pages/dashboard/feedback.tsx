import React from 'react';

import { useForm, FieldValues } from 'react-hook-form';
import type { NextPageWithLayout } from '@/types';

import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import { Body1, Heading4 } from '@/components/Typography';
import { GradientButton } from '@/components/Buttons';
import DashboardNav from '@/features/shared/components/DashboardNav';
import Card from '@/components/Card';
import SidebarTitleCard from '@/features/shared/components/SidebarTitleCard';

const Feedback: NextPageWithLayout = function () {
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit = (data: object) => {
    // eslint-disable-next-line no-console
    // console.log(data);
  };
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard" />
      <DashboardWrapper.Content>
        <DashboardWrapper.SideBar>
          <SidebarTitleCard title="Help & Feedback" />
        </DashboardWrapper.SideBar>
        <DashboardWrapper.MainContent>
          <Card>
            <div className="flex flex-col items-start self-stretch gap-10">
              <div className="flex flex-col gap-1.5 items-start self-stretch">
                <Heading4>Stayy Support</Heading4>
                <div className="text-gray-400">
                  <Body1 className="text-gray-400">
                    Thank you for using Stayy!
                  </Body1>
                  <br />
                  <br />
                  <ul className="ml-5 list-disc">
                    <li>
                      How can I help you get the most use from your place?
                    </li>
                    <li>What’s not working quite right?</li>
                    <li>What features would you like to see?</li>
                  </ul>
                </div>
              </div>

              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  {...register('feedback')}
                  className="text-input h-[200px] mt-1
        border border-Gray-light rounded-[8px]
        w-full first-letter:px-4 py-2.5
        appearance-none  focus:ring-0 ring-0 focus:border-2 focus:border-[#8999b0] bg-Gray-background focus:outline-none"
                />
                <div className="flex items-center self-stretch justify-end">
                  <GradientButton type="submit" text="Send" />
                </div>
              </form>
            </div>
          </Card>
        </DashboardWrapper.MainContent>
      </DashboardWrapper.Content>

      {/* <div className="flex lg:w-[736px] xl:w-full mx-auto flex-col max-lg:px-3 gap-6">
          <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard" />
          <div className="flex items-start gap-10 max-xl:flex-col">
            <SidebarTitleCard title="Help & Feedback" />
            <div className="w-full xl:w-[736px] gap-6 flex flex-col items-start">
              <Card>
                <div className="flex flex-col items-start self-stretch gap-10">
                  <div className="flex flex-col gap-1.5 items-start self-stretch">
                    <Heading4>Stayy Support</Heading4>
                    <div>
                      <Body1>Thank you for using Stayy!</Body1>
                      <br />
                      <br />
                      <ul className="ml-5 list-disc stay-text">
                        <li>
                          How can I help you get the most use from your place?
                        </li>
                        <li>What’s not working quite right?</li>
                        <li>What features would you like to see?</li>
                      </ul>
                    </div>
                  </div>
                  <textarea
                    className="text-input h-[200px] mt-1
        border border-Gray-light rounded-[8px]
        w-full first-letter:px-4 py-2.5
        appearance-none  focus:ring-0 ring-0 focus:border-2 focus:border-[#8999b0] bg-Gray-background focus:outline-none"
                  />
                  <div className="flex items-center self-stretch justify-end">
                    <GradientButton text="Send" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div> */}
    </DashboardWrapper>
    // </div>
  );
};

Feedback.layout = 'dashboard';
export default Feedback;
