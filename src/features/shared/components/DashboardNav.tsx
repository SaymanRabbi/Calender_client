import React, { PropsWithChildren } from 'react';

import { Up } from '@/icons';
import { LinkButton } from '@/components/Buttons';
import DashboardModals from '@/features/property/components/Modals';
import useDashboardModals from '@/hooks/useDashboardModals';

type Props = PropsWithChildren<{
  backButtonText: string;
  backHref: string;
}>;

export default function DashboardNav({
  backHref,
  children,
  backButtonText,
}: Props) {
  const { bindings, modalType, setModal } = useDashboardModals();
  return (
    <div className="flex items-center justify-between w-full px-3 mt-6 md:px-0">
      <div className="flex items-center">
        <Up className="-rotate-90 fill-gray-300" />
        <LinkButton text={backButtonText} href={backHref} />
      </div>
      {children}
      <DashboardModals
        bindings={bindings}
        modalType={modalType}
        setModal={setModal}
      />
    </div>
  );
}

