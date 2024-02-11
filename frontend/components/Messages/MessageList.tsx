import React from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { useFindMany } from '@gadgetinc/react';
import { api } from '../../api';
import MessageBubble from './MessageBubble';

interface MessageListProps extends ComponentProps<'ul'> {}

const MessageList: FunctionComponent<MessageListProps> = () => {
  const [{ data, fetching, error }, refetch] = useFindMany(api.message, {
    first: 10,
  });

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className='flex flex-col gap-4 '>
      {data?.map((message) => (
        <li key={message.id}>
          <MessageBubble message={message}></MessageBubble>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
