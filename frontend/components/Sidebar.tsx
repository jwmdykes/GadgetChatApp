import { ReactNode } from 'react';
import { ComponentProps, FunctionComponent } from 'react';

interface SidebarProps extends ComponentProps<'nav'> {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <nav className='w-[72px] h-full'>
      <ul className='flex flex-col gap-4 px-2 pt-2'>
        <li>
          <UserIcon>JD</UserIcon>
        </li>
        <li>
          <RoomIcon>1</RoomIcon>
        </li>
        <li>
          <RoomIcon>2</RoomIcon>
        </li>
        <li>
          <RoomIcon>3</RoomIcon>
        </li>
        <li>
          <RoomIcon>4</RoomIcon>
        </li>
      </ul>
    </nav>
  );
};

interface RoomIconProps extends ComponentProps<'div'> {
  children?: ReactNode;
}

export const RoomIcon: FunctionComponent<RoomIconProps> = ({ children }) => {
  return (
    <div className='rounded-full bg-neutral-100 border-neutral-300 border-[1px] w-full aspect-square flex justify-center items-center hover:cursor-pointer hover:border-neutral-400 select-none'>
      {children}
    </div>
  );
};

interface UserIconProps extends ComponentProps<'div'> {
  children?: ReactNode;
}

export const UserIcon: FunctionComponent<UserIconProps> = ({ children }) => {
  return (
    <div className='rounded-2xl bg-teal-50 border-teal-800 border-[1px] text-teal-800 w-full aspect-square flex justify-center items-center hover:cursor-pointer select-none text-2xl font-bold'>
      {children}
    </div>
  );
};

export default Sidebar;
