import React, {
  PropsWithChildren,
  useState,
  createContext,
  useMemo,
  useCallback,
} from 'react';

import type { AuthModalType, ModalProps } from '@/types';

import useModal from '@/hooks/useModal';

interface AuthModalData extends ModalProps {
  modalType: AuthModalType;
  // eslint-disable-next-line no-unused-vars
  setModal: (type: AuthModalType) => void;
}

export const AuthModalContext = createContext<AuthModalData>({
  bindings: {
    open: false,
    onClose: () => { },
  },
  modalType: 'login',
  setModal: () => { },
});

export default function AuthModalProvider({ children }: PropsWithChildren) {
  const [modalType, setModalType] = useState<AuthModalType>('join');
  const { bindings, openModal } = useModal();

  const setModal = useCallback(
    (type: AuthModalType) => {
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
    <AuthModalContext.Provider value={value}>
      {children}
    </AuthModalContext.Provider>
  );
}
