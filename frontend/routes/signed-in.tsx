import { useContext } from 'react';
import Main from '../components/base/Main';
import Chat from '../components/Chat';
import { RoomContext } from '../contexts/RoomContext';
import { useUser } from '@gadgetinc/react';
import { api } from '../api';

export default function () {
  const { room } = useContext(RoomContext) || {};
  const user = useUser(api);
  return (
    <Main>
      {/* to force the Chat component to rerender when the room changes,
          we set the room id as its key.
      */}
      {room && user && <Chat room={room} user={user} key={room.id} />}
    </Main>
  );
}
