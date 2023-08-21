import React from 'react';

import { ModalProps, DashboardModalType } from '@/types';

import PropertyStatusModal from './PropertyStatusModal';
import GuestListSettingsModal from './GuestListModal/GuestListSettingsModal';
import changeRole from './ChangeRole';
import RemoveGuestModal from './RemoveGuestModal';
import AddPropertyModal from './AddPropertyModal';
import NewInviteModal from './NewInviteModal';
import InviteLink from './InviteLink';

interface Props extends ModalProps {
  modalType: DashboardModalType;
  setModal: (_type: DashboardModalType) => void;
}
export default function DashboardModals({
  modalType,
  setModal,
  bindings,
}: Props) {
  const modalMap = {
    status: PropertyStatusModal,
    guestList: GuestListSettingsModal,
    changeRole: changeRole,
    removeGuest: RemoveGuestModal,
    addProperty: AddPropertyModal,
    newInvite: NewInviteModal,
    inviteLink: InviteLink,
  };

  const Modal = modalMap[modalType];

  return <Modal setModal={setModal} bindings={bindings} />;
}
