import { ComponentProps, FunctionComponent } from 'react';
import { Message, User } from './Types';

interface MessageBubbleProps extends ComponentProps<'section'> {
  message: any;
  user: User;
}

const MessageBubble: FunctionComponent<MessageBubbleProps> = ({
  message,
  user,
}) => {
  const bubbleColor =
    message.user.id === user.id
      ? 'bg-blue-100 ml-auto rounded-tr-2xl rounded-l-2xl'
      : 'bg-green-100 rounded-tl-2xl rounded-r-2xl';

  return (
    <section className={`px-6 py-2 w-fit max-w-2xl h-fit prose ${bubbleColor}`}>
      {message.content}
    </section>
  );
};

export default MessageBubble;