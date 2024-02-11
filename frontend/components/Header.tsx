import { SignedOut } from '@gadgetinc/react';
import React, { ComponentProps, ReactNode } from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Logo from './base/Logo';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <nav className='flex items-center justify-between h-[64px] px-5 '>
      <Logo />
      <div className='flex items-center justify-center gap-5'>
        <SignedOut>
          <Link to='/sign-in'>
            <HeaderItem>Sign in</HeaderItem>
          </Link>
          <Link to='/sign-up'>
            <HeaderItem>Sign up</HeaderItem>
          </Link>
        </SignedOut>
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
      className='decoration-transparent hover:decoration-themeBlack hover:underline underline-offset-8 transition ease-in-out duration-300 hover:-translate-y-1 py-3'
    >
      {children}
    </div>
  );
};
