import { ComponentProps, FunctionComponent } from 'react';
import { Message, User } from './Types';

interface MessageBubbleProps extends ComponentProps<'section'> {
  message: any;
  user: User;
  simpleBubble: boolean; // simpler version of message for consecutive messages by the same user.
}

const MessageBubble: FunctionComponent<MessageBubbleProps> = ({
  simpleBubble,
  message,
  user,
}) => {
  let bubbleStyle =
    message.user.id === user.id
      ? 'bg-blue-100 ml-auto rounded-br-2xl rounded-l-2xl'
      : 'bg-green-100 rounded-bl-2xl rounded-r-2xl';
  bubbleStyle += simpleBubble ? ' rounded-2xl' : '';

  const textAlignment = message.user.id === user.id ? 'ml-auto' : 'mr-auto';

  const profilePicture = simpleBubble ? (
    <div className='w-12'></div>
  ) : (
    <img
      className='mt-1 rounded-full h-12 w-12 shadow-md hover:cursor-pointer'
      src={message.user.googleImageUrl}
      alt={`${message.user.firstName} ${message.user.lastName}'s profile picture`}
    />
  );

  const messageBubble = (
    <div
      className={`flex flex-col px-6 py-2 justify-center items-center max-w-2xl w-fit shadow-md text-lg ${bubbleStyle}`}
    >
      {simpleBubble ? (
        <></>
      ) : (
        <span
          className={`text-xs text-neutral-600 font-extralight ${textAlignment}`}
        >{`${message.user.firstName} ${message.user.lastName} at ${new Date(
          message.createdAt
        ).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}`}</span>
      )}
      <p className={`break-all ${textAlignment}`}>{message.content}</p>
    </div>
  );

  return (
    <div className='flex gap-2'>
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
