import Main from '../components/base/Main';
import { useFindMany, useUser } from '@gadgetinc/react';
import { api } from '../api';
import Modal, { ModalButton, ModalH1, ModalH2 } from '../components/base/Modal';
import logoUrl from '../assets/logo-notext.png';
import { useParams, useNavigate } from 'react-router-dom';
import { useFindOne } from '@gadgetinc/react';

export default function () {
  const user = useUser(api);
  const { roomid } = useParams();
  const navigate = useNavigate();

  const [{ data: room, fetching, error }] = useFindOne(api.room, roomid!);

  const [{ data: roomMember, fetching: memberFetching, error: memberError }] =
    useFindMany(api.roomMember, {
      select: {
        id: true,
        roomId: true,
        userId: true,
      },
      filter: {
        room: {
          equals: roomid,
        },
        user: {
          equals: user.id,
        },
      },
    });

  console.log('roomid:', roomid);
  console.log('userid:', user.id);
  console.log('roomMember:', roomMember);

  const handleLeaveRoom = async () => {
    if (!user || !roomid) {
      console.error('No user or room ID found');
      return;
    }

    try {
      roomMember?.forEach(async (member) => {
        await api.roomMember.delete(member.id);
      });

      console.log('User removed from room successfully');
      navigate('/signed-in'); // Redirect the user after leaving the room
    } catch (error) {
      console.error('Error leaving room:', error);
    }
  };

  if (fetching) return 'Loading...';
  if (error) return `Error loading data: ${error}`;

  return (
    <Main>
      <Modal closeModal={() => navigate('/signed-in')}>
        <img src={logoUrl} className='h-24 mx-auto pb-2' />
        <ModalH1>
          <span>
            Are you sure you would like to leave{' '}
            <span className='text-lightning-yellow-600'>{room?.name}</span>?
          </span>
          &nbsp;
        </ModalH1>
        <ModalH2>{room?.description}</ModalH2>
        <form
          className='flex justify-center items-center'
          onSubmit={handleLeaveRoom}
        >
          <ModalButton type='submit'>Leave Room</ModalButton>
        </form>
      </Modal>
    </Main>
  );
}
