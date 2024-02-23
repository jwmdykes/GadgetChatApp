import { SignedIn } from '@gadgetinc/react';
import { ComponentProps, ReactNode } from 'react';
import { FunctionComponent } from 'react';
import Logo from './base/Logo';
import { useUser } from '@gadgetinc/react';
import { api } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { BadgeIcon } from './base/BadgeIcon';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const user = useUser(api);

  return (
    <nav className='flex items-center justify-between h-14 pr-5'>
      <div className='pl-1 md:pl-2 pt-1 md:pt-2 h-full'>
        <BadgeIcon active={false}>
          <FontAwesomeIcon
            icon={faGear}
            size='lg'
            color='neutral-300'
          ></FontAwesomeIcon>
        </BadgeIcon>
      </div>

      <div className='mx-auto'>
        <Logo></Logo>
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

interface HeaderItemProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export const HeaderItem: FunctionComponent<HeaderItemProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className='decoration-transparent hover:decoration-lightning-yellow-500 hover:underline underline-offset-8 transition ease-in-out duration-300 hover:-translate-y-1 py-3 hover:cursor-pointer'
    >
      {children}
    </button>
  );
};
