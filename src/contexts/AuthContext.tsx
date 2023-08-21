import React, {
  useState,
  createContext,
  PropsWithChildren,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import { Auth } from '@aws-amplify/auth';

import type {
  AuthContextInfo,
  AuthError,
  SignInResponse,
  UserAuth,
} from '@/types';

import amplifyConfig from '@/data/amplifyConfig';

Auth.configure(amplifyConfig);

export const AuthContext = createContext<AuthContextInfo>({
  isAuth: false,
  user: null,
  error: null,
  isAuthStatusKnown: false,
  signOut: () => new Promise(() => {}),
  signIn: () => new Promise(() => {}),
  signUp: () => new Promise(() => {}),
  forgotPassword: () => new Promise(() => {}),
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const isAuthStatusKnown = useRef(false);
  const [error, setError] = useState<AuthError>({ error: null });
  const [auth, setAuth] = useState<UserAuth>({
    isAuth: false,
    user: null,
  });

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((res: SignInResponse) =>
        setAuth({
          isAuth: true,
          user: {
            email: res.attributes.email,
            name: {
              first: res.attributes.given_name,
              last: res.attributes.family_name,
            },
            picture: res.attributes.picture,
          },
        })
      )
      .catch(() => setAuth({ isAuth: false, user: null }))
      .finally(() => {
        isAuthStatusKnown.current = true;
      });
  }, []);

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name: firstName,
          last_name: lastName,
        },
      });
    } catch (err) {
      setError({ error: 'Authentication failed' });
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const user: SignInResponse = await Auth.signIn(email, password);
      // await Auth.changePassword(user, '', 'g!JJ&q$9');
      setAuth({
        isAuth: true,
        user: {
          email: user.attributes.email,
          name: {
            first: user.attributes.given_name,
            last: user.attributes.family_name,
          },
          picture: user.attributes.picture,
        },
      });
    } catch (err) {
      setError({ error: 'Authentication failed' });
    }
  };

  const signOut = () =>
    Auth.signOut()
      .then(() => setAuth({ isAuth: false, user: null }))
      .catch(() =>
        setError({ error: 'Some error occurred while signing out' })
      );

  const forgotPassword = async (email: string) => {
    try {
      await Auth.forgotPassword(email);
    } catch (err) {
      setError({ error: 'Some error occurred while reseting password.' });
    }
  };

  const value = useMemo(
    () => ({
      ...auth,
      error: error.error,
      isAuthStatusKnown: isAuthStatusKnown.current,
      signIn,
      signOut,
      signUp,
      forgotPassword,
    }),
    [auth, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
