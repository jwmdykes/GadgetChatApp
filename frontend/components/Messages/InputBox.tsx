import { ComponentProps, FunctionComponent } from 'react';
import clsx from 'clsx';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InputBoxProps extends ComponentProps<'input'> {
  sendMessage: (message: string) => void;
}

const InputBox: FunctionComponent<InputBoxProps> = ({
  sendMessage,
  ...props
}) => {
  return (
    <form
      className='flex bg-white rounded-bl-2xl py-3 px-6 w-full border-t b-[1px] border-neutral-200 m-0'
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const message = formData.get('input');
        if (typeof message === 'string' && message !== '') {
          sendMessage(message);
        }
        e.currentTarget.reset();
      }}
    >
      <input
        type='text'
        name='input'
        className='w-full focus:outline-none '
        placeholder='Start typing a message'
        autoComplete='off'
        {...props}
      />
      <SubmitButton className='submit' />
    </form>
  );
};

interface SubmitButtonProps extends ComponentProps<'button'> {
  className?: string;
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'min-h-full flex flex-1 justify-center items-center hover:text-lightning-yellow-500 text-gray-500 transition-colors duration-200',
        className
      )}
      {...props}
    >
      <FontAwesomeIcon icon={faPaperPlane} size='lg' />
    </button>
  );
};

export default InputBox;
