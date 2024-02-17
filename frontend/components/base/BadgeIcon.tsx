import { RoomColorEnum } from '@gadget-client/chat-demo';
import { Component, ComponentProps, FunctionComponent, ReactNode } from 'react';

interface BadgeIconProps extends ComponentProps<'div'> {
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
    <div
      {...props}
      className={`${
        active ? 'bg-${color}' : ''
      } rounded-2xl hover:cursor-pointer select-none text-xl aspect-square h-full flex px-3 items-center justify-center hover:bg-neutral-200 hover:shadow-md transition-colors duration-300`}
    >
      {children}
    </div>
  );
};
