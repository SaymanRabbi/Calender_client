import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { AuthModalType, JoinForm, ModalProps } from '@/types';

import Modal from '@/components/Modal';
import InputField from '@/components/InputField';
import { GradientButton } from '@/components/Buttons';
import { Body1, ButtonSmall, Heading3 } from '@/components/Typography';
import formResolver from '@/libs/formResolver';
import { signupFormSchema } from '@/validations';
import useAuth from '@/hooks/useAuth';

interface Props extends ModalProps {
  setModal: (_type: AuthModalType) => void;
}
export default function JoinModal({ bindings, setModal }: Props) {
  const [disabled, setDisabled] = useState(false);
  const { signUp } = useAuth();
  const {
    formState: { errors },
    reset,
    register,
    handleSubmit,
  } = useForm<JoinForm>({
    mode: 'onBlur',
    resolver: formResolver(signupFormSchema),
  });

  const onSubmit = async (formData: JoinForm) => {
    setDisabled(true);
    try {
      await signUp(
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName
      );
      // bindings.onClose();
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Modal onOpen={reset} bindings={bindings} preventClose={disabled}>
      <Image
        quality={100}
        src="/assets/image/desktop/welcome-to-stayy.webp"
        alt="Welcome to stayy"
        height={180}
        width={480}
        priority
        className="mb-6"
      />
      <div className="flex flex-col items-center w-full mb-10">
        <Heading3>Welcome to Stayy!</Heading3>
        <Body1 className="text-gray-400">Sign up and stay with us.</Body1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 md:gap-6 md:flex-row">
            <InputField
              type="text"
              placeholder="First name"
              register={register('firstName')}
              error={errors.firstName}
              disabled={disabled}
            />
            <InputField
              type="text"
              placeholder="Last name"
              register={register('lastName')}
              error={errors.lastName}
              disabled={disabled}
            />
          </div>
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
        <ButtonSmall className="font-normal text-gray-400">
          By joining Stayy I accept the{' '}
          <Link href="/terms" onClick={bindings.onClose}>
            <span className="hyphens-manual underline-text">
              Terms of Service
            </span>
          </Link>
          . For more information about Stayy&apos;s privacy practices, see the{' '}
          <Link href="/privacy-policy" onClick={bindings.onClose}>
            <span className="underline-text"> Stayy Privacy Statement</span>
          </Link>
          .
        </ButtonSmall>
        <GradientButton
          text="JOIN STAYY"
          type="submit"
          className="w-full mb-6 md:mb-10"
          disabled={disabled}
        />
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <Body1 className="text-gray-400">Already have an account?</Body1>
          <button
            onClick={() => setModal('login')}
            type="button"
            disabled={disabled}
            className="[&>p]:disabled:text-gray-400 [&>p]:disabled:no-underline"
          >
            <Body1 className="text-purple-200 underline-text">Login</Body1>
          </button>
        </div>
      </form>
    </Modal>
  );
}
