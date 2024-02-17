import Main from '../components/base/Main';
import Modal from '../components/base/Modal';
import GoogleIcon from '../assets/google.svg';
import { useActionForm } from '@gadgetinc/react';
import { api } from '../api';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo-notext.png';

export default function () {
  const {
    register,
    submit,
    formState: { errors, isSubmitting },
  } = useActionForm(api.user.signIn);
  const { search } = useLocation();

  return (
    <Main>
      <Modal close={() => {}}>
        {' '}
        {/* we don't need to close this modal, we just redirect the user when they sign in*/}
        <img src={logoUrl} className='h-24 mx-auto pb-2' />
        <h1 className='flex justify-center items-center text-2xl font-medium p-1'>
          Welcome to QuickQuack
        </h1>
        <h2 className='flex justify-center items-center text-lg text-neutral-400 font-light pb-20'>
          Sign in to start chatting with other ducks.
        </h2>
        <form
          onSubmit={submit}
          className='flex w-full h-full justify-center items-center'
        >
          <a
            className='flex gap-4 bg-neutral-100 px-12 py-6 rounded-2xl border-b-4 border-t-[1px] border-l-[1px] border-r-[1px] border-neutral-100 hover:border-neutral-200 hover:shadow-xs'
            href={`/auth/google/start${search}`}
          >
            <img src={GoogleIcon} width={22} height={22} />
            <span>Continue with Google</span>
          </a>
        </form>
      </Modal>
    </Main>
  );
}
