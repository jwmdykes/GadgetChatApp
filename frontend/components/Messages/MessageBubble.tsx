import { ComponentProps, FunctionComponent } from 'react';
import { Message, User } from './Types';

interface MessageBubbleProps extends ComponentProps<'section'> {
  message: Message;
  user: User;
}

const MessageBubble: FunctionComponent<MessageBubbleProps> = ({
  message,
  user,
}) => {
  console.log('IN MESSAGEBUBBLE');
  console.log(message);
  console.log(user);
  const bubbleColor = message.user === user.id ? 'bg-blue-100' : 'bg-green-100';

  return (
    <section
      className={`p-4 rounded-r-2xl rounded-tl-2xl w-fit max-w-2xl h-fit prose ${bubbleColor}`}
    >
      {message.content}
    </section>
  );
};

export default MessageBubble;
