import { RoomColorEnum } from '@gadget-client/chat-demo';
import { Component, ComponentProps, FunctionComponent, ReactNode } from 'react';

interface BadgeIconProps extends ComponentProps<'button'> {
  children?: ReactNode;
  color?: RoomColorEnum;
  active: boolean;
}

export const BadgeIcon: FunctionComponent<BadgeIconProps> = ({
  children,
  color,
  active,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${
        active ? `bg-${color}` : ''
      } relative rounded-2xl hover:cursor-pointer select-none text-xl aspect-square w-full flex px-3 items-center justify-center transition-colors duration-300 after:absolute after:rounded-2xl after:opacity-0 after:w-full after:h-full after:bg-black hover:after:opacity-10 after:transition-all after:duration-300`}
    >
      {children}
    </button>
  );
};
