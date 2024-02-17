import { useFindFirst, useFindMany, useUser } from '@gadgetinc/react';
import { ReactNode, useState } from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { Room, RoomColorEnum } from '@gadget-client/chat-demo';
import { api } from '../api';
import { BadgeIcon } from './base/BadgeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal, { ModalButton, ModalH1, ModalH2 } from './base/Modal';

interface SidebarProps extends ComponentProps<'nav'> {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const [activeRoom, setActiveRoom] = useState<number>(0);
  const [newServerModalVisible, setNewServerModalVisible] =
    useState<boolean>(false);
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
        <Modal closeModal={() => setNewServerModalVisible(false)}>
          <ModalH1>New Server</ModalH1>
          <ModalH2>
            Create a new server to start chatting with your friends.
          </ModalH2>
          <form
            onSubmit={() => {
              alert('submit');
            }}
            className='flex w-full h-full justify-center items-center'
          >
            <input type='text' name='name' id='name' />
            <input type='text' name='' id='' />
            <ModalButton type='submit'>Submit</ModalButton>
          </form>
        </Modal>
      )}
    </nav>
  );
};

export default Sidebar;
