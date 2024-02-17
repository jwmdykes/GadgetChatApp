import { useFindFirst, useFindMany, useUser } from '@gadgetinc/react';
import { ReactNode, useState } from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { Room, RoomColorEnum } from '@gadget-client/chat-demo';
import { api } from '../api';
import { BadgeIcon } from './base/BadgeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps extends ComponentProps<'nav'> {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const user = useUser(api);
  const [activeRoom, setActiveRoom] = useState<number>(0);
  const [{ data: rooms, fetching, error }, refetch] = useFindMany(api.room, {
    select: {
      id: true,
      color: true,
    },
  });

  if (fetching) {
    return <div>FETCHING</div>;
  }

  if (error) {
    console.error(error);
    return <div>ERROR!</div>;
  }

  return (
    <nav className='w-14 md:w-16 h-full px-1 md:px-2'>
      <div className='h-[2px] rounded-full mx-auto w-3/5 bg-neutral-200 mb-2 mt-2'></div>
      <ul className='flex flex-col gap-2 md:gap-3'>
        {rooms?.map((room, idx) => (
          <li key={room.id} onClick={() => setActiveRoom(idx)}>
            <BadgeIcon
              color={room.color}
              active={idx === activeRoom}
            ></BadgeIcon>
          </li>
        ))}
        <li>
          <BadgeIcon active={false}>
            <FontAwesomeIcon icon={faPlus} size={'lg'}></FontAwesomeIcon>
          </BadgeIcon>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
