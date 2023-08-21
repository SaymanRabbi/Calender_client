import React, { Fragment, PropsWithChildren, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import type { ModalProps } from '@/types';

import useFonts from '@/hooks/useFonts';

interface ExtraProps extends ModalProps {
  preventClose?: boolean;
  className?: string;
  onOpen?: VoidFunction;
  // eslint-disable-next-line no-unused-vars
  onKeyDownCapture?: (key: string) => void;
}
type Props = PropsWithChildren<ExtraProps>;

export default function Modal({
  children,
  className,
  preventClose,
  bindings: { open, onClose },
  onOpen,
  onKeyDownCapture,
}: Props) {
  const { inter } = useFonts();

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (onOpen) {
      timer = setTimeout(() => {
        onOpen();
      }, 200);
    }
    return () => (timer ? clearTimeout(timer) : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={undefined}
        className={`${inter} relative z-60`}
        onClose={preventClose ? () => {} : onClose}
        onKeyDownCapture={
          onKeyDownCapture ? (e) => onKeyDownCapture(e.key) : undefined
        }
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full grid place-items-center">
            <Transition.Child
              as={Fragment}
              leave="ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`my-6 animate-pop-in relative w-full max-w-xs md:max-w-[560px] rounded-xl md:rounded-2xl bg-white p-6 md:p-10 shadow-xl ${className}`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

Modal.defaultProps = {
  onOpen: undefined,
  className: '',
  preventClose: false,
  onKeyDownCapture: undefined,
};
