
import type { NextPageWithLayout } from '@/types';

import Avatar from '@/components/Avatar';
import ImageUpload from '@/components/ImageUpload';
import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import DashboardNav from '@/features/shared/components/DashboardNav';
import SidebarTitleCard from '@/features/shared/components/SidebarTitleCard';
import SettingsCard from '@/features/stays/components/SettingsCard';
import AccountInformation from '@/features/userSettings/components/AccountInformation';
import EmailNotification from '@/features/userSettings/components/EmailNotification';

const UserSettings: NextPageWithLayout = function () {
  const handleImageSelect = (file: File) => {
    // eslint-disable-next-line no-console

  };
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard" />
      <DashboardWrapper.Content>
        <DashboardWrapper.SideBar>
          <SidebarTitleCard title="Account settings" />
        </DashboardWrapper.SideBar>
        <DashboardWrapper.MainContent>
          <SettingsCard
            title="Profile Photo"
            info="Stayy is based on trust. Adding a real profile photo helps your hosts or guests see who’s staying and when at a glance."
          >
            <div className="flex items-center gap-6">
              <Avatar />
              <ImageUpload onImageSelect={handleImageSelect} text='Choose image' />
            </div>
          </SettingsCard>
          <AccountInformation />
          <EmailNotification />
        </DashboardWrapper.MainContent>
      </DashboardWrapper.Content>
    </DashboardWrapper>
  );
};

UserSettings.layout = 'dashboard';
export default UserSettings;
