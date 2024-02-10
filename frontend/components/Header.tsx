import { SignedOut } from '@gadgetinc/react';
import React, { ComponentProps, ReactNode } from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <nav className='flex items-center justify-between bg-slate-100 h-12 shadow-md'>
      <HeaderItem>
        <a href='/' target='_self' rel='noreferrer'>
          {process.env.GADGET_PUBLIC_APP_SLUG}
        </a>
      </HeaderItem>
      <div className='flex items-center justify-center'>
        <SignedOut>
          <HeaderItem>
            <Link to='/sign-in'>Sign in</Link>
          </HeaderItem>
          <HeaderItem>
            <Link to='/sign-up'>Sign up</Link>
          </HeaderItem>
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
      className='px-3 py-1 hover:text-teal-400 font-medium text-xl'
    >
      {children}
    </div>
  );
};
