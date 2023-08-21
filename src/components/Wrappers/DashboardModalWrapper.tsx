import React, { PropsWithChildren } from 'react';

import type { ModalProps } from '@/types';

import { CloseIcon } from '@/icons';
import { Heading3 } from '../Typography';
import { IconButton } from '../Buttons';
import Modal from '../Modal';

interface Props extends ModalProps, PropsWithChildren {
  heading: string;
  actions: JSX.Element;
  preventClose?: boolean;
  className?: string;
}

export default function DashboardModalWrapper({
  heading,
  bindings,
  children,
  actions,
  preventClose,
  className,
}: Props) {
  return (
    <Modal
      preventClose={preventClose}
      bindings={bindings}
      className={`p-0 md:p-0 md:max-w-[640px] ${className}`}
    >
      <div className="flex items-center justify-between gap-4 p-6 bg-gray-100 rounded-t-2xl">
        <Heading3>{heading}</Heading3>
        <IconButton
          icon={<CloseIcon />}
          onClick={bindings.onClose}
          disabled={preventClose}
          className="flex-shrink-0"
        />
      </div>
      <div className="p-6">{children}</div>
      <div className="p-6 text-right bg-gray-100 rounded-b-2xl">{actions}</div>
    </Modal>
  );
}

DashboardModalWrapper.defaultProps = {
  className: '',
  preventClose: false,
};
