import { useUser, useFindMany, useActionForm } from '@gadgetinc/react';
import { api } from '../api';
import { useState, useMemo, useEffect } from 'react';
import MessageList from './Messages/MessageList';
import InputBox from './Messages/InputBox';
import { User } from '@gadget-client/chat-demo';
import { Message } from '@gadget-client/chat-demo';

export interface ChatProps {}

const Chat = ({ ...props }: ChatProps) => {
  const user: User = useUser(api);
  const [{ data, fetching, error }, refetch] = useFindMany(api.message, {
    last: 20,
    live: true,
    select: {
      optimisticId: true, // client created id so we can optimistically show the message in the UI and replace it with the actual message.
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

  const messages = useMemo<Message[]>(() => {
    const optimisticIds = data?.map((msg: any) => msg.optimisticId);
    const optimisticNoDuplicateMessages = optimisticMessages.filter(
      (msg: any) => {
        return !optimisticIds?.includes(msg.optimisticId);
      }
    );
    return [...(data || []), ...(optimisticNoDuplicateMessages || [])];
  }, [data, optimisticMessages]);

  if (error) {
    console.error(error);
    return (
      <div className='prose-sm md:prose-base w-full h-full flex justify-center items-center mx-auto'>
        <h1 className='bg-red-100 p-4 md:p-8 rounded-2xl border-b-4 border-l-4 border-red-300 shadow-sm'>
          Error Loading Messages.
        </h1>
      </div>
    );
  }

  const sendMessage = async (messageText: string) => {
    // we generate an id in the client so we can optimistically show the created message to the user.
    // There is a potential for messages showing that weren't really sent, but a page refresh will fix this.
    // Ideally there would be an indicator when a message fails to send.
    const optimisticId = crypto.randomUUID();

    setOptimisticMessages((prev: any) => {
      const opt = [
        ...prev,
        {
          id: optimisticId,
          optimisticId: optimisticId,
          content: messageText,
          createdAt: Date.now(),
          room: '123',
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            googleImageUrl: user.googleImageUrl,
          },
        },
      ];
      return opt;
    });

    try {
      await api.message.create({
        content: messageText,
        optimisticId: optimisticId,
        room: {
          _link: '123',
        },
        user: {
          _link: user.id,
        },
      });
    } finally {
    }
  };

  return (
    <div className='flex flex-col h-full justify-end'>
      <div className='flex-grow max-h-fit p-2 md:p-6 overflow-y-scroll'>
        <div className='max-w-4xl mx-auto'>
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
