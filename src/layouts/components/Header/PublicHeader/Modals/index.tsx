import React from 'react';

import { ModalProps, AuthModalType } from '@/types';

import JoinModal from './JoinModal';
import LoginModal from './LoginModal';
import ForgotPasswordModal from './ForgotPasswordModal';

interface Props extends ModalProps {
  modalType: AuthModalType;
  setModal: (_type: AuthModalType) => void;
}
export default function HeaderModals({ modalType, setModal, bindings }: Props) {
  const modalMap = {
    join: JoinModal,
    login: LoginModal,
    forgot: ForgotPasswordModal,
  };

  const Modal = modalMap[modalType];

  return <Modal setModal={setModal} bindings={bindings} />;
}
