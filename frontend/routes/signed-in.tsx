import { useContext } from 'react';
import Main from '../components/base/Main';
import Chat from '../components/Chat';
import { RoomContext } from '../contexts/RoomContext';
import { useUser } from '@gadgetinc/react';
import { api } from '../api';

export default function () {
  const { room } = useContext(RoomContext) || {};
  const user = useUser(api);
  return <Main>{room && user && <Chat room={room} user={user} />}</Main>;
}
