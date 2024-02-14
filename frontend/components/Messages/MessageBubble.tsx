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

  const alignment = message.user.id === user.id ? 'ml-auto' : 'mr-auto';

  const profilePicture = (
    <img
      className='rounded-full h-12 shadow-md hover:cursor-pointer'
      src={message.user.googleImageUrl}
      alt={`${message.user.firstName} ${message.user.lastName}'s profile picture`}
    />
  );

  const messageBubble = (
    <div
      className={`flex flex-col px-6 py-2 max-w-2xl w-fit prose shadow-md text-lg ${bubbleColor}`}
    >
      <span
        className={`text-xs text-neutral-600 font-extralight ${alignment}`}
      >{`${message.user.firstName} ${message.user.lastName} at ${new Date(
        message.createdAt
      ).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`}</span>
      <p className={`mt-2 break-all ${alignment}`}>{message.content}</p>
    </div>
  );

  return (
    <div className='flex gap-2 items-center'>
      {message.user.id === user.id ? (
        <>
          {messageBubble}
          {profilePicture}
        </>
      ) : (
        <>
          {profilePicture}
          {messageBubble}
        </>
      )}
    </div>
  );
};

export default MessageBubble;
