import { useUser, useFindMany, useActionForm } from '@gadgetinc/react';
import { api } from '../api';
import { useState, useMemo } from 'react';
import MessageList from './Messages/MessageList';
import InputBox from './Messages/InputBox';

export interface ChatProps {}

const Chat = ({ ...props }: ChatProps) => {
  const user = useUser(api);
  const [{ data, fetching, error }, refetch] = useFindMany(api.message, {
    last: 20,
    live: true,
    select: {
      _all: true,
    },
  });
  const [optimisticMessages, setOptimisticMessages] = useState<any>([]);

  const sendMessage = async (messageText: string) => {
    console.log('DATA');
    console.log(data);
    const optimisticId = (Date.now() + Math.random()).toString();
    const optimisticMessage = {
      content: messageText,
      room: {
        id: '123',
      },
      user: user,
    };
    setOptimisticMessages((prev: any) => [
      ...prev,
      {
        id: optimisticId,
        ...optimisticMessage,
      },
    ]);

    try {
      await api.message.create({
        content: messageText,
        room: {
          _link: '123',
        },
        user: {
          _link: user.id,
        },
      });
    } finally {
      setOptimisticMessages((prev: any) =>
        prev.filter((msg: any) => msg.id !== optimisticId)
      );
    }
  };

  const messages = useMemo(() => {
    const allValues = data ? data.map((x) => x._all) : [];
    return [...allValues, ...optimisticMessages];
  }, [data, optimisticMessages]);

  return (
    <div className='flex flex-col h-full justify-end'>
      <div className='max-h-fit overflow-y-scroll p-6 '>
        <MessageList messages={messages} user={user} />
      </div>
      <div className='z-10'>
        <InputBox sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
