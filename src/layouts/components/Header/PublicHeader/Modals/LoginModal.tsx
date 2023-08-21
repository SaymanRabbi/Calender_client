import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { AuthModalType, LoginForm, ModalProps } from '@/types';

import useAuth from '@/hooks/useAuth';
import Modal from '@/components/Modal';
import formResolver from '@/libs/formResolver';
import { loginFormSchema } from '@/validations';
import InputField from '@/components/InputField';
import { GradientButton } from '@/components/Buttons';
import { Body1, Body2, Heading3 } from '@/components/Typography';

interface Props extends ModalProps {
  setModal: (_type: AuthModalType) => void;
}
function LoginModal({ bindings, setModal }: Props) {
  const [disabled, setDisabled] = useState(false);
  const {
    formState: { errors },
    reset,
    register,
    handleSubmit,
  } = useForm<LoginForm>({
    mode: 'onBlur',
    resolver: formResolver(loginFormSchema),
  });
  const { signIn } = useAuth();

  const onSubmit = async (formData: LoginForm) => {
    setDisabled(true);
    try {
      await signIn(formData.email, formData.password);
      bindings.onClose();
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Modal onOpen={reset} bindings={bindings} preventClose={disabled}>
      <Image
        quality={100}
        src="/assets/image/desktop/welcome-back.webp"
        alt="welcome back"
        height={180}
        width={480}
        priority
        className="mb-6"
      />
      <Heading3 className="mb-10 text-center">Welcome home.</Heading3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <InputField
            type="email"
            placeholder="Email address"
            register={register('email')}
            error={errors.email}
            disabled={disabled}
          />
          <InputField
            type="password"
            placeholder="Password"
            register={register('password')}
            error={errors.password}
            disabled={disabled}
          />
        </div>
        <button
          type="button"
          disabled={disabled}
          onClick={() => setModal('forgot')}
          className="block w-max mb-6 ml-auto disabled:cursor-not-allowed [&>p]:disabled:text-gray-400 [&>p]:disabled:no-underline"
        >
          <Body2 className="text-gray-400 underline">
            Forgot your password?
          </Body2>
        </button>
        <GradientButton
          type="submit"
          text="SIGN IN"
          className="w-full mb-6 md:mb-10"
          disabled={disabled}
        />
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <Body1 className="text-gray-400">Don’t have an account?</Body1>
          <button
            type="button"
            onClick={() => setModal('join')}
            disabled={disabled}
            className="disabled:cursor-not-allowed [&>p]:disabled:text-gray-400 [&>p]:disabled:no-underline"
          >
            <Body1 className="text-purple-200 underline">JOIN STAYY</Body1>
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default LoginModal;
