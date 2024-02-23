import { useRef, useEffect, useState } from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import MessageBubble from './MessageBubble';
import clsx from 'clsx';
import { Message } from '@gadget-client/chat-demo';
import { User } from '@gadget-client/chat-demo';

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
  const [prevWindowHeight, setPrevWindowHeight] = useState(window.innerHeight);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // start at bottom of page
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // scroll to bottom of page on vertical resize
  // only do so on vertical resize when the window
  // is getting smaller.
  useEffect(() => {
    const handleResize = () => {
      const currentWindowHeight = window.innerHeight;

      if (currentWindowHeight < prevWindowHeight) {
        scrollToBottom();
      }

      setPrevWindowHeight(currentWindowHeight);
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [prevWindowHeight]);

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
