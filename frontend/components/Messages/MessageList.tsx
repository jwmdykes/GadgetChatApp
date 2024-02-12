import React from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { useFindMany } from '@gadgetinc/react';
import { api } from '../../api';
import MessageBubble from './MessageBubble';
import clsx from 'clsx';

interface MessageListProps extends ComponentProps<'ul'> {
  className?: string;
}

const MessageList: FunctionComponent<MessageListProps> = ({ className }) => {
  const [{ data, fetching, error }, refetch] = useFindMany(api.message, {
    first: 20,
  });

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={clsx('flex flex-col gap-3 mt-auto', className)}>
      {data?.map((message) => (
        <li key={message.id}>
          <MessageBubble message={message}></MessageBubble>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
