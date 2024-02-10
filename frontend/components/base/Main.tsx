import React from 'react';
import { ComponentProps, FunctionComponent, ReactNode } from 'react';

interface MainProps extends ComponentProps<'main'> {
  children: ReactNode;
}

const Main: FunctionComponent<MainProps> = ({ children, ...props }) => {
  return (
    <main {...props} className='mt-10 container m-auto'>
      {children}
    </main>
  );
};

export default Main;
