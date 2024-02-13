import { ComponentProps, FunctionComponent, ReactNode } from 'react';

interface MainProps extends ComponentProps<'main'> {
  children: ReactNode;
}

const Main: FunctionComponent<MainProps> = ({ children, ...props }) => {
  return (
    <main
      {...props}
      className='w-full h-full bg-neutral-100 border-l-[1px] border-t-[1px] border-b-[1px] border-themeBorderColor rounded-l-2xl'
    >
      {children}
    </main>
  );
};

export default Main;
