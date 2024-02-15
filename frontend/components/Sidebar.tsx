import { useUser } from '@gadgetinc/react';
import { ReactNode } from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import Logo, { LogoImage } from './base/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps extends ComponentProps<'nav'> {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <nav className='w-14 md:w-16 h-full px-1 md:px-2'>
      <div className='h-[2px] rounded-full mx-auto w-3/5 bg-neutral-200 mb-2 mt-2'></div>
      <ul className='flex flex-col gap-2 md:gap-4'>
        <li>
          <RoomIcon color='pastel-red' active={false}>
            ❤️
          </RoomIcon>
        </li>
        <li>
          <RoomIcon color='pastel-blue' active={false}>
            😂
          </RoomIcon>
        </li>
        <li>
          <RoomIcon color='pastel-purple' active={true}>
            🎶
          </RoomIcon>
        </li>
        <li>
          <RoomIcon color='pastel-yellow' active={false}>
            😶‍🌫️
          </RoomIcon>
        </li>
      </ul>
    </nav>
  );
};

// Define the colors in a const array
const roomColors = [
  'pastel-blue',
  'pastel-red',
  'pastel-yellow',
  'pastel-orange',
  'pastel-purple',
  'neutral-300',
] as const;

type RoomColor = (typeof roomColors)[number];

interface RoomIconProps extends ComponentProps<'div'> {
  children?: ReactNode;
  color?: RoomColor;
  active: boolean;
}

export const RoomIcon: FunctionComponent<RoomIconProps> = ({
  children,
  color,
  active,
}) => {
  // Use the provided color, or select a random one if not specified
  const finalColor =
    color || roomColors[Math.floor(Math.random() * roomColors.length)];

  return (
    <div
      className={`rounded-2xl ${
        active ? `bg-${finalColor}` : 'bg-neutral-100'
      } w-full aspect-square flex justify-center items-center hover:cursor-pointer select-none text-xl`}
    >
      {children}
    </div>
  );
};

export default Sidebar;
