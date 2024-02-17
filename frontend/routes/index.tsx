import Main from '../components/base/Main';
import Modal, { ModalButton, ModalH1, ModalH2 } from '../components/base/Modal';
import GoogleIcon from '../assets/google.svg';
import { useActionForm } from '@gadgetinc/react';
import { api } from '../api';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo-notext.png';

export default function () {
  const { register, submit } = useActionForm(api.user.signIn);
  const { search } = useLocation();

  return (
    <Main>
      <Modal>
        {/* we don't need to close this modal, we just redirect the user when they sign in*/}
        <img src={logoUrl} className='h-24 mx-auto pb-2' />
        <ModalH1>Welcome to QuickQuack</ModalH1>
        <ModalH2>Sign in to start chatting with other ducks.</ModalH2>
        <form
          action={`/auth/google/start${search}`}
          className='flex w-full h-full justify-center items-center'
        >
          <ModalButton type='submit'>
            <img src={GoogleIcon} width={22} height={22} />
            <span>Continue with Google</span>
          </ModalButton>
        </form>
      </Modal>
    </Main>
  );
}
