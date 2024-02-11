import { GadgetRecord } from '@gadget-client/chat-demo';
import React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

interface MessageBubbleProps extends ComponentProps<'section'> {
  message: GadgetRecord<{
    __typename: 'Message';
    id: string;
    createdAt: Date;
    updatedAt: Date;
    content: string;
  }>;
}

const MessageBubble: FunctionComponent<MessageBubbleProps> = ({ message }) => {
  return (
    <section className='p-5 rounded-lg bg-blue-100 w-full h-fit'>
      {message.content}
    </section>
  );
};

export default MessageBubble;
