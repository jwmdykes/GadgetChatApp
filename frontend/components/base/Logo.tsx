import { FunctionComponent } from 'react';
import logoUrl from '../../assets/logo-notext.png';

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => (
  <a
    href='/'
    rel='noreferrer'
    className='max-h-fit flex justify-center items-center'
  >
    <img
      src={logoUrl}
      alt='QuickQuack Logo'
      className='h-14 object-scale-down -mt-1'
    />
    <span className='font-bold text-xl tracking-tight -ml-1'>QuickQuack</span>
  </a>
);

export default Logo;
