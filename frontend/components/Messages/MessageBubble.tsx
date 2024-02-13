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
  const bubbleColor =
    message.user === user.id
      ? 'bg-blue-100 ml-auto rounded-tr-2xl rounded-l-2xl'
      : 'bg-green-100 rounded-tl-2xl rounded-r-2xl';

  return (
    <section className={`p-4 w-fit max-w-2xl h-fit prose ${bubbleColor}`}>
      {message.content}
    </section>
  );
};

export default MessageBubble;
