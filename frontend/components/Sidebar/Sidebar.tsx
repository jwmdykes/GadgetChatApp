import { useFindMany, useUser } from '@gadgetinc/react';
import { useContext, useEffect, useState } from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { api } from '../../api';
import { BadgeIcon } from '../base/BadgeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NewRoomForm from './NewRoomForm';
import { RoomContext } from '../../contexts/RoomContext';
import { Room } from '@gadget-client/chat-demo';

interface SidebarProps extends ComponentProps<'nav'> {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const user = useUser(api);
  const roomContext = useContext(RoomContext);
  const [activeRoom, setActiveRoom] = useState<number | null>(null);
  const changeRoom = function (room: Room | null, idx: number) {
    roomContext?.setRoom(room);
    setActiveRoom(idx);
  };

  const [newServerModalVisible, setNewServerModalVisible] =
    useState<boolean>(false);

  const [
    { data: userRooms, fetching: fetchingUserRooms, error: userRoomsError },
  ] = useFindMany(api.roomMember, {
    select: {
      room: {
        id: true,
      },
    },
    filter: {
      user: { equals: user?.id },
    },
  });

  if (userRoomsError) {
    console.error(userRoomsError);
  }

  const roomIds = userRooms
    ?.filter((item) => item?.room?.id != null)
    .map((item) => item?.room?.id) as string[];
  console.log('roomIds', roomIds);
  const [{ data: rooms, fetching, error }, refetch] = useFindMany(api.room, {
    live: true,
    filter: {
      id: {
        in: roomIds && roomIds.length > 0 ? roomIds : [],
      },
    },
  });

  if (error) {
    console.error(error);
  }

  // select first room by default
  useEffect(() => {
    if (!activeRoom && rooms?.length && rooms.length > 0) {
      changeRoom(rooms[0] as unknown as Room, 0);
    }
  }, [rooms]);

  return (
    <nav className='w-14 md:w-16 h-full px-1 md:px-2'>
      <div className='h-[2px] rounded-full mx-auto w-3/5 bg-neutral-200 mb-2 mt-2'></div>
      <ul className='flex flex-col gap-2 md:gap-3'>
        {rooms?.map((room, idx) => (
          <li
            key={room.id}
            onClick={() => changeRoom(room as unknown as Room, idx)}
          >
            <BadgeIcon color={room.color} active={idx === activeRoom}>
              <span className='font-bold text-3xl font-protestRiot'>
                {room?.icon ? room.icon : room.name[0].toUpperCase()}
              </span>
            </BadgeIcon>
          </li>
        ))}
        <li>
          <BadgeIcon
            active={false}
            onClick={() => {
              setNewServerModalVisible(true);
            }}
          >
            <FontAwesomeIcon icon={faPlus} size={'lg'}></FontAwesomeIcon>
          </BadgeIcon>
        </li>
      </ul>
      {newServerModalVisible && (
        <NewRoomForm closeModal={() => setNewServerModalVisible(false)} />
      )}
    </nav>
  );
};

export default Sidebar;
