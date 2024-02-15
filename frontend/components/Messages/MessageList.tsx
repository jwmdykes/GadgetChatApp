import { useRef, useEffect } from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import MessageBubble from './MessageBubble';
import { Message, User } from './Types';
import clsx from 'clsx';

interface MessageListProps extends ComponentProps<'ul'> {
  className?: string;
  user: User;
  messages: Message[];
}

const MessageList: FunctionComponent<MessageListProps> = ({
  className,
  messages,
  user,
}) => {
  const messagesEndRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    messagesEndRef.current!.scrollIntoView({ behavior: 'instant' });
  }, [messages]);

  return (
    <ul className={clsx('flex flex-col mt-auto', className)}>
      {messages?.map((message, index) => (
        <li key={message.optimisticId}>
          <MessageBubble
            message={message}
            user={user}
            simpleBubble={
              index > 0 && messages[index - 1].user.id === message.user.id
            }
          ></MessageBubble>
        </li>
      ))}
      <li key='messages-end' ref={messagesEndRef} />
    </ul>
  );
};

export default MessageList;
