import React, {
  PropsWithChildren,
  useState,
  createContext,
  useMemo,
  useCallback,
} from 'react';

import type { DashboardModalType, ModalProps } from '@/types';

import useModal from '@/hooks/useModal';

interface AuthModalData extends ModalProps {
  modalType: DashboardModalType;
  // eslint-disable-next-line no-unused-vars
  setModal: (type: DashboardModalType) => void;
}

export const DashboardModalContext = createContext<AuthModalData>({
  bindings: {
    open: false,
    onClose: () => {},
  },
  modalType: 'status',
  setModal: () => {},
});

export default function DashboardModalProvider({
  children,
}: PropsWithChildren) {
  const [modalType, setModalType] = useState<DashboardModalType>('status');
  const { bindings, openModal } = useModal();

  const setModal = useCallback(
    (type: DashboardModalType) => {
      setModalType(type);
      openModal();
    },
    [openModal]
  );

  const value = useMemo(
    () => ({
      modalType,
      bindings,
      setModal,
    }),
    [modalType, bindings, setModal]
  );

  return (
    <DashboardModalContext.Provider value={value}>
      {children}
    </DashboardModalContext.Provider>
  );
}
