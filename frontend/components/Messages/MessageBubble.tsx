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

  const textAlignment =
    message.user.id === user.id ? 'ml-auto' : 'ml-auto md:ml-0 md:mr-auto';

  const profilePicture = simpleBubble ? (
    <div className='w-10 md:w-12'></div>
  ) : (
    <img
      className='rounded-full w-10 h-10 md:h-12 md:w-12 shadow-md hover:cursor-pointer transform'
      src={message.user.googleImageUrl}
      alt={`${message.user.firstName} ${message.user.lastName}'s profile picture`}
    />
  );

  const name = message.user.firstName ?? 'Unknown';

  const date = new Date(message.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const messageBubble = (
    <div
      className={`flex flex-col px-4 md:px-6 py-2 justify-start items-center max-w-2xl w-fit shadow-sm text-base md:text-lg ${bubbleStyle}`}
    >
      {simpleBubble ? (
        <></>
      ) : (
        <div className={`w-full flex text-xs text-neutral-600 font-extralight`}>
          <span className={textAlignment}>{`${name} at ${date}`}</span>
        </div>
      )}
      <p className={`break-all ${textAlignment}`}>{message.content}</p>
    </div>
  );

  return (
    <div
      className={`gap-2 flex items-start ${simpleBubble ? 'pt-1 md:pt-2' : 'pt-3 md:pt-4'}`}
    >
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
