import React, { PropsWithChildren } from 'react';

interface WrapperElementProps extends PropsWithChildren {
  className?: string;
}

interface WrapperProps extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
}

function DashboardWrapper({
  children,
  className,
  containerClassName,
}: WrapperProps) {
  return (
    <div className={`px-3 bg-gray-100 min-h-[calc(100vh-486px)] ${className}`}>
      <div
        className={`${containerClassName} max-w-full mx-auto lg:max-w-dashboard-wrapper`}
      >
        {children}
      </div>
    </div>
  );
}

function DashboardContentWrapper({ children, className }: WrapperElementProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-6 lg:gap-10 mt-6 ${className}`}
    >
      {children}
    </div>
  );
}

function DashboardSideBar({ children, className }: WrapperElementProps) {
  return (
    <div
      className={`w-full flex flex-col gap-6 max-w-full md:max-w-[280px] lg:max-w-dashboard-wrapper-sidebar ${className}`}
    >
      {children}
    </div>
  );
}

function DashboardMainContent({ children, className }: WrapperElementProps) {
  return (
    <div
      className={`w-full flex flex-col gap-6 max-w-full md:max-w-dashboard-wrapper-maincontent ${className}`}
    >
      {children}
    </div>
  );
}

DashboardWrapper.defaultProps = {
  className: '',
  containerClassName: '',
};

DashboardSideBar.defaultProps = {
  className: '',
};

DashboardMainContent.defaultProps = {
  className: '',
};

DashboardContentWrapper.defaultProps = {
  className: '',
};

DashboardWrapper.SideBar = DashboardSideBar;
DashboardWrapper.MainContent = DashboardMainContent;
DashboardWrapper.Content = DashboardContentWrapper;
export default DashboardWrapper;
