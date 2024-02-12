import React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

interface InputBoxProps extends ComponentProps<'input'> {}

const InputBox: FunctionComponent<InputBoxProps> = ({ ...props }) => {
  return (
    <input
      className='w-full p-3 bg-white rounded-bl-2xl focus:outline-none border-t b-[1px] border-neutral-200'
      placeholder='Start typing a message'
      {...props}
    />
  );
};

export default InputBox;
