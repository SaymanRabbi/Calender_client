import { useState } from 'react';

export default function useModal() {
  const [open, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return {
    bindings: { open, onClose },
    openModal,
  };
}
