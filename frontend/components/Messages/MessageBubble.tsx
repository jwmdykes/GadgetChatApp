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
    <section className='p-4 rounded-r-2xl rounded-tl-2xl bg-blue-100 w-fit max-w-2xl h-fit prose'>
      {message.content}
    </section>
  );
};

export default MessageBubble;
