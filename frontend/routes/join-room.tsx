import Main from '../components/base/Main';
import { useUser } from '@gadgetinc/react';
import { api } from '../api';
import Modal, { ModalButton, ModalH1, ModalH2 } from '../components/base/Modal';
import logoUrl from '../assets/logo-notext.png';
import { useParams, useNavigate } from 'react-router-dom';
import { useFindOne } from '@gadgetinc/react';
import { FormEvent } from 'react';

export default function () {
  const user = useUser(api);
  const { roomid } = useParams();
  const navigate = useNavigate();

  const [{ data: room, fetching, error }] = useFindOne(api.room, roomid!);

  const handleJoinRoom = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from actually submitting traditionally

    if (!user || !roomid) {
      console.error('No user or room ID found');
      return;
    }

    try {
      await api.roomMember.create({
        room: {
          _link: roomid,
        },
        user: {
          _link: user.id,
        },
      });
    } catch (error) {
      console.error('Error adding user to room:', error);
    }

    navigate('/signed-in');
  };

  if (fetching) return 'Loading...';
  if (error) return `Error loading data: ${error}`;

  return (
    <Main>
      <Modal closeModal={() => navigate('/signed-in')}>
        <img src={logoUrl} className='h-24 mx-auto pb-2' />
        <ModalH1>
          <span>
            You've been invited to join{' '}
            <span className='text-lightning-yellow-600'>{room?.name}</span>
          </span>
          &nbsp;
        </ModalH1>
        <ModalH2>{room?.description}</ModalH2>
        <form
          className='flex justify-center items-center'
          onSubmit={handleJoinRoom}
        >
          <ModalButton type='submit'>Join Room</ModalButton>
        </form>
      </Modal>
    </Main>
  );
}
