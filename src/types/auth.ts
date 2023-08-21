/* eslint-disable no-unused-vars */
import { ModalProps } from './common';
import { Nullable } from './generics';

export type SignInResponse = {
  attributes: {
    given_name: string;
    family_name: string;
    email: string;
    email_verified: boolean;
    sub: string;
    picture?: string;
  };
};

export type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture?: string;
};

interface NotAuthenticated {
  isAuth: false;
  user: null;
}

export interface Authenticated {
  isAuth: true;
  user: User;
}

export interface AuthCBs {
  signOut: () => Promise<unknown>;
  signIn: (email: string, password: string) => Promise<unknown>;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<unknown>;
  forgotPassword: (email: string) => Promise<unknown>;
}

export type UserAuth = Authenticated | NotAuthenticated;

export type AuthError = {
  error: Nullable<string>;
};

export type AuthLoading = {
  isAuthStatusKnown: boolean;
};

export type AuthModalType = 'join' | 'login' | 'forgot';
export type DashboardModalType = 'status' | 'guestList' | 'changeRole' | 'removeGuest' | 'addProperty' | 'newInvite' | 'inviteLink';

export type AuthContextInfo = UserAuth & AuthError & AuthCBs & AuthLoading;

export type AuthModalProps = {
  modalType: AuthModalType;
  setModal: (type: AuthModalType) => void;
};

export type AuthModalCB = {
  openModalCB: (modalType: AuthModalType) => void;
};

export interface ResetPasswordForm {
  email: string;
}
export interface LoginForm extends ResetPasswordForm {
  password: string;
}

export interface JoinForm extends LoginForm {
  firstName: string;
  lastName: string;
}
