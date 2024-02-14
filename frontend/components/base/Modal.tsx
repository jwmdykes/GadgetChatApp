import { ComponentProps, FunctionComponent, ReactNode, useState, MouseEventHandler } from 'react';
import clsx from 'clsx';

interface ModalProps extends ComponentProps<'div'> {
  children: ReactNode;
  close: MouseEventHandler<HTMLDivElement>;
}

const Modal: FunctionComponent<ModalProps> = ({ children, ...props }) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-svw h-svh bg-black opacity-80' onClick={close} />
      <article className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Card className='w-full h-full'>
          {children}
        </Card>
      </article>
    </>
  );
};

export default Modal;

interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('p-16 rounded-2xl bg-white shadow-md border-b-4 border-l-4 border-themeYellow', className)}>
      {children}
    </div>
  )
}