import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import type { ModalProps, ResetPasswordForm } from '@/types';

import Modal from '@/components/Modal';
import InputField from '@/components/InputField';
import { Body1, Heading3 } from '@/components/Typography';
import { GradientButton } from '@/components/Buttons';
import formResolver from '@/libs/formResolver';
import { forgotPassFormSchema } from '@/validations';
import useAuth from '@/hooks/useAuth';

function ForgotPasswordModal({ bindings }: ModalProps) {
  const [disabled, setDisabled] = useState(false);
  const { forgotPassword } = useAuth();
  const {
    formState: { errors },
    reset,
    register,
    handleSubmit,
  } = useForm<ResetPasswordForm>({
    mode: 'onBlur',
    resolver: formResolver(forgotPassFormSchema),
  });

  const onSubmit = async (formData: ResetPasswordForm) => {
    setDisabled(true);
    try {
      await forgotPassword(formData.email);
      bindings.onClose();
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Modal onOpen={reset} preventClose={disabled} bindings={bindings}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center w-full text-center ">
            <Heading3>Reset your password.</Heading3>
            <Body1>We&apos;ll email you a link to reset your password.</Body1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <InputField
              type="email"
              placeholder="Email address"
              register={register('email')}
              error={errors.email}
              disabled={disabled}
            />
            <GradientButton
              type="submit"
              text="Get Reset Instructions"
              className="w-full"
            />
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default React.memo(ForgotPasswordModal);
