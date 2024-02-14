import { SignedIn } from '@gadgetinc/react';
import React, { ComponentProps, ReactNode } from 'react';
import { FunctionComponent } from 'react';
import Logo from './base/Logo';
import { useUser } from '@gadgetinc/react';
import { api } from '../api';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const user = useUser(api);

  return (
    <nav className='flex items-center justify-between h-[64px] pr-5 '>
      <div className='flex-1'>
        <Logo />
      </div>
      <div className='flex items-center justify-center gap-5'>
        <SignedIn>
          <HeaderItem
            onClick={async () => {
              await api.user.signOut(user.id);
            }}
          >
            Sign out
          </HeaderItem>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;

interface HeaderItemProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const HeaderItem: FunctionComponent<HeaderItemProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className='decoration-transparent hover:decoration-lightning-yellow-500 hover:underline underline-offset-8 transition ease-in-out duration-300 hover:-translate-y-1 py-3 hover:cursor-pointer'
    >
      {children}
    </div>
  );
};
