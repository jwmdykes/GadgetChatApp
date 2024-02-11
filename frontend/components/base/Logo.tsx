import { FunctionComponent } from 'react';
import React from 'react';
import logoUrl from '../../assets/logo-notext.png';

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => (
  <a href='/' rel='noreferrer' className='max-h-fit'>
    <div className='flex items-center max-h-full h-5/6'>
      <img
        src={logoUrl}
        alt='QuickQuack Logo'
        className='h-full object-scale-down -mt-1'
      />
      <span className='font-bold text-xl tracking-tight'>QuickQuack</span>
    </div>
  </a>
);

export default Logo;
