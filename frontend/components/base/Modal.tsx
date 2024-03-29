import {
  ComponentProps,
  FunctionComponent,
  ReactNode,
  MouseEventHandler,
} from 'react';
import clsx from 'clsx';

export interface ModalProps extends ComponentProps<'div'> {
  children?: ReactNode;
  closeModal?: MouseEventHandler<HTMLDivElement>;
}

const Modal: FunctionComponent<ModalProps> = ({
  children,
  closeModal,
  ...props
}) => {
  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 w-svw h-svh bg-black opacity-80 ${
          closeModal ? 'cursor-pointer' : ''
        }`}
        onClick={(e) => {
          if (closeModal) closeModal(e);
        }}
      />
      <article className='fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 lg:w-1/2 2xl:w-1/3]'>
        <Card className='w-full max-h-[90vh]'>{children}</Card>
      </article>
    </>
  );
};

export default Modal;

interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        'p-4 md:p-8 lg:p-16 rounded-2xl bg-white shadow-md border-b-4 border-l-4 border-lightning-yellow-400',
        className
      )}
    >
      {children}
    </div>
  );
};

export const ModalH1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className='flex justify-center items-center text-2xl font-medium p-1 text-center'>
      {children}
    </h1>
  );
};

export const ModalH2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className='flex justify-center items-center text-lg text-neutral-400 font-light pb-10 text-center'>
      {children}
    </h2>
  );
};

export interface ModalButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export const ModalButton: FunctionComponent<ModalButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className='flex gap-4 bg-neutral-100 px-12 py-6 rounded-2xl border-b-4 border-t-[1px] border-l-[1px] border-r-[1px] border-neutral-100 hover:border-neutral-200 hover:shadow-xs'
    >
      {children}
    </button>
  );
};
