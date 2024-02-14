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
      id: true,
      content: true,
      createdAt: true,
      user: {
        id: true,
        firstName: true,
        lastName: true,
        googleImageUrl: true,
      },
    },
  });

  const [optimisticMessages, setOptimisticMessages] = useState<any>([]);

  const messages = useMemo(() => {
    return [...(data || []), ...(optimisticMessages || [])];
  }, [data, optimisticMessages]);

  if (error) {
    console.error(error);
    return (
      <div className='prose w-full h-full flex justify-center items-center mx-auto'>
        <h1 className='bg-red-100 p-8 rounded-2xl border-b-4 border-l-4 border-red-300 shadow-sm'>
          Error Loading Messages.
        </h1>
      </div>
    );
  }

  const sendMessage = async (messageText: string) => {
    const optimisticId = (Date.now() + Math.random()).toString();
    const optimisticMessage = {
      content: messageText,
      room: '123',
      user: user,
    };
    setOptimisticMessages((prev: any) => {
      const opt = [
        ...prev,
        {
          id: optimisticId,
          ...optimisticMessage,
        },
      ];
      return opt;
    });

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

  return (
    <div className='flex flex-col h-full justify-end'>
      <div className='flex-grow max-h-fit p-6 overflow-y-scroll'>
        <div className='max-w-4xl mx-auto mt-'>
          <MessageList messages={messages} user={user} />
        </div>
      </div>
      <div className='z-10'>
        <InputBox sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
