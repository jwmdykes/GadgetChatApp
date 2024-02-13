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
    console.log(messages);
    messagesEndRef.current!.scrollIntoView({ behavior: 'instant' });
  }, [messages]);

  return (
    <ul className={clsx('flex flex-col gap-3 mt-auto', className)}>
      {messages?.map((message) => (
        <li key={message.id}>
          <MessageBubble message={message} user={user}></MessageBubble>
        </li>
      ))}
      <li key='messages-end' ref={messagesEndRef} />
    </ul>
  );
};

export default MessageList;
